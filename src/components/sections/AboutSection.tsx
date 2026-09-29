"use client";

import React, { useEffect, useRef } from "react";
import { ProfileImage } from "../ui/ProfileImage";
import { MapPin, GraduationCap, Briefcase, Cpu } from "lucide-react";
import gsap from "gsap";

const METADATA = [
  { icon: MapPin, label: "LOCATION", value: "Karachi, Pakistan" },
  { icon: GraduationCap, label: "DEGREE", value: "Bachelor in Computer Science" },
  { icon: Cpu, label: "FOCUS ON", value: "Frontend Developer & Aspiring Full-stack developer" },
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
            FRONTEND DEVELOPER GROWING TOWARD FULL STACK
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Personal Profile Image */}
          <div className="about-fade lg:col-span-5 relative flex items-center justify-center">
            <div className="w-full max-w-md mx-auto">
              <ProfileImage imagePath="/aayan_profile.jpg" altText="Muhammad Aayan Shaikh" />
            </div>
          </div>

          {/* Right Column: Bio Narrative & Metadata Matrix */}
          <div className="about-fade lg:col-span-7 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-secondaryText text-base leading-relaxed">
              <p>
                I'm a frontend developer and UI designer specializing in modern, responsive web interfaces. With hands-on experience in HTML, CSS, JavaScript, React, Git, GitHub, and Figma, I build clean, user-focused designs and interactive React applications.
              </p>
              <p>
                I'm currently expanding into backend development and databases, working toward becoming a versatile full-stack developer, with a growing interest in cybersecurity to build more secure applications along the way.
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
