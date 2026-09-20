"use client";

import React, { useEffect, useRef } from "react";
import { Code, Film } from "lucide-react";

const DEV_STACK = [
  { name: "HTML5", category: "MARKUP", status: "CORE", desc: "Semantic structuring, accessibility & web standards" },
  { name: "CSS3", category: "STYLING", status: "CORE", desc: "Responsive layouts, Flexbox, Grid & animations" },
  { name: "JavaScript (ES6+)", category: "LANGUAGE", status: "CORE", desc: "DOM manipulation, async operations & modern syntax" },
  { name: "React", category: "FRAMEWORK", status: "CORE", desc: "Component architecture, hooks & state management" },
  { name: "Tailwind CSS", category: "STYLING", status: "CORE", desc: "Utility-first responsive design & custom configurations" },
  { name: "Lucide Icons", category: "UI ASSETS", status: "CORE", desc: "Clean vector iconography integration" },
  { name: "Remix Icon", category: "UI ASSETS", status: "CORE", desc: "Open-source neutral icon sets for web UI" },
  { name: "Font Awesome", category: "UI ASSETS", status: "CORE", desc: "Scalable vector icons & branding symbols" },
  { name: "Figma", category: "UI DESIGN", status: "CORE", desc: "UI prototyping, wireframing & design systems" },
];

const VIDEO_EDITING_STACK = [
  { name: "Adobe Premiere Pro", category: "VIDEO EDITING", status: "LEARNING", desc: "Timeline trimming, sequence assembly & video pacing" },
  { name: "Adobe After Effects", category: "MOTION GRAPHICS", status: "LEARNING", desc: "Keyframe animation, kinetic text & motion VFX" },
  { name: "CapCut", category: "SHORT FORM", status: "PRACTICAL", desc: "Social media video editing, captions & speed ramps" },
  { name: "Canva", category: "CREATIVE ASSETS", status: "PRACTICAL", desc: "Thumbnails, social graphics & visual banners" },
  { name: "Figma", category: "VISUAL STORYBOARDS", status: "PRACTICAL", desc: "Video thumbnail concepts & layout compositions" },
];

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = containerRef.current?.querySelectorAll(".skill-card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-24 border-b border-dark-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16">
          <span className="eyebrow">// SKILLS &amp; TOOLKIT</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primaryText mt-2">
            DEVELOPMENT &amp; CREATIVE STACK
          </h2>
          <p className="text-secondaryText text-sm max-w-2xl mt-3">
            A growing toolkit spanning modern frontend development, UI design, and video editing, combining technical skills with creative visual tools.
          </p>
        </div>

        {/* Grid 1: Web Development Stack */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-accent/10 text-accent border border-accent/20">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-primaryText">
              WEB DEVELOPMENT STACK
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEV_STACK.map((item, idx) => (
              <div
                key={idx}
                className="skill-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group p-5 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-accent hover:bg-dark-card shadow-sm hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent/10 border border-accent/30 text-accent font-semibold">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-base font-display font-bold text-primaryText group-hover:text-accent-light transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-secondaryText leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid 2: Video Editing Stack */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple-500/10 text-accent-light border border-purple-500/20">
              <Film className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-display font-bold text-primaryText">
              VIDEO EDITING STACK
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VIDEO_EDITING_STACK.map((item, idx) => (
              <div
                key={idx}
                className="skill-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group p-5 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-accent hover:bg-dark-card shadow-sm hover:shadow-glow transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-widest text-accent-light uppercase">
                    {item.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      item.status === "LEARNING"
                        ? "bg-amber-500/10 border border-amber-500/30 text-amber-400"
                        : "bg-emerald-500/10 border border-emerald-500/30 text-emerald-400"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h4 className="text-base font-display font-bold text-primaryText group-hover:text-accent-light transition-colors">
                  {item.name}
                </h4>
                <p className="text-xs text-secondaryText leading-relaxed mt-1.5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
