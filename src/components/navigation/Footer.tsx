"use client";

import React, { useState } from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const [isClicked, setIsClicked] = useState(false);

  const scrollToTop = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  };

  return (
    <footer className="py-12 border-t border-dark-border bg-dark-bg text-secondaryText text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Muhammad Aayan Shaikh Logo"
            className="h-6 md:h-7 w-auto object-contain transition-transform duration-300 hover:scale-105"
          />
          <span>
            &copy; {new Date().getFullYear()} MUHAMMAD AAYAN SHAIKH. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-[11px] text-secondaryText/80">
          FRONTEND DEVELOPER &amp; ASPIRING FULL STACK DEVELOPER // KARACHI, PAKISTAN
        </div>

        {/* Interactive Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className={`group relative flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-dark-border bg-white dark:bg-dark-card/80 text-slate-700 dark:text-secondaryText hover:text-accent dark:hover:text-primaryText hover:border-accent dark:hover:border-accent hover:shadow-glow hover:-translate-y-1 hover:scale-[1.02] active:scale-90 transition-all duration-300 ${
            isClicked ? "scale-90 opacity-80" : ""
          }`}
        >
          <span className="font-semibold tracking-wider text-[11px]">BACK TO TOP</span>
          <ArrowUp
            className={`w-3.5 h-3.5 text-accent transition-transform duration-300 ${
              isClicked ? "translate-y-1.5" : "group-hover:-translate-y-1"
            }`}
          />
        </button>
      </div>
    </footer>
  );
}
