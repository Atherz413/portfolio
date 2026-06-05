"use client";

import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <div id="skills" className="flex flex-col md:flex-row md:items-stretch min-h-screen">
      <section className="relative w-full md:w-[30%] bg-[#00489f] border-r-2 border-[#4fc3f7] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        {/* เพิ่ม relative และ z-10 เพื่อดันข้อความ SKILLS ขึ้นมาเลเยอร์บนสุด */}
        <div className="vertical-text relative z-10">
          <span className="block md:hidden font-label-caps text-[#FFFFFF] tracking-widest uppercase text-[45px]">SKILLS</span>
          <h2 className="hidden md:block font-headline-xl text-headline-xl text-white tracking-tighter select-none">
            SKILLS
          </h2>
        </div>

        {/* เพิ่ม z-0 เพื่อส่งเลข 03 ลงไปอยู่เลเยอร์ล่างสุดด้านหลังข้อความ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-headline-xl text-[162px] md:text-[180px] text-[#4FC3F7] opacity-20 leading-none">03</span>
        </div>

        <div className="hidden md:block absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-[#FFFFFF] tracking-widest uppercase text-[14px]">SKILL / 2026</p>
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
                  <span className={`font-label-caps uppercase tracking-widest text-[20px] ${group.category === "Backend" ? "text-[#e6d100]" : "text-[#4fc3f7]"}`}>{group.category.toUpperCase()}</span>
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