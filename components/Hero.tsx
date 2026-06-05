"use client";

import { siteConfig } from "@/lib/data";

export default function Hero() {

  const [firstName, ...rest] = siteConfig.name.toUpperCase().split(" ");
  const lastName = rest.join(" ");
  const lastNameBody = lastName.slice(0, -3);
  const lastNameAccent = lastName.slice(-3);

  return (
    <div className="flex flex-col md:flex-row min-h-screen pt-[48px]">
      {/* Left Column (30%) */}
      <section className="relative w-full md:w-[30%] bg-[#070710] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        <div className="vertical-text">
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tighter select-none glitch-text">
            PORTFOLIO
          </h1>
        </div>

        <div className="absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-label-caps text-primary-container text-[14px]">PORTFOLIO / 2025</p>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-extrabold text-[220px] text-[#4fc3f7] opacity-5 leading-none tracking-tighter select-none pointer-events-none">01</span>
        </div>
      </section>

      {/* Vertical Divider */}
      <div className="hidden md:block w-[2px] bg-primary-container shadow-[0_0_15px_rgba(79,195,247,0.3)]" />

      {/* Right Column (70%) */}
      <section
        className="relative w-full md:w-[70%] bg-surface-container-lowest grid-pattern flex flex-col justify-start pt-16 px-16"
      >
        <div className="absolute top-0 right-0 w-64 h-64 diagonal-accent opacity-30 pointer-events-none" />

        <div className="max-w-3xl z-10">
          {/* Role Label */}
          <div className="mb-6">
            <span className="font-label-caps text-label-caps text-primary-container tracking-[0.3em] text-[16px]">
              BACKEND / FULL STACK DEVELOPER
            </span>
            <div className="h-[1px] w-12 bg-primary-container mt-2" />
          </div>

          {/* Name */}
          <h2 className="font-headline-lg mb-8 uppercase leading-none text-headline-xl">
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
              className="skew-button skew-x-[-15deg] border-2 border-outline text-outline font-label-caps px-8 py-3 font-bold hover:text-on-surface hover:border-on-surface"
            >
              RESUME PDF
            </a>
          </div>
        </div>

        {/* Ghost Frame */}
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary-container/20 translate-x-4 translate-y-4 hidden md:block" />
        <div className="absolute bottom-20 right-20 w-32 h-32 border border-primary-container/40 hidden md:block" />
      </section>
    </div>
  );
}
