# DS Identity

DS Identity at Dubai Scholars Private School. Next.js App Router, React, TypeScript, Tailwind CSS and Motion. Production: https://dsidentity.tech.

## Development

```sh
npm install
npm run dev
npm run build
npm start
```

Six primary routes remain Home, Beyond Books, Beyond Ventures, Beyond Borders, DS Events and Meet the Team. GitHub main deploys through the existing Vercel project.

## Editing content

All approved content lives in `src/data/`:

- `community.ts`: history, statistics, participation estimate and media recognition.
- `site.ts`: navigation, initiative registry and event index.
- `event-content.ts`, `competitions.ts`: DS Venturists, Investment Literacy Club and external competition participation.
- `magazines.ts`, `videos.ts`: edition status, editorial features and confirmed video IDs. Volume 2 magazine remains Coming Soon.
- `resources.ts`: six Pearson Edexcel pathways, paper codes, topics and resource categories; no resources are published yet.
- `team.ts`: one central record per person plus existing leadership and initiative assignments.
- `social.ts`: approved Instagram, school YouTube and email links.
- `ds-ventures-gallery.ts`: event gallery images and accessible descriptions.

Keep unconfirmed resources, dates, achievements and portraits unpublished. The 1,000+ DS Venturists figure is an estimated cumulative participation count, not a unique-student count. The four listed competition categories belong specifically to 2025. Beyond Borders remains undisclosed.

## Replacing team portraits

1. Put an approved photograph in `public/team/`, for example `public/team/mahin.webp`.
2. Set that person's `image` in `src/data/team.ts` to `/team/mahin.webp`.
3. Optionally add `imagePosition: "50% 30%"` to adjust framing.

Every appearance uses the reusable `src/components/team/portrait.tsx` component and the same central image. Images use 4:5 framing and object-fit cover. A null image displays a neutral silhouette, with no fictional face. Names, positions and assignments should remain unchanged unless a roster update is approved.

## Event photographs

The gallery includes all 48 supplied DSV-299 through DSV-346 photographs. Optimised WebP copies are in `public/events/ds-venturists/`; original PNG files remain untouched. Visitors can browse six groups of eight in the circular carousel, or move through all 48 in the lightbox. Keyboard controls, pause, touch dragging and reduced-motion support remain available.

Add future photos to the central gallery data with meaningful alt text. Do not invent identities, event dates or awards from photographs.

## Magazine reader and PDF

Volume 1, *Shadows to Spotlight*, uses the 36 original page JPEGs in `public/magazines/volume-1/pages/`, ordered numerically by `src/data/magazine-volume-1.ts`. The downloadable `public/magazines/beyond-ventures-volume-1.pdf` contains the same 36 pages. Preserve original images and their order. The reader supports page buttons, keyboard arrows, mobile portrait mode, zoom and an expanded reader view.

Videos use preview thumbnails and load a YouTube privacy-enhanced iframe only on click. Direct YouTube links remain available as fallback. Volume 1 has two direct interviewees; editorial profiles are kept separate. Volume 2 has three published interviews, but no published magazine or reader.

## Publishing academic resources

Place an approved PDF in `public/resources/`. Add an entry to `resourceFiles` in `src/data/resources.ts` with `id`, `title`, `qualification` (`igcse` or `ial`), `subject`, `category`, `topic`, `fileUrl`, and optional `paperCode`. Category IDs and topic names must match the pathway data. The matching resource then gains preview and download controls. Other topics remain clearly marked Coming Soon.

Paper-code references link to Pearson's official qualification pages. Confirm any future syllabus or exam guidance against the current official specification.

## Accessibility and verification

Shared styles include visible keyboard focus and reduced-motion rules. New portrait reveals are progressive enhancement; content remains visible without animation. No contact form or invented resource downloads are provided. The original homepage hero and official logo remain intact.
