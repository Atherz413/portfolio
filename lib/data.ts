export const siteConfig = {
  name: "Laphat Rongruangkul",
  tagline: "I build backend systems, test them properly, and ship to production.",
  subTagline:
    "2 years of production systems — CRM pipelines, ETL, multi-tenant data routing. — Now shipped — Node.js/PostgreSQL API + React frontend, both in production.",
  github: "https://github.com/Atherz413",
  linkedin: "https://www.linkedin.com/in/laphat-rongruangkul-64a1b3288/",
};

export type Project = {
  id: string;
  title: string;
  type: "backend" | "frontend" | "production";
  stack: string[];
  description: string;
  highlights: string[];
  featuredHighlight?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    id: "lead-management-api",
    title: "Lead Management API",
    type: "backend",
    stack: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Jest", "GitHub Actions"],
    description:
      "A REST API implementing the full lead lifecycle — assignment, ownership transfer, and audit trail — rebuilt from a production Apps Script system into a proper backend stack.",
    highlights: [
      "Transactional lead assignment with conflict resolution",
      "Immutable audit log for every state change",
      "Integration tests with Jest + Supertest",
      "CI/CD pipeline via GitHub Actions → Render",
    ],
    featuredHighlight: "CI/CD pipeline via GitHub Actions → Render",
    githubUrl: "https://github.com/Atherz413/lead-management-api",
  },
  {
    id: "lead-frontend",
    title: "Lead Management Dashboard",
    type: "frontend",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "React Router"],
    description:
      "A frontend dashboard connecting to the Lead Management API — handles JWT auth, displays the full lead table, and lets managers create and assign leads inline without leaving the page.",
    highlights: [
      "JWT auth with protected routes and localStorage token persistence",
      "Parallel data fetching (leads + users) via Promise.all — single loading state",
      "Inline lead assignment: dropdown + PATCH to API with optimistic refresh",
      "Status badge system with color-coded lead states (new → closed_won / closed_lost)",
    ],
    featuredHighlight: "Parallel data fetching (leads + users) via Promise.all — single loading state",
    githubUrl: "https://github.com/Atherz413/lead-frontend",
  },
  {
    id: "crm-pipeline",
    title: "Lead Management System (CRM Pipeline)",
    type: "production",
    stack: ["Google Apps Script", "JavaScript", "Google Sheets"],
    description:
      "A mini CRM pipeline managing the full lead lifecycle for a sales team across multiple lead sources — built inside Google Sheets as a no-budget alternative to off-the-shelf CRM tools..",
    highlights: [
      "2-Pass Sync pattern (backup → write) to prevent data loss",
      "Conflict resolution for mid-cycle ownership changes",
      "Audit log with timestamped entries for every state change",
      "Edge case handling: empty rows, reverse-order deletions, duplicates",
    ],
    featuredHighlight: "2-Pass Sync pattern (backup → write) to prevent data loss",
  },
  {
    id: "etl-pipeline",
    title: "Multi-tenant Reporting Pipeline (ETL)",
    type: "production",
    stack: ["Google Apps Script", "JavaScript", "Looker Studio", "Google Sheets"],
    description:
      "A config-driven ETL pipeline ingesting data from 7 ad channels per client, transforming and routing it to dashboards — serving ~100 reports from a single codebase.",
    highlights: [
      "Config file as single source of truth — one cell change re-routes the entire pipeline",
      "Replaced IMPORTRANGE with Apps Script to bypass undocumented cell limits",
      "Case-insensitive account matching for inconsistent upstream data",
      "Monitoring dashboard tracking update status per account per day",
    ],
    featuredHighlight: "~100 reports from a single codebase",
  },
  {
    id: "analytics-tracking",
    title: "Analytics Tracking Implementation (GTM)",
    type: "production",
    stack: ["Google Tag Manager", "JavaScript", "GA4", "Google Ads", "Facebook Pixel"],
    description:
      "Full tracking setups for production clients across lead generation campaigns — with custom deduplication and cross-platform event validation.",
    highlights: [
      "SessionStorage-based deduplication to prevent double-counting conversions",
      "Element Visibility trigger for form submission (more reliable than click triggers)",
      "Enhanced Conversion via hashed user data variables",
      "Cross-platform event validation: GA4 + Google Ads + Facebook Pixel in sync",
    ],
    featuredHighlight: "SessionStorage-based deduplication to prevent double-counting conversions",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Backend", items: ["Node.js", "Express", "TypeScript", "PostgreSQL", "REST API", "JWT"] },
  { category: "Frontend", items: ["React", "TypeScript", "React Router", "Vite"] },
  { category: "Testing", items: ["Jest", "Supertest", "Postman"] },
  { category: "DevOps", items: ["GitHub Actions", "Render", "Vercel", "Git", "CI/CD"] },
  { category: "AI-ASSISTED DEV", items: ["Claude", "ChatGPT", "Gemini", "Stitch"] },
  { category: "Martech", items: ["Google Apps Script", "JavaScript", "Google Tag Manager", "GA4", "Looker Studio", "Google Sheets", "Facebook Pixel", "Google Ads"] },
];

export const about = {
  story: [
    "I spent 2 years building production data systems at a digital marketing agency — CRM pipelines, ETL jobs, tracking implementations — all in Google Apps Script and JavaScript.",
    "I've since expanded into proper backend engineering — rebuilt those same systems with Node.js, PostgreSQL, and TypeScript, and shipped a React frontend on top.",
  ],
  values: ["Production systems over tutorials", "Debugs before asking for help", "Ownership mindset"],
};