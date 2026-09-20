"use client";

import React, { useEffect } from "react";
import { X, Play } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  category: string;
}

export function VideoModal({ isOpen, onClose, title, category }: VideoModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 glass-panel bg-black/80 animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Content Box */}
      <div className="relative w-full max-w-4xl rounded-2xl border border-dark-border bg-dark-card overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Top Header */}
        <div className="p-4 sm:p-6 border-b border-dark-border flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase">
              {category} // REEL PREVIEW
            </span>
            <h3 className="font-display text-lg font-bold text-primaryText mt-0.5">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close Video Preview"
            className="p-2 rounded-lg border border-dark-border bg-dark-bg text-secondaryText hover:text-primaryText hover:border-accent transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container (Placeholder HTML5 Canvas / Video) */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center overflow-hidden">
          {/* Mock Video Graphic / Canvas */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-purple-900/40 to-dark-bg flex flex-col items-center justify-center p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-accent/90 text-white flex items-center justify-center shadow-glow mb-4 animate-pulse">
              <Play className="w-8 h-8 ml-1 fill-current" />
            </div>
            <p className="font-mono text-sm text-primaryText">
              [ PLACEHOLDER VIDEO PLAYER: {title} ]
            </p>
            <p className="text-xs text-secondaryText mt-2 max-w-md">
              In production, this modal streams 4K ProRes/H.265 encoded video reels hosted on Vimeo, YouTube, or AWS CloudFront.
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-4 bg-dark-bg border-t border-dark-border flex items-center justify-between text-xs font-mono text-secondaryText">
          <span>STATUS: STREAMING DUMMY PREVIEW</span>
          <span>RESOLUTION: 3840x2160 (4K UHD)</span>
        </div>
      </div>
    </div>
  );
}
