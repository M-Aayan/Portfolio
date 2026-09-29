"use client";

import React, { useState, useEffect, useRef } from "react";
import { Terminal, Check, Copy, Play, RotateCcw, Sparkles, FileCode, CheckCircle2 } from "lucide-react";

const INITIAL_CODE: Record<string, string> = {
  "developer.js": `const developer = {
  name: "Muhammad Aayan Shaikh",
  role: "Frontend Developer",
  learning: ["Next.js", "Backend", "Databases"]
};

console.log("Hello from " + developer.name);`,
  "skills.config.js": `const stack = {
  frontend: ["React", "JavaScript", "Tailwind CSS"],
  design: ["Figma", "Canva", "Photopea"],
  aiTools: ["Claude", "Gemini", "ChatGPT", "Antigravity"]
};

console.log("Stack loaded: " + stack.frontend.join(", "));`,
};

export function CodeEditorHeroWidget() {
  const [activeTab, setActiveTab] = useState<"developer.js" | "skills.config.js">("developer.js");
  const [code, setCode] = useState<string>(INITIAL_CODE["developer.js"]);
  const [copied, setCopied] = useState(false);
  const [isUserEditing, setIsUserEditing] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [outputConsole, setOutputConsole] = useState<string | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const fullCode = INITIAL_CODE[activeTab];

  // Auto-typing animation on tab switch
  useEffect(() => {
    setIsUserEditing(false);
    setCode("");
    setOutputConsole(null);

    let current = 0;
    const interval = setInterval(() => {
      current += 4;
      if (current >= fullCode.length) {
        setCode(fullCode);
        clearInterval(interval);
      } else {
        setCode(fullCode.slice(0, current));
      }
    }, 25);

    return () => clearInterval(interval);
  }, [activeTab, fullCode]);

  // Stop auto animation immediately on user interaction
  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIsUserEditing(true);
    setCode(e.target.value);
  };

  const handleTextareaFocus = () => {
    if (!isUserEditing) {
      setIsUserEditing(true);
      setCode(fullCode);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Real, safe JavaScript code execution engine
  const handleRunCode = () => {
    setIsRunning(true);
    setOutputConsole(null);

    setTimeout(() => {
      setIsRunning(false);
      try {
        const logs: string[] = [];
        const customConsole = {
          log: (...args: any[]) => {
            logs.push(args.map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : String(a))).join(" "));
          },
          error: (...args: any[]) => {
            logs.push("[ERROR] " + args.map((a) => String(a)).join(" "));
          },
          warn: (...args: any[]) => {
            logs.push("[WARN] " + args.map((a) => String(a)).join(" "));
          },
        };

        // Create an isolated evaluation scope
        const runFn = new Function("console", code);
        const result = runFn(customConsole);

        if (logs.length > 0) {
          setOutputConsole(`> ${logs.join("\n> ")}`);
        } else if (result !== undefined) {
          setOutputConsole(`> Return: ${typeof result === "object" ? JSON.stringify(result, null, 2) : String(result)}`);
        } else {
          setOutputConsole(`✓ Code executed successfully with no output.`);
        }
      } catch (err: any) {
        setOutputConsole(`✕ [Runtime Error] ${err.message || String(err)}`);
      }
    }, 300);
  };

  const handleReset = () => {
    setIsUserEditing(false);
    setCode(INITIAL_CODE[activeTab]);
    setOutputConsole(null);
  };

  const lines = code.split("\n");

  return (
    <div className="w-full max-w-xl rounded-2xl border border-slate-200 dark:border-dark-border/90 bg-white/95 dark:bg-[#0a0c14]/95 p-5 md:p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:shadow-glow group relative overflow-hidden text-slate-800 dark:text-slate-200">
      {/* Ambient Glow Background */}
      <div className="absolute -right-20 -top-20 w-56 h-56 bg-accent/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent/20 transition-all duration-500" />

      {/* Editor Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-dark-border/70 text-xs font-mono">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
          </div>

          {/* File Tabs */}
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={() => setActiveTab("developer.js")}
              className={`px-3 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "developer.js"
                  ? "bg-accent/20 border border-accent/40 text-accent font-semibold"
                  : "text-secondaryText hover:text-primaryText hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" /> developer.js
            </button>
            <button
              onClick={() => setActiveTab("skills.config.js")}
              className={`px-3 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 transition-all ${
                activeTab === "skills.config.js"
                  ? "bg-accent/20 border border-accent/40 text-accent font-semibold"
                  : "text-secondaryText hover:text-primaryText hover:bg-slate-100 dark:hover:bg-white/5"
              }`}
            >
              <FileCode className="w-3.5 h-3.5" /> skills.config.js
            </button>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunCode}
            disabled={isRunning}
            className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 text-[11px] font-semibold flex items-center gap-1 transition-all"
            title="Run Code"
          >
            {isRunning ? (
              <RotateCcw className="w-3 h-3 animate-spin" />
            ) : (
              <Play className="w-3 h-3 fill-current" />
            )}
            <span>RUN</span>
          </button>
          <button
            onClick={handleReset}
            title="Reset Code"
            className="text-secondaryText hover:text-accent transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-white/5"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleCopy}
            title="Copy Code"
            className="text-secondaryText hover:text-accent transition-colors p-1.5 rounded hover:bg-slate-100 dark:hover:bg-white/5"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Code Editor Body */}
      <div className="relative mt-4 min-h-[170px] font-mono text-xs sm:text-sm leading-relaxed">
        {/* Line Numbers */}
        <div className="absolute left-0 top-0 bottom-0 select-none text-slate-400 dark:text-slate-600 text-[11px] text-right w-6 space-y-1 pt-0.5 pointer-events-none">
          {lines.map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        {/* Editable Code Textarea */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={handleTextareaChange}
          onFocus={handleTextareaFocus}
          spellCheck={false}
          className="w-full pl-9 pr-2 py-0.5 bg-transparent text-slate-800 dark:text-amber-200 font-mono text-xs sm:text-sm leading-relaxed border-none outline-none resize-none focus:ring-0 focus:outline-none selection:bg-accent/30 dark:selection:bg-accent/40 selection:text-white min-h-[160px]"
          rows={Math.max(6, lines.length)}
          style={{
            lineHeight: "1.625rem",
          }}
        />
      </div>

      {/* Console Output Panel */}
      {outputConsole && (
        <div className="mt-3 p-3 rounded-xl bg-slate-900 dark:bg-slate-950 border border-emerald-500/30 text-emerald-400 font-mono text-[11px] leading-relaxed animate-fadeIn flex items-start justify-between">
          <pre className="whitespace-pre-wrap">{outputConsole}</pre>
          <button
            onClick={() => setOutputConsole(null)}
            className="text-slate-400 hover:text-slate-200 text-xs px-1"
          >
            ✕
          </button>
        </div>
      )}

      {/* Footer Status Bar */}
      <div className="mt-4 pt-3 border-t border-slate-200 dark:border-dark-border/60 flex items-center justify-between text-[11px] font-mono text-secondaryText">
        <div className="flex items-center gap-2">
          <Terminal className="w-3.5 h-3.5 text-accent" />
          <span>JavaScript (ES6+)</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span className="text-emerald-500 dark:text-emerald-400 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" /> {isUserEditing ? "Editing..." : "Ready"}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-accent-light">
          <Sparkles className="w-3 h-3 text-amber-400" />
          <span>UTF-8</span>
          <span className="text-slate-400 dark:text-slate-600">•</span>
          <span>{lines.length} LINES</span>
        </div>
      </div>
    </div>
  );
}
