"use client";

import { about } from "@/lib/data";

export default function About() {
  return (
    <div id="about" className="flex flex-col md:flex-row md:items-stretch min-h-screen">
      {/* Left Column */}
      <section className="relative w-full md:w-[30%] bg-[#070710] border-r-2 border-[#4fc3f7] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        <div className="vertical-text">
          <h2 className="font-headline-xl text-headline-xl text-white tracking-tighter select-none uppercase">
            ABOUT
          </h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-headline-xl text-[240px] text-[#4fc3f7] opacity-5 leading-none">04</span>
        </div>
        <div className="absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-[#4fc3f7] tracking-widest uppercase text-[14px]">ABOUT / 2025</p>
        </div>
      </section>

      {/* Right Column */}
      <section className="relative w-full md:w-[70%] bg-[#0d0d1a] cyan-grid flex flex-col justify-center pt-16 px-16 pb-16">
        <div className="hidden lg:block absolute top-8 right-8 opacity-20 space-y-1.5">
          <div className="w-16 h-[1px] bg-[#4fc3f7]" />
          <div className="w-12 h-[1px] bg-[#4fc3f7]" />
          <div className="w-8 h-[1px] bg-[#4fc3f7]" />
        </div>
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#4fc3f7]/20 translate-x-4 translate-y-4 hidden md:block" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-[#4fc3f7]/40 hidden md:block" />
        <div className="max-w-4xl flex flex-col gap-12">
          <div>
            <span className="font-label-caps text-[#4fc3f7] tracking-[0.4em] uppercase text-[16px]" style={{ fontFamily: "var(--font-space-mono)" }}>WHO I AM</span>
            <div className="w-16 h-[1px] bg-[#4fc3f7] mt-4" />
          </div>
          <div className="space-y-8 max-w-2xl">
            {about.story.map((paragraph, i) => (
              <p key={i} className="text-[#bdc8d0] leading-relaxed text-[18px]">{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            {about.values.map((value) => (
              <span key={value} className="notched-corner border border-[#4fc3f7]/40 bg-[#0d0d1a] px-6 py-4 text-[#4fc3f7] hover:border-[#4fc3f7] hover:bg-[#4fc3f7]/10 transition-all cursor-default" style={{ fontFamily: "var(--font-space-mono)", fontSize: "14px" }}>{value}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}