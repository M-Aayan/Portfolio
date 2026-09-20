"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "../providers/ThemeProvider";
import { Sun, Moon, Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { name: "// HOME", href: "#home" },
  { name: "// ABOUT", href: "#about" },
  { name: "// SKILLS", href: "#skills" },
  { name: "// WORK", href: "#work" },
  { name: "// JOURNEY", href: "#experience" },
  { name: "// CONTACT", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoState, setLogoState] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cycling Logo Name Animation between "Muhammad" and "Muhammad Aayan Shaikh"
  useEffect(() => {
    const interval = setInterval(() => {
      setLogoState((prev) => (prev === 0 ? 1 : 0));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-4 glass-panel border-b border-dark-border/80 shadow-lg"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Dynamic Animated Brand Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, "#home")}
          className="group flex items-center gap-2.5 font-display text-base md:text-lg tracking-wider font-bold text-primaryText transition-all duration-300"
        >
          <span className="w-9 h-9 rounded-lg bg-accent/20 border border-accent/40 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm">
            M
          </span>
          <div className="relative overflow-hidden font-bold tracking-tight h-7 flex items-center">
            <span
              className={`inline-block transition-all duration-500 transform group-hover:translate-x-1 ${
                logoState === 0
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 absolute"
              }`}
            >
              MUHAMMAD
            </span>
            <span
              className={`inline-block text-accent transition-all duration-500 transform group-hover:translate-x-1 ${
                logoState === 1
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 absolute"
              }`}
            >
              MUHAMMAD AAYAN SHAIKH
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-xs tracking-widest font-mono text-secondaryText hover:text-accent transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA + Theme Toggle */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Color Theme"
            className="w-10 h-10 rounded-full border border-dark-border bg-dark-card flex items-center justify-center text-secondaryText hover:text-accent hover:border-accent/50 transition-all duration-300 shadow-sm"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent text-white font-display text-xs tracking-wider font-semibold overflow-hidden hover:bg-accent-light transition-all duration-300 shadow-glow"
          >
            <span>LET&apos;S TALK</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle Color Theme"
            className="w-9 h-9 rounded-lg border border-dark-border bg-dark-card flex items-center justify-center text-secondaryText"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-purple-600" />
            )}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-lg border border-dark-border bg-dark-card text-primaryText"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden glass-panel border-b border-dark-border px-6 py-8 flex flex-col gap-6 animate-fadeIn">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="text-sm font-mono tracking-widest text-primaryText hover:text-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="w-full text-center py-3 rounded-lg bg-accent text-white font-display text-sm font-semibold tracking-wider"
          >
            LET&apos;S TALK
          </a>
        </div>
      )}
    </header>
  );
}
