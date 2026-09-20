"use client";

import React, { useEffect, useRef } from "react";
import { VideoEditorHeroWidget } from "../hero/VideoEditorHeroWidget";
import { TypingAnimation } from "../hero/TypingAnimation";
import { ArrowDownRight, FileText, Code2, Film, Sparkles } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden border-b border-dark-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Typographic Name Lockup & Pitch */}
        <div className="lg:col-span-7 flex flex-col z-10">
          {/* Tag-style Service Eyebrows */}
          <div className="hero-anim flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent text-xs font-mono font-semibold tracking-wider">
              <Code2 className="w-3.5 h-3.5" />
              // FRONTEND DEVELOPER
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-accent-light text-xs font-mono font-semibold tracking-wider">
              <Film className="w-3.5 h-3.5" />
              // ASPIRING VIDEO EDITOR
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-xs text-secondaryText font-mono">
              <Sparkles className="w-3 h-3 text-amber-400" /> OPEN FOR FREELANCING
            </span>
          </div>

          {/* Typing Animation Hero Header */}
          <div className="hero-anim">
            <TypingAnimation />
          </div>

          {/* Exact Hero Description from Brief */}
          <p className="hero-anim text-base md:text-lg text-secondaryText max-w-xl font-normal leading-relaxed mb-8">
            Frontend Developer focused on crafting clean, responsive, and engaging digital experiences. Skilled in modern frontend technologies and currently exploring video editing to bring stronger visual storytelling and creativity to my work.
          </p>

          {/* Action CTAs */}
          <div className="hero-anim flex flex-wrap items-center gap-4">
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-7 py-4 rounded-xl bg-accent text-white font-display text-sm font-semibold tracking-wider flex items-center gap-3 hover:bg-accent-light hover:shadow-glow transition-all duration-300"
            >
              <span>VIEW MY WORK</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            <a
              href="/Muhammad_Aayan_Shaikh_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-xl border border-dark-border bg-dark-card/60 text-primaryText font-display text-sm font-semibold tracking-wider flex items-center gap-3 hover:border-accent/50 hover:bg-dark-card transition-all duration-300"
            >
              <FileText className="w-4 h-4 text-accent-light" />
              <span>GET IN TOUCH / CV</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Video Editor Workspace Panel Widget */}
        <div className="hero-anim lg:col-span-5 flex justify-center items-center relative">
          <VideoEditorHeroWidget />
        </div>
      </div>
    </section>
  );
}
