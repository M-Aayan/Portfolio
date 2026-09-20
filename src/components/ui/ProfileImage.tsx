"use client";

import React, { useState } from "react";
import { User } from "lucide-react";

interface ProfileImageProps {
  imagePath?: string;
  altText?: string;
}

export function ProfileImage({ imagePath, altText = "Muhammad Aayan Shaikh" }: ProfileImageProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-full h-full min-h-[380px] rounded-2xl border border-dark-border bg-dark-card overflow-hidden relative flex flex-col justify-end p-8 group">
      {/* Grayscale/Color Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-card/60 to-transparent z-10" />

      {imagePath && !imageError ? (
        <img
          src={imagePath}
          alt={altText}
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
      ) : (
        /* Styled Fallback Frame for Profile Image */
        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-purple-900/30 to-dark-bg flex flex-col items-center justify-center p-6 text-center">
          <div className="w-24 h-24 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent mb-4 group-hover:scale-110 transition-transform duration-500 shadow-glow">
            <User className="w-12 h-12" />
          </div>
          <span className="font-display text-lg font-bold text-primaryText">
            MUHAMMAD AAYAN SHAIKH
          </span>
          <span className="text-xs font-mono text-accent-light mt-1">
            FRONTEND DEVELOPER &amp; VIDEO EDITOR INTERN
          </span>
        </div>
      )}

      {/* Photo Caption Badge */}
      <div className="relative z-20 flex items-center justify-between border-t border-dark-border/60 pt-4">
        <div>
          <span className="text-xs font-mono text-accent-light block">PROFILE // KARACHI, PK</span>
          <span className="font-display text-sm font-semibold text-primaryText">MUHAMMAD AAYAN SHAIKH</span>
        </div>
        <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
      </div>
    </div>
  );
}
