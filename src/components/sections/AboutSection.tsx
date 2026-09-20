"use client";

import React, { useEffect, useRef } from "react";
import { ProfileImage } from "../ui/ProfileImage";
import { MapPin, GraduationCap, Briefcase, Cpu } from "lucide-react";
import gsap from "gsap";

const METADATA = [
  { icon: MapPin, label: "LOCATION", value: "Karachi, Pakistan" },
  { icon: GraduationCap, label: "DEGREE", value: "Bachelor in Computer Science" },
  { icon: Cpu, label: "DUAL FOCUS", value: "Frontend Development & Aspiring Video Editor" },
  { icon: Briefcase, label: "AVAILABILITY", value: "Open for Freelancing" },
];

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 border-b border-dark-border/40 relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Eyebrow */}
        <div className="about-fade mb-12">
          <span className="eyebrow">// ABOUT ME</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primaryText mt-2">
            CODE, DESIGN &amp; VISUAL STORYTELLING
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Personal Profile Image */}
          <div className="about-fade lg:col-span-5 relative">
            <ProfileImage imagePath="/aayan_profile.jpg" altText="Muhammad Aayan Shaikh" />
          </div>

          {/* Right Column: Bio Narrative & Metadata Matrix */}
          <div className="about-fade lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-secondaryText text-base leading-relaxed">
              <p>
                I am a multidisciplinary developer and creative working at the intersection of modern frontend development, UI design, and visual storytelling. With hands-on experience in HTML, CSS, JavaScript, React, Git, GitHub, and Figma, I build clean, responsive, and engaging digital experiences while continuously expanding my creative skill set through video editing.
              </p>
              <p>
                From developing interactive web interfaces and React applications to designing polished UI concepts and editing visual content with Premiere Pro, After Effects, and CapCut, my focus is on combining technical precision with strong visual design. Currently, I am expanding into backend development and advanced video editing, working toward becoming a versatile full-stack developer and video editor.
              </p>
            </div>

            {/* Quick Fact Metadata Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {METADATA.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-dark-border bg-dark-card/50 hover:border-accent/40 transition-colors duration-300 flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 text-accent shrink-0">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-secondaryText uppercase">
                        {item.label}
                      </div>
                      <div className="text-xs font-display font-medium text-primaryText mt-0.5">
                        {item.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
