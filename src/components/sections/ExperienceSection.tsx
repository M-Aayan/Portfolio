"use client";

import React, { useEffect, useRef } from "react";
import { Calendar, Building2, CheckCircle, GraduationCap } from "lucide-react";

const TIMELINE = [
  {
    period: "2025 – PRESENT",
    role: "BACHELOR OF SCIENCE IN COMPUTER SCIENCE (BSCS)",
    company: "ILMA UNIVERSITY",
    badge: "4TH SEMESTER",
    desc: "Currently pursuing Bachelor of Science in Computer Science in 4th Semester at Ilma University, building strong fundamentals in software engineering, web technologies, and computational logic.",
    highlights: [
      "Actively studying computer science fundamentals, algorithm design, and core software concepts.",
      "Applying academic knowledge to practical frontend projects and creative design applications.",
    ],
    isAcademic: true,
  },
  {
    period: "PRESENT",
    role: "VIDEO EDITOR INTERN",
    company: "ABC COMPANY",
    desc: "Developing editing, captioning, and visual storytelling skills using Premiere Pro, After Effects, and CapCut while continuing to advance toward full-stack web development.",
    highlights: [
      "Editing short-form and long-form video content with visual pacing and clear captions.",
      "Collaborating on media workflows, visual storyboards, and thumbnail assets.",
      "Building practical experience in video post-production and creative visual storytelling.",
    ],
  },
  {
    period: "PRACTICAL EXPERIENCE",
    role: "INDEPENDENT FRONTEND DEVELOPER",
    company: "SELF-DIRECTED / PROJECTS",
    desc: "Over 1 year of practical hands-on experience building clean, responsive web user interfaces and interactive React components.",
    highlights: [
      "Developing web interfaces with HTML, CSS, JavaScript, React, and Tailwind CSS.",
      "Designing UI prototypes in Figma and translating them into responsive code.",
      "Managing version control workflows with Git and GitHub.",
    ],
  },
];

export function ExperienceSection() {
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

    const items = containerRef.current?.querySelectorAll(".timeline-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-24 border-b border-dark-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="mb-16">
          <span className="eyebrow">// CAREER JOURNEY</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primaryText mt-2">
            EXPERIENCE &amp; GROWTH
          </h2>
          <p className="text-secondaryText text-sm max-w-3xl mt-3 leading-relaxed">
            A timeline of my academic journey at Ilma University, independent frontend development practice, and ongoing experience as a Video Editor Intern at ABC Company.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 md:pl-10 border-l border-dark-border/80 space-y-10">
          {TIMELINE.map((item, idx) => (
            <div
              key={idx}
              className="timeline-item opacity-0 translate-y-8 transition-all duration-500 ease-out relative group"
            >
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-dark-bg border-2 border-accent group-hover:bg-accent group-hover:shadow-glow transition-all duration-300" />

              {/* Card Surface */}
              <div
                className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                  item.isAcademic
                    ? "border-accent/50 bg-accent/5 hover:border-accent hover:shadow-glow"
                    : "border-dark-border bg-dark-card/50 hover:border-accent/40 hover:bg-dark-card"
                }`}
              >
                {/* Date & Company Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-light px-3 py-1 rounded-md bg-accent/10 border border-accent/20">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>

                  <div className="flex items-center gap-2">
                    {item.badge && (
                      <span className="text-xs font-mono text-accent font-bold px-3 py-1 rounded-md bg-accent/20 border border-accent/40 animate-pulse">
                        {item.badge}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-secondaryText">
                      {item.isAcademic ? (
                        <GraduationCap className="w-3.5 h-3.5 text-accent" />
                      ) : (
                        <Building2 className="w-3.5 h-3.5" />
                      )}
                      {item.company}
                    </span>
                  </div>
                </div>

                {/* Role Title */}
                <h3 className="text-xl font-display font-bold text-primaryText group-hover:text-accent-light transition-colors">
                  {item.role}
                </h3>

                {/* Overview */}
                <p className="text-xs md:text-sm text-secondaryText mt-2.5 leading-relaxed">
                  {item.desc}
                </p>

                {/* Key Achievements Bullet points */}
                <div className="mt-5 pt-5 border-t border-dark-border/60 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-secondaryText">
                      <CheckCircle className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
