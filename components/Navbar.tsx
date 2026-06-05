"use client";

const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
] as const;

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[48px] bg-[#070710] border-b border-[#4fc3f7]/20 flex items-center justify-between px-6 md:px-12">
      <span
        className="hidden md:block text-white font-bold text-[18px]"
        style={{ fontFamily: "var(--font-space-mono)" }}
      >
        Oam
      </span>

      <div className="flex items-center gap-8">
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-[18px] uppercase tracking-widest text-[#889299] hover:text-white transition-colors"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
