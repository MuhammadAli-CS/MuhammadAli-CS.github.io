import React, { useState, useEffect } from 'react';

const TerminalHero = () => {
  const [lines, setLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const commandSequence = [
    { text: "whoami", type: "input", delay: 800 },
    { text: "Muhammad Ali — CS Undergrad @ Cornell & AI Researcher", type: "output", delay: 400 },
    { text: "./load_skills.sh", type: "input", delay: 1000 },
    { text: "Loading ML pipelines... [OK]", type: "output", delay: 300 },
    { text: "Initializing predictive models... [OK]", type: "output", delay: 200 },
    { text: "System ready. Welcome to the workspace.", type: "output", delay: 200 }
  ];

  useEffect(() => {
    if (currentLineIndex >= commandSequence.length) return;

    const currentCommand = commandSequence[currentLineIndex];

    if (currentCommand.type === "input") {
      if (currentCharIndex < currentCommand.text.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1);
        }, Math.random() * 50 + 30); // typing speed
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setLines(prev => [...prev, { text: currentCommand.text, type: "input" }]);
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }, currentCommand.delay);
        return () => clearTimeout(timeout);
      }
    } else {
      const timeout = setTimeout(() => {
        setLines(prev => [...prev, { text: currentCommand.text, type: "output" }]);
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
      }, currentCommand.delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className="w-full max-w-2xl bg-[#0d0d12]/80 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 shadow-2xl mt-8">
      {/* Mac OS Top Bar */}
      <div className="bg-[#1a1a24] px-4 py-3 flex items-center gap-2 border-b border-white/5">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="ml-4 flex-grow text-center text-xs text-gray-500 font-mono">
          user@muhammad-ali:~
        </div>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm sm:text-base text-gray-300 min-h-[220px]">
        {lines.map((line, i) => (
          <div key={i} className="mb-2">
            {line.type === "input" ? (
              <span><span className="text-secondary">➜</span> <span className="text-primary">~</span> {line.text}</span>
            ) : (
              <span className="text-gray-400">{line.text}</span>
            )}
          </div>
        ))}
        
        {currentLineIndex < commandSequence.length && commandSequence[currentLineIndex].type === "input" && (
          <div className="mb-2 inline-block">
            <span className="text-secondary">➜</span> <span className="text-primary">~</span>{' '}
            {commandSequence[currentLineIndex].text.substring(0, currentCharIndex)}
            <span className="inline-block w-2 h-4 bg-white/70 ml-1 translate-y-[2px] animate-pulse"></span>
          </div>
        )}
        
        {currentLineIndex >= commandSequence.length && (
          <div className="mt-2 text-primary animate-pulse">_</div>
        )}
      </div>
    </div>
  );
};

export default TerminalHero;
