"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRight, Code } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
}

const PROJECTS: Project[] = [
  {
    id: "proj-notenest",
    title: "NoteNest",
    category: "REACT & WEB APP",
    year: "2026",
    description:
      "A clean, efficient note-taking application designed for seamless thought organization, note management, and responsive usability.",
    tags: ["React", "JavaScript", "Tailwind", "HTML5"],
    image: "/notenest.png",
    live: "https://m-aayan.github.io/NoteNest-/",
  },
  {
    id: "proj-js-hub",
    title: "JavaScript Learning Path",
    category: "LEARNING PLATFORM",
    year: "2026",
    description:
      "A comprehensive JavaScript learning hub pairing core programming concepts with topic-wise hands-on practice projects.",
    tags: ["JavaScript", "HTML5", "CSS3", "GitHub Repos"],
    image: "/js-hub.png",
    live: "https://m-aayan.github.io/Javascript-Learning-Path/",
  },
  {
    id: "proj-expertizo",
    title: "Expertizo Clone",
    category: "WEB RECREATION",
    year: "2025",
    description:
      "A high-fidelity responsive website clone showcasing modern layout structuring, component styling, and clean agency visual design.",
    tags: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    image: "/expertizo.png",
    live: "https://m-aayan.github.io/Expertizo-website-clone/",
  },
  {
    id: "proj-xbox-ui",
    title: "Xbox UI Landing Page Design",
    category: "UI/UX DESIGN",
    year: "2024",
    description:
      "A sleek, dark-themed gaming console landing page concept recreated in Figma, emphasizing modern product showcases and typography.",
    tags: ["Figma", "UI/UX", "Visual Design", "Behance"],
    image: "/xbox-ui.png",
    live: "https://www.behance.net/gallery/211401647/Xbox-series-x-uiux-design",
  },
];

export function WorkSection() {
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

    const cards = containerRef.current?.querySelectorAll(".work-card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-24 border-b border-dark-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="eyebrow">// SELECTED WORK</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primaryText mt-2">
            FEATURED FRONTEND PROJECTS
          </h2>
          <p className="text-secondaryText text-sm max-w-2xl mt-3">
            A curated showcase of 4 featured projects demonstrating web development, interactive frontend interfaces, and UI/UX design.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.id}
              className="work-card-item opacity-0 translate-y-8 transition-all duration-500 ease-out group relative rounded-2xl border border-dark-border bg-dark-card/60 backdrop-blur-md overflow-hidden hover:border-accent/60 hover:shadow-glow transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40 border-b border-dark-border/40">
                <div
                  className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-700 opacity-90"
                  style={{ backgroundImage: `url('${proj.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent opacity-80" />

                {/* Top Badge Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md glass-panel text-[10px] font-mono tracking-wider font-semibold text-accent-light shadow-sm">
                    <Code className="w-3 h-3 text-accent" />
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-secondaryText glass-panel px-2.5 py-1 rounded-md shadow-sm">
                    {proj.year}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl md:text-2xl font-display font-bold text-primaryText group-hover:text-accent-light transition-colors duration-300">
                    {proj.title}
                  </h3>
                  <p className="text-xs md:text-sm text-secondaryText mt-3 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                {/* Tag Pills & View Project Button Row */}
                <div className="mt-6 pt-5 border-t border-dark-border/60 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-dark-bg border border-dark-border text-secondaryText"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-accent text-white font-display text-xs font-semibold tracking-wider hover:bg-accent-light group-hover:scale-105 transition-all duration-300 shadow-md"
                  >
                    <span>VIEW PROJECT</span>
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
