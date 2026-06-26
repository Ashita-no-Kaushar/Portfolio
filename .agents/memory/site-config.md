---
name: Portfolio site config
description: Central content config for Kaushar Halani portfolio; where name/role/bio/links/stats live
---

## Location
`artifacts/portfolio/src/config/site.ts`

## What it controls
- `siteConfig.name` — "Kaushar Halani"
- `siteConfig.role` — badge, path, openTo text
- `siteConfig.tagline` — hero h2
- `siteConfig.bio` — hero paragraph
- `siteConfig.stats` — hero 4-stat grid
- `siteConfig.links` — linkedin, github, twitter, email, resume, profile (all TODO placeholders)
- `siteConfig.seo` — title, description, url

## Components that consume it
- `src/components/sections/hero.tsx` — name, badge, tagline, bio, stats, CTA links
- `index.html` — SEO meta tags (manually kept in sync; not auto-imported)

## Why
User goal: "in future only content will change." All Phase 2 content updates should go through this file first.

## How to apply
When adding a new component that uses name/role/bio/links, import from `@/config/site` not from data.ts.
data.ts still owns project data, skills, experience, education.
