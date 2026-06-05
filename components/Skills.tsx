"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col md:flex-row md:items-stretch min-h-screen">
      <section className="relative w-full md:w-[30%] bg-[#070710] border-r-2 border-[#4fc3f7] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        <div className="vertical-text">
          <h2 className="font-headline-xl text-headline-xl text-white tracking-tighter select-none uppercase">
            SKILLS
          </h2>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-headline-xl text-[220px] text-[#4fc3f7] opacity-5 leading-none">03</span>
        </div>
        <div className="absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-[#4fc3f7] tracking-widest uppercase text-[14px]">SKILL / 2025</p>
        </div>
      </section>

      <section className="relative w-full md:w-[70%] bg-[#0d0d1a] cyan-grid flex flex-col justify-center px-6 pt-10 pb-10 md:px-16 md:pt-16 md:pb-16">
        <div className="absolute bottom-0 left-0 w-64 h-64 diagonal-accent opacity-30 pointer-events-none" />
        <div className="flex flex-col gap-12">
          <div>
            <span className="font-label-caps text-[#4fc3f7] tracking-widest uppercase text-[16px]">WHAT I WORK WITH</span>
            <div className="h-[1px] w-12 bg-[#4fc3f7] mt-2" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-16 gap-y-8 md:gap-y-12">
            {skills.map((group) => (
              <div key={group.category} className={group.category === "Martech" ? "sm:col-span-2" : undefined}>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 bg-[#4fc3f7] shrink-0" />
                  <span className="font-label-caps text-[#4fc3f7] uppercase tracking-widest text-[20px]">{group.category.toUpperCase()}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-4 py-2 border border-[#4fc3f7]/20 text-[#bdc8d0] font-label-caps uppercase hover:bg-[#4fc3f7]/10 hover:text-[#4fc3f7] transition-all cursor-default text-[14px] notch-tr">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}