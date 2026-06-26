/**
 * ─────────────────────────────────────────────────────────────
 *  IDENTITY CONFIG  (name, role, tagline, bio, stats, links)
 *
 *  This is one of two places you edit to update the portfolio:
 *    1. src/config/site.ts  ← identity, role, links, stats
 *    2. src/app/lib/data.ts ← projects, skills, experience, education
 *
 *  Change your role target here and the hero + SEO update globally.
 * ─────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  name: "Kaushar Halani",
  initials: "KH",

  role: {
    current: "Aspiring Data Analyst",
    path: "Data Analyst → Data Engineer → Data Scientist / AI-ML Engineer",
    badge: "Target Role: Data Analyst (Path to Data Engineer and Data Scientist)",
    openTo: "Open to internships, entry-level, and freelance data roles",
  },

  tagline: "Aspiring Data Analyst Building Toward Data Engineering & Data Science",

  bio: "I transform raw data into decision-ready insights through practical analysis, dashboarding, and reproducible workflows while growing into end-to-end data and ML engineering.",

  /**
   * Social & contact links — update once here, flows everywhere.
   * The same values are used by the hero, navbar, profile, and footer.
   */
  links: {
    linkedin: "https://www.linkedin.com/in/your-linkedin-handle",  // TODO: replace
    github:   "https://github.com/your-github-handle",             // TODO: replace
    twitter:  "",                                                   // optional
    email:    "",                                                   // TODO: add your email
    resume:   "/resume",
    profile:  "/profile",
  },

  /** Hero stats — replace with real numbers when you have them */
  stats: [
    { value: "20+",  label: "Projects" },
    { value: "10+",  label: "Technologies" },
    { value: "5+",   label: "Dashboards" },
    { value: "100%", label: "Dedication" },
  ],

  seo: {
    title: "Kaushar Halani — Data Analyst | Data Engineer | Data Scientist",
    description:
      "Aspiring Data Analyst building toward Data Engineering and Data Science. Projects in churn prediction, sentiment analysis, sales forecasting, and housing price modelling.",
    url: "https://kausharhalani.replit.app/",
  },
};
