"use client";

import { useState } from "react";
import { projects } from "@/lib/data";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = projects[currentIndex];

  const prev = () => setCurrentIndex((p) => (p - 1 + projects.length) % projects.length);
  const next = () => setCurrentIndex((p) => (p + 1) % projects.length);

  return (
    <div id="projects" className="flex flex-col md:flex-row min-h-screen">
      {/* Left Column (30%) */}
      <section className="relative w-full md:w-[30%] bg-[#070710] flex flex-col justify-center items-center py-20 md:py-0 overflow-hidden">
        <div className="vertical-text">
          <h2 className="font-headline-xl text-headline-xl text-white tracking-tighter select-none">
            PROJECTS
          </h2>
        </div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-headline-xl text-[180px] text-[#4fc3f7] opacity-5 leading-none">
            02
          </span>
        </div>

        <div className="absolute bottom-10 left-10 z-10">
          <p className="font-label-caps text-label-caps text-[#4fc3f7] text-[14px]">PROJECT / 2025</p>
        </div>
      </section>

      {/* Cyan Divider */}
      <div className="hidden md:block w-[2px] bg-[#4fc3f7] self-stretch shadow-[0_0_15px_rgba(79,195,247,0.3)]" />

      {/* Right Column (70%) */}
      <section className="w-full md:w-[70%] bg-[#0d0d1a] cyan-grid flex flex-col">
        {/* Section Header */}
        <div className="px-16 pt-16 pb-4 flex items-start justify-between">
          <div>
            <span className="font-label-caps text-label-caps text-[#4fc3f7] tracking-[0.3em] text-[16px]">
              SELECTED WORK
            </span>
            <div className="h-[1px] w-12 bg-[#4fc3f7] mt-2" />
          </div>
          <span className="font-label-caps text-label-caps text-[#889299]">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* Card + Arrows */}
        <div className="flex-1 px-16 pt-8 pb-8 flex items-center gap-4">
          {/* Prev Arrow */}
          <button
            onClick={prev}
            className="w-12 h-12 border border-[#4fc3f7] flex items-center justify-center text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-[#003548] transition-all cursor-pointer shrink-0"
          >
            ←
          </button>

          {/* Card */}
          <article
            className="flex-1 relative border border-[#4fc3f7]/20 hover:border-[#4fc3f7]/60 transition-colors bg-[#0d0d1a] p-6 md:p-8 flex flex-col"
            style={{ minHeight: '420px' }}
          >
            {/* Notched top-right corner */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[24px] border-l-[24px] border-t-[#4fc3f7]/40 border-l-transparent pointer-events-none" />

            {/* Badge */}
            <div className="mb-4">
              <span className="font-label-caps text-label-caps bg-[#4fc3f7]/10 text-[#4fc3f7] border border-[#4fc3f7]/20 px-3 py-1 inline-block">
                {project.type === "backend" ? "BACKEND PROJECT" : "PRODUCTION SYSTEM"}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-headline-lg text-headline-lg text-white mb-3">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-[#bdc8d0] text-[18px] leading-relaxed mb-5 max-w-2xl">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex gap-3 text-[18px]">
                  <span className="text-[#4fc3f7] shrink-0 mt-0.5">→</span>
                  <span className="text-[#bdc8d0]">{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-label-caps text-label-caps border border-[#bdc8d0]/30 text-[#bdc8d0] uppercase px-2 py-1"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-auto pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skew-button skew-x-[-15deg] bg-[#4fc3f7] text-[#003548] font-label-caps px-8 py-3 font-bold inline-flex items-center"
                >
                  <span className="inline-block skew-x-[15deg]">LIVE API</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skew-button skew-x-[-15deg] border border-[#4fc3f7] text-[#4fc3f7] font-label-caps px-8 py-3 font-bold inline-flex items-center"
                >
                  <span className="inline-block skew-x-[15deg]">GITHUB</span>
                </a>
              )}
            </div>
            {!project.liveUrl && !project.githubUrl && <div className="mt-auto" />}
          </article>

          {/* Next Arrow */}
          <button
            onClick={next}
            className="w-12 h-12 border border-[#4fc3f7] flex items-center justify-center text-[#4fc3f7] hover:bg-[#4fc3f7] hover:text-[#003548] transition-all cursor-pointer shrink-0"
          >
            →
          </button>
        </div>

      </section>
    </div>
  );
}
