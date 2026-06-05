@AGENTS.md

# Portfolio — Laphat Rongruangkul

## Project Overview
- Next.js 16 + TypeScript + Tailwind 4
- Fonts: Syne (headlines), Space Mono (labels), Inter (body)
- P3R aesthetic: vertical text labels, cyan (#4fc3f7) accents, dark background, skew buttons
- Deployed on Vercel: https://portfolio-murex-five-32.vercel.app/
- Repo: https://github.com/Atherz413/portfolio

## Dev Commands
- `npm run dev` — local dev server
- `npm run build` — production build (run before every commit)

## Design Tokens
- Cyan accent: #4fc3f7
- Yellow highlight: #e6d100
- Left column bg: #00489f (both mobile and desktop)
- Active nav color: #e6d100
- Body text: #bdc8d0

## Font Tokens
- `font-headline-xl` → Syne 64px/800 (name heading)
- `font-headline-lg` → Syne 40px/700 (project titles)
- `font-label-caps` → Space Mono 12px/700 tracking-widest (section labels, nav)
- `font-body-md` → Inter 16px/400 (body text)

## Layout Rules
- All sections: flex flex-col md:flex-row
- Left column (decorative): w-full md:w-[30%] bg-[#00489f]
- Right column (content): w-full md:w-[70%]
- Content padding: px-6 pt-10 pb-10 md:px-16 md:pt-16 md:pb-16

## Mobile Rules
- Left column label span: `block md:hidden` — font-label-caps text-[45px] text-[#FFFFFF] tracking-widest uppercase
- Desktop label span: `hidden md:block` — vertical text via .vertical-text class
- Ghost numbers: text-[162px] md:text-[180px] — reference Hero.tsx for exact className
- writing-mode override on mobile lives in globals.css @media (max-width: 767px)
- Arrow buttons hidden on mobile: `hidden md:flex`
- Project swipe: touch gesture via onTouchStart/onTouchEnd

## Styling Rules
- Tailwind only — no inline styles
- No `any` in TypeScript without explicit reason
- Cyan divider method: border-r-2 border-[#4fc3f7] on left column section element
- Section label underline: h-[1px] w-12 bg-[#4fc3f7] mt-2

## Component Structure
- components/Navbar.tsx — smooth scroll nav, active highlight #e6d100
- components/Hero.tsx — section 01
- components/Projects.tsx — section 02, auto-slide 4.5s, swipe on mobile
- components/Skills.tsx — section 03
- components/About.tsx — section 04
- lib/data.ts — all project content data

## Privacy Rules
- No real client names (Easy Money, Airdog, Ultimate Lift)
- ForeToday agency name OK in context only
- Use "100+ clients", "~150 reports" for numbers
