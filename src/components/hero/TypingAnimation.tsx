"use client";

import React, { useState, useEffect } from "react";

const PHRASES = [
  "Muhammad Aayan Shaikh",
  "Frontend Developer",
  "Video Editor",
];

export function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = PHRASES[phraseIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && currentText === fullText) {
      // Pause at full phrase
      const timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === "") {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentText((prev) =>
        isDeleting
          ? fullText.substring(0, prev.length - 1)
          : fullText.substring(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <div className="min-h-[70px] sm:min-h-[90px] md:min-h-[110px] flex items-center mb-4">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-display font-extrabold uppercase leading-[0.98] tracking-tight text-primaryText">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-purple-400">
          {currentText}
        </span>
        <span className="inline-block w-1.5 h-9 sm:h-12 md:h-14 bg-accent ml-2 animate-pulse align-middle rounded-full" />
      </h1>
    </div>
  );
}
