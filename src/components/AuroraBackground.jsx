import { useEffect, useRef } from 'react';

const VERT_SRC = `
attribute vec2 a_pos;
void main() {
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Organic, multi-layered aurora shader
// Colors tuned to deep indigo / violet / electric blue — matching Metalab's palette
const FRAG_SRC = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;

// Smooth noise helpers
vec3 mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
  + i.y + vec4(0.0, i1.y, i2.y, 1.0))
  + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  // aspect-correct, centered coordinates
  vec2 p  = (uv - 0.5) * vec2(u_res.x / u_res.y, 1.0);

  float t = u_time * 0.12;

  // --- Layer 1: big slow aurora sweep ---
  float n1 = snoise(vec3(p * 1.4 + vec2(0.0, t * 0.4), t * 0.25));
  // --- Layer 2: medium drift, perpendicular ---
  float n2 = snoise(vec3(p * 2.2 + vec2(-t * 0.35, 0.1), t * 0.18 + 1.7));
  // --- Layer 3: fine shimmer on top ---
  float n3 = snoise(vec3(p * 4.5 + vec2(t * 0.2, t * 0.3), t * 0.3 + 3.5));

  // Combine layers
  float wave = n1 * 0.55 + n2 * 0.30 + n3 * 0.15;

  // Normalise to [0,1]
  float w = wave * 0.5 + 0.5;

  // Deep dark base: near-black indigo
  vec3 baseColor     = vec3(0.03, 0.02, 0.07);
  // Mid: deep purple
  vec3 purpleColor   = vec3(0.20, 0.04, 0.45);
  // Accent: electric indigo/violet
  vec3 violetColor   = vec3(0.38, 0.10, 0.85);
  // Highlight: electric blue
  vec3 blueColor     = vec3(0.08, 0.28, 0.90);
  // Rare shimmer: icy white-blue
  vec3 shimmerColor  = vec3(0.55, 0.65, 1.00);

  // Multi-stop gradient
  vec3 col;
  if (w < 0.30) {
    col = mix(baseColor, purpleColor, w / 0.30);
  } else if (w < 0.60) {
    col = mix(purpleColor, violetColor, (w - 0.30) / 0.30);
  } else if (w < 0.82) {
    col = mix(violetColor, blueColor, (w - 0.60) / 0.22);
  } else {
    col = mix(blueColor, shimmerColor, (w - 0.82) / 0.18);
  }

  // Vignette — darken edges strongly to keep text readable
  float dist = length(uv - 0.5) * 2.0;
  float vig  = smoothstep(1.6, 0.0, dist);
  col *= vig;

  // Extra base darkness so content stays legible
  col *= 0.72;

  gl_FragColor = vec4(col, 1.0);
}
`;

export default function AuroraBackground() {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);
  const glRef     = useRef(null);
  const progRef   = useRef(null);
  const uRef      = useRef({});

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;
    glRef.current = gl;

    // compile shader
    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER,   VERT_SRC));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG_SRC));
    gl.linkProgram(prog);
    gl.useProgram(prog);
    progRef.current = prog;

    // full-screen quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1,-1,  1,-1,  -1,1,
       1,-1,  1, 1,  -1,1
    ]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a_pos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    uRef.current = {
      res:  gl.getUniformLocation(prog, 'u_res'),
      time: gl.getUniformLocation(prog, 'u_time'),
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();
    window.addEventListener('resize', resize);

    let startTime = performance.now();
    const render = () => {
      const t = (performance.now() - startTime) / 1000;
      gl.uniform2f(uRef.current.res, canvas.width, canvas.height);
      gl.uniform1f(uRef.current.time, t);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      rafRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%', height: '100%',
        zIndex: 0,
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  );
}
