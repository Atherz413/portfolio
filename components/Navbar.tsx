"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
] as const;

const ALL_SECTION_IDS = ["hero", "projects", "skills", "about"] as const;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers = ALL_SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[48px] bg-[#070710] border-b border-[#4fc3f7]/20 flex items-center justify-between px-6 md:px-12">
      <a
        href="#hero"
        className={`hidden md:block font-label-caps font-bold text-[18px] transition-colors ${
          activeSection === "hero" ? "text-[#e6d100]" : "text-white"
        }`}
      >
        OAM
      </a>

      <div className="flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => {
          const isActive = activeSection === href.slice(1);
          return (
            <a
              key={href}
              href={href}
              className={`font-label-caps text-[18px] uppercase tracking-widest transition-colors ${
                isActive ? "text-[#e6d100]" : "text-[#4fc3f7] hover:text-white"
              }`}
            >
              {label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
