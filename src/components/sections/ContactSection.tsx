"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ArrowUpRight, Github, Linkedin } from "lucide-react";
import gsap from "gsap";

export function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Update Karachi time indicator (PKT // UTC+5)
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      ref={containerRef}
      className="py-28 relative overflow-hidden border-b border-dark-border/40"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Large Editorial Headline */}
        <div className="contact-anim mb-16 text-center md:text-left">
          <span className="eyebrow">// GET IN TOUCH</span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold uppercase leading-none text-primaryText mt-4 tracking-tight">
            LET&apos;S CREATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-light to-purple-400">
              SOMETHING<span className="text-accent">.</span>
            </span>
          </h2>
          <p className="text-secondaryText text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
            Have a frontend project, UI design, or video editing idea in mind? Feel free to reach out and let’s discuss the project, requirements, and how I can contribute.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Time Indicator */}
          <div className="contact-anim lg:col-span-5 space-y-6">
            {/* Direct Email Card */}
            <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 text-accent text-sm font-mono font-semibold">
                <Mail className="w-5 h-5" /> DIRECT EMAIL
              </div>
              <a
                href="mailto:aayanshaikh8426@gmail.com"
                className="font-display text-lg sm:text-xl font-bold text-primaryText hover:text-accent transition-colors block mt-2 break-all"
              >
                aayanshaikh8426@gmail.com
              </a>
              <span className="text-xs text-secondaryText mt-1 block">
                Feel free to email me directly anytime.
              </span>
            </div>

            {/* Direct Phone Card */}
            <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/50 hover:border-accent/40 transition-colors">
              <div className="flex items-center gap-3 text-accent text-sm font-mono font-semibold">
                <Phone className="w-5 h-5" /> PHONE / WHATSAPP
              </div>
              <a
                href="tel:03319761532"
                className="font-display text-xl font-bold text-primaryText hover:text-accent transition-colors block mt-2"
              >
                0331-9761532
              </a>
              <span className="text-xs text-secondaryText mt-1 block">
                Available for call or WhatsApp inquiries.
              </span>
            </div>

            {/* Timezone Clock Card */}
            <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/50 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-secondaryText">
                  <Clock className="w-4 h-4 text-accent" /> KARACHI, PAKISTAN (PKT // UTC+5)
                </div>
                <div className="font-display text-2xl font-bold text-primaryText mt-1">
                  {currentTime || "12:00:00"}
                </div>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Real Social Links */}
            <div className="p-6 rounded-2xl border border-dark-border bg-dark-card/30 space-y-4">
              <span className="text-xs font-mono text-secondaryText uppercase tracking-widest block">
                // CONNECT ONLINE
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/M-Aayan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-dark-border bg-dark-bg text-xs font-mono text-secondaryText hover:text-primaryText hover:border-accent flex items-center gap-2 transition-all"
                >
                  <Github className="w-4 h-4 text-accent" />
                  <span>github.com/M-Aayan</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>

                <a
                  href="https://linkedin.com/in/muhammad-aayan-shaikh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg border border-dark-border bg-dark-bg text-xs font-mono text-secondaryText hover:text-primaryText hover:border-accent flex items-center gap-2 transition-all"
                >
                  <Linkedin className="w-4 h-4 text-accent" />
                  <span>linkedin.com/in/muhammad-aayan-shaikh</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="contact-anim lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 md:p-10 rounded-2xl border border-dark-border bg-dark-card/70 space-y-6 shadow-xl"
            >
              <h3 className="text-xl font-display font-bold text-primaryText mb-2">
                SEND A MESSAGE
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs font-mono text-secondaryText uppercase tracking-wider block mb-2">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-sm text-primaryText placeholder:text-secondaryText/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-secondaryText uppercase tracking-wider block mb-2">
                    YOUR EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-sm text-primaryText placeholder:text-secondaryText/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Exact 3 options as specified by brief */}
              <div>
                <label className="text-xs font-mono text-secondaryText uppercase tracking-wider block mb-2">
                  PROJECT TYPE *
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-sm text-primaryText focus:outline-none focus:border-accent transition-colors">
                  <option value="UI Design">UI Design</option>
                  <option value="Frontend Project">Frontend Project</option>
                  <option value="Video Editing / Caption / Color Correction">
                    Video Editing / Caption / Color Correction
                  </option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono text-secondaryText uppercase tracking-wider block mb-2">
                  MESSAGE / DETAILS *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project, timeline, and ideas..."
                  className="w-full px-4 py-3 rounded-xl border border-dark-border bg-dark-bg text-sm text-primaryText placeholder:text-secondaryText/50 focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-accent text-white font-display text-sm font-semibold tracking-wider flex items-center justify-center gap-2 hover:bg-accent-light hover:shadow-glow transition-all duration-300"
              >
                {submitted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                    <span>MESSAGE SENT SUCCESSFULLY</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
