"use client";

import { about } from "@/lib/data";

export default function About() {
  return (
    <div id="about" className="flex flex-col md:flex-row md:items-stretch min-h-screen">
      {/* Left Column */}
      <section className="relative w-full md:w-[30%] bg-[#070710] md:bg-[#00489f] border-r-2 border-[#4fc3f7] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        {/* เพิ่ม relative และ z-10 เพื่อดันข้อความ ABOUT ขึ้นมาเลเยอร์บนสุด */}
        <div className="vertical-text relative z-10">
          <span className="block md:hidden font-label-caps text-[#FFFFFF] tracking-widest uppercase text-[14px]">04 — ABOUT / 2026</span>
          <h2 className="hidden md:block font-headline-xl text-headline-xl text-white tracking-tighter select-none">
            ABOUT
          </h2>
        </div>
        
        {/* เพิ่ม z-0 เพื่อส่งเลข 04 ลงไปอยู่เลเยอร์ล่างสุดด้านหลังข้อความ */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
          <span className="font-headline-xl text-[180px] text-[#4FC3F7] opacity-20 leading-none">04</span>
        </div>

        <div className="hidden md:block absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-[#FFFFFF] tracking-widest uppercase text-[14px]">ABOUT / 2026</p>
        </div>
      </section>

      {/* Right Column */}
      <section className="relative w-full md:w-[70%] bg-[#0d0d1a] cyan-grid flex flex-col justify-center pt-10 px-6 pb-10 md:pt-16 md:px-16 md:pb-16">
        <div className="hidden lg:block absolute top-8 right-8 opacity-20 space-y-1.5">
          <div className="w-16 h-[1px] bg-[#4fc3f7]" />
          <div className="w-12 h-[1px] bg-[#4fc3f7]" />
          <div className="w-8 h-[1px] bg-[#4fc3f7]" />
        </div>
        <div className="absolute bottom-20 right-20 w-32 h-32 hidden md:block">
            {/* กรอบหลัง (Ghost Frame) - มีเฉพาะเส้นขอบ เยื้องไปทางขวาและล่าง */}
            <div className="absolute inset-0 border border-primary-container/20 translate-x-4 translate-y-4" />
            
            {/* รูปทรงหน้า (Filled Shape) - ถมสีฟ้าครามทึบทั้งหมด */}
            <div className="absolute inset-0 bg-[#4FC3F7]" />
        </div>
        <div className="max-w-4xl flex flex-col gap-12">
          <div>
            <span className="font-label-caps text-[#4fc3f7] tracking-widest uppercase text-[16px]">WHO I AM</span>
            <div className="h-[1px] w-12 bg-[#4fc3f7] mt-2" />
          </div>
          <div className="space-y-8 max-w-2xl">
            {about.story.map((paragraph, i) => {
              const PHRASE = "backend engineering in everything but name";
              const idx = paragraph.indexOf(PHRASE);
              if (idx === -1) {
                return <p key={i} className="font-body-md text-[#bdc8d0] leading-relaxed text-[18px]">{paragraph}</p>;
              }
              return (
                <p key={i} className="font-body-md text-[#bdc8d0] leading-relaxed text-[18px]">
                  {paragraph.slice(0, idx)}
                  <span className="text-[#e6d100]">{PHRASE}</span>
                  {paragraph.slice(idx + PHRASE.length)}
                </p>
              );
            })}
          </div>
          <div className="flex flex-wrap gap-4">
            {about.values.map((value) => (
              <span key={value} className="notched-corner border border-[#4fc3f7]/40 bg-[#0d0d1a] px-6 py-4 text-[#4fc3f7] hover:border-[#4fc3f7] hover:bg-[#4fc3f7]/10 transition-all cursor-default font-label-caps text-[14px]">{value}</span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}