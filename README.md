# DS Identity

Premium Next.js App Router website for the DS Identity student community at Dubai Scholars Private School.

## Overview

This project delivers a dark luxury editorial website for DS Identity with:

- F1-inspired minimal dashboard styling
- App Router architecture in Next.js 16+
- TypeScript and Tailwind CSS
- Framer Motion interactions
- Functional magazine reader demo for Beyond Ventures
- Centralised content data for events, initiatives, resources, and leadership

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Project structure

- `src/app` — routes and page entry points
- `src/components` — reusable UI and page sections
- `src/data` — content registry for initiatives, events, resources, team, magazines
- `src/types` — shared TypeScript models

## Add or edit resources

1. Update the relevant data in `src/data/site.ts`.
2. Keep `qualification`, `subject`, `category`, `status`, and `description` values aligned with the resource model.
3. Use the existing route structure for new pages or expand the central registry.
4. For PDFs or magazine files, place them in `public/magazines/` and update the relevant URL.

## Resource placeholder rules

- Do not invent student names, dates, achievements, or real publication data.
- Keep unavailable items clearly labelled as placeholders or “Coming Soon”.
- Prefer editable, centralised text over hardcoded page-specific copy.

## Demo magazine

The first edition reader uses a functional placeholder demo, while the PDF download route points to a sample placeholder file under `public/magazines/` so the magazine experience remains working during early publishing.
