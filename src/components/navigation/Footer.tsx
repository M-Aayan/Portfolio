"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-dark-border bg-dark-bg text-secondaryText text-xs font-mono">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo & Copyright */}
        <div className="flex items-center gap-3">
          <span className="w-6 h-6 rounded bg-accent/20 border border-accent/40 flex items-center justify-center text-accent text-xs font-bold font-display">
            M
          </span>
          <span>
            &copy; {new Date().getFullYear()} MUHAMMAD AAYAN SHAIKH. ALL RIGHTS RESERVED.
          </span>
        </div>

        {/* Center Tagline */}
        <div className="text-center text-[11px] text-secondaryText/80">
          FRONTEND DEVELOPER &amp; VIDEO EDITOR INTERN // KARACHI, PAKISTAN
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-lg border border-dark-border bg-dark-card hover:border-accent hover:text-primaryText transition-colors"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-accent" />
        </button>
      </div>
    </footer>
  );
}
