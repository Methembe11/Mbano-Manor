# React Conversion Conventions

You are converting a legacy static HTML site (root `*.html` files) into a React + styled-components app. Follow these conventions EXACTLY.

## File layout

- Each page lives at `src/pages/<Name>.jsx` as a `export default function <Name>()`.
- Routes are already wired in `src/App.jsx`. Do NOT edit `App.jsx` or `src/main.jsx`.
- Read the legacy source: `about-mbano.html` → `src/pages/AboutMbano.jsx`, etc.

## Available imports (from `src/components/primitives.jsx`)

Read this file first. It exports styled components mirroring the old CSS classes:

- `Container` — max-width wrapper.
- `Section` — section with props `$tint`, `$dark`, `$deep`, `$pad={120}` for inline padding.
- `SectionLabel`, `SectionTitle` (`$light` for white text), `SectionText` (`$light`, `$mt`), `Divider` (`$center`), `SectionHead` (`$center`).
- `StoryCta` — gold arrow link. Use `as={Link}` for internal routes.
- `TwoCol` (`$reverse`), `ContentImg` (`$tall`), `ContentText` (nest SectionText inside).
- `CardGrid` (`$two`), `Card` (`$dark`), `CardIcon`, `CardTitle` (`$dark`), `CardText` (`$dark`).
- `ImgGrid` (`$four`), `GridItem` (`$four`, `$zoom`), `GalleryGrid`, `GalleryItem`, `GalleryOverlay`, `GalleryItemIcon`, `GalleryCaption`.
- `VideoBlock`, `MediaFrame` (`$ratio`).
- `ReviewCard` (`$dark`), `ReviewStars`, `ReviewTitle` (`$dark`), `ReviewText` (`$dark`), `ReviewAuthor`, `ReviewSource`.
- `NewsGrid`, `NewsCard`, `NewsThumb`, `NewsBody`, `NewsTitle`, `NewsMeta`, `NewsExcerpt`.
- `SpecTable` (`$dark`).
- `CtaBanner`, `CtaActions`.
- `ContactGrid`, `ContactDetail`, `ContactDetailIcon`, `ContactDetailLabel`, `ContactDetailValue`, `ContactForm`.
- `BtnPrimary`, `BtnOutline` (`$dark`), `BtnWhatsapp` — anchor-based; use `as={Link}` for internal routes, `href` for external.
- `Reveal` — scroll-reveal wrapper: `<Reveal delay={0.1}>...</Reveal>`.
- `breakpoints` — `breakpoints.sm` etc.

Other shared components:
- `PageHero` from `../components/PageHero` — props `badge`, `title`, `sub`, `crumb="/"`, `crumbLabel`.
- `ContactSection` from `../components/ContactSection` — the contact info + fake form block.
- `LightboxImage` from `../components/LightboxImage` — `<LightboxImage src= caption= alt= />` opens the lightbox on click.
- Data: `src/data/site.js` — `CONTACT` (phones/emails/WhatsApp/address), `img(path)` helper, `LOGO`, etc. `HERO_VIDEOS` drives the home hero: each entry is `{ src, poster, eyebrow, title: [line1, line2], sub }` — 8s crossfade with per-slide text. Hero clips are self-hosted in `public/videos/` (Pexels hotlinks are throttled and won't play).

## Rules

1. Convert ALL content from the legacy HTML — no text truncation.
2. Internal links: `<Link to="/about-mbano">` (route paths are lowercase, same as filenames minus `.html`). NEVER use `href` for internal links.
3. External links (news articles, TripAdvisor, socials): plain `<a href="https://..." target="_blank" rel="noopener noreferrer">`.
4. Images/videos keep the EXACT live-site URLs (`https://www.mbanomanorhotel.com/wp-content/uploads/...`). Do not use `img()` unless it matches (it prefixes the uploads base).
5. Map old CSS classes to primitives by name (`.section-label` → `SectionLabel`, `.card-grid` → `CardGrid`, etc.). The primitives already contain the exact CSS.
6. If a section needs styles NOT in primitives, define a local styled component at the TOP of the page file using the same CSS values from `src/theme.js` (e.g. `theme.colors.forestNight`).
7. Use `Reveal` for scroll animations on sections/cards where the old HTML used `class="reveal"` (+ `reveal-delay-1/2/3` → `delay={0.1/0.2/0.3}`).
8. NO `<style>` blocks, NO `className`, NO inline `<div style="...">` strings — everything is styled-components or React `style={{}}` objects.
9. The lightbox: for clickable gallery images use `<LightboxImage src={url} caption alt />`. For multi-image grids use `useLightbox()` from `../context/Lightbox` on click if you need custom markup. It also supports YouTube embeds: `openLightbox(url, title, 'video')` renders the film in a 16:9 modal.
10. Do NOT import React Router `Link` unless needed. Do NOT edit `App.jsx`, `main.jsx`, or any shared component. Only write YOUR page file.
11. Watch out: styled component names must not collide with the function name (e.g. don't name a styled component `Gallery` inside `Gallery.jsx`).

## Verify

Run `npm run build` at the project root after writing your file. Fix any errors until the build passes. Report back: which page you wrote, any images/sections you couldn't find in the legacy file, and the build result.
