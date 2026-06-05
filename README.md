# Personal Portfolio Site

Personal portfolio site built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS** — showcasing backend projects and production systems from a Martech-to-Backend career transition.

**Live site:** _[https://portfolio-murex-five-32.vercel.app/]_

---

## What's Inside

Single-page portfolio with 4 sections:

- **Hero** — role, tagline, links to GitHub / LinkedIn / Resume PDF
- **Projects** — auto-cycling carousel with 4 projects (2 backend, 2 production)
- **Skills** — categorized skill grid (Backend, Testing, DevOps, Martech)
- **About** — career transition story + engineering values

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (custom design system) |
| Font | Custom font tokens via CSS variables |
| Deployment | _(add Vercel / Railway URL when deployed)_ |

---

## Architecture Decisions

**Single `data.ts` as source of truth**  
All content (name, tagline, projects, skills, about) lives in `/lib/data.ts`. To update any text on the site, you change one file — no hunting through components.

**Component-per-section structure**  
Each section is its own component (`Hero`, `Projects`, `Skills`, `About`, `Navbar`). Keeps concerns separated and makes it easy to reorder or remove sections from `app/page.tsx`.

**Auto-cycling carousel with pause-on-hover**  
Projects section uses `setInterval` + `useRef` to auto-advance every 4.1 seconds. Timer stops on hover and resumes on mouse leave — avoids interrupting users who are actively reading.

**Touch support on mobile**  
Project carousel handles `onTouchStart` / `onTouchEnd` with a 50px threshold for swipe detection — same carousel works on both desktop (arrows) and mobile (swipe).

---

## Projects Featured

| Project | Type | Stack |
|---|---|---|
| Lead Management API | Backend | Node.js, Express, TypeScript, PostgreSQL, Jest, GitHub Actions |
| Lead Management System (CRM Pipeline) | Production | Google Apps Script, JavaScript, Google Sheets |
| Multi-tenant Reporting Pipeline (ETL) | Production | Google Apps Script, Looker Studio, Google Sheets |
| Analytics Tracking Implementation (GTM) | Production | GTM, GA4, JavaScript, Google Ads, Facebook Pixel |

---

## Local Setup

```bash
git clone https://github.com/Atherz413/portfolio
cd portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## What I'd Do Next

- Add a **contact form** with server-side email sending (Resend or Nodemailer)
- Add **page transitions** between sections