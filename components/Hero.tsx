"use client";

import { siteConfig } from "@/lib/data";

export default function Hero() {

  const [firstName, ...rest] = siteConfig.name.toUpperCase().split(" ");
  const lastName = rest.join(" ");
  const lastNameBody = lastName.slice(0, -3);
  const lastNameAccent = lastName.slice(-3);

  return (
    <div id="hero" className="flex flex-col md:flex-row min-h-screen pt-[48px]">
      {/* Left Column (30%) */}
      <section className="relative w-full md:w-[30%] bg-[#070710] md:bg-[#00489f] border-r-2 border-[#4fc3f7] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        {/* 1. ใส่ z-10 ให้เลเยอร์ข้อความปกติ */}
        <div className="vertical-text relative z-10">
            <h1 className="font-headline-xl text-headline-xl text-white tracking-tighter select-none">
                PORTFOLIO
                </h1>
        </div>
                
        {/* 2. ใส่ z-0 ให้เลข 01 อยู่เลเยอร์ล่างสุด */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
            <span className="font-headline-xl text-[180px] text-[#4FC3F7] opacity-20 leading-none">01</span>
        </div>
     </section>

      {/* Right Column (70%) */}
      <section
        className="relative w-full md:w-[70%] bg-surface-container-lowest grid-pattern flex flex-col justify-start pt-10 px-6 md:pt-16 md:px-16"
      >
        <div className="absolute top-0 right-0 w-64 h-64 diagonal-accent opacity-30 pointer-events-none" />

        <div className="max-w-3xl z-10">
          {/* Role Label */}
          <div className="mb-6">
            <span className="font-label-caps text-[#4fc3f7] tracking-widest uppercase text-[16px]">
              BACKEND / SOFTWARE ENGINEER
            </span>
            <div className="h-[1px] w-12 bg-[#4fc3f7] mt-2" />
          </div>

          {/* Name */}
          <h2 className="font-headline-lg mb-8 uppercase leading-none text-[28px] sm:text-[42px] md:text-headline-xl">
            <span className="block text-on-surface font-bold">{firstName}</span>
            <span className="block">
              <span className="text-on-surface font-bold">{lastNameBody}</span>
              <span className="text-primary-container font-bold">{lastNameAccent}</span>
            </span>
          </h2>

          {/* Tagline */}
          <div className="border-l-[3px] border-primary-container pl-6 mb-6">
            <p className="font-body-md text-body-md font-bold text-on-surface text-[18px]">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Subtext */}
          <p className="font-body-md text-body-md text-[#bdc8d0] text-[18px] mb-12 max-w-xl">
            {siteConfig.subTagline}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="skew-button skew-x-[-15deg] bg-primary-container text-surface-container-lowest font-label-caps px-8 py-3 font-bold flex items-center gap-2"
            >
              GITHUB
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="skew-button skew-x-[-15deg] border-2 border-primary-container text-primary-container font-label-caps px-8 py-3 font-bold hover:bg-primary-container/10"
            >
              LINKEDIN
            </a>
            <a
              href={siteConfig.resume}
              download
              className="skew-button skew-x-[-15deg] border-2 border-outline font-label-caps px-8 py-3 font-bold hover:border-on-surface"
            >
              <span className="text-[#e6d100]">RESUME PDF</span>
            </a>
          </div>
        </div>

        {/* Ghost Frame Setup */}
        <div className="absolute bottom-20 right-20 w-32 h-32 hidden md:block">
            {/* กรอบหลัง (Ghost Frame) - มีเฉพาะเส้นขอบ เยื้องไปทางขวาและล่าง */}
            <div className="absolute inset-0 border border-primary-container/20 translate-x-4 translate-y-4" />

            {/* รูปทรงหน้า (Filled Shape) - ถมสีฟ้าครามทึบทั้งหมด */}
            <div className="absolute inset-0 bg-[#4FC3F7]" />
        </div>
      </section>
    </div>
  );
}
