# Meridian Health Clinic

A Tier 3 Launch Kit demo built by Modulifyr — a fictional private healthcare clinic,
used to demonstrate full-animation static site capability for healthcare clients.

**Live scope:** 14 pages (home, about, services, doctors, patient-info, insurance,
contact, careers, testimonials, blog, facilities, health-tips, virtual-consultation,
404), fully responsive, no backend — in line with Launch Kit boundaries.

## Stack

Per `modulifyr-tech-stack-handbook-v1.1`, §2.1 (Static Website):

| Layer | Choice |
|---|---|
| Framework | Astro |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Animation | GSAP + ScrollTrigger (full: scroll-triggered sequences, parallax, micro-interactions) |
| Deployment target | Vercel / Cloudflare Pages |

This is a migration from the original plain HTML/CSS/JS implementation to
the Astro stack, following the same architecture as `lantern-house`. The
original was not a documented exception and has been corrected.

## Design

Brand and visual direction belong to the fictional client (Meridian Health),
not Modulifyr — this demo carries its own distinct healthcare identity
(Teal/Gold palette, Cormorant Garamond + DM Sans typography) rather than
Modulifyr's brand. Every page footer credits Modulifyr with a link to
modulifyr.com.

Palette, type system, and overall visual approach are documented as design
decisions specific to this brief — see `src/styles/global.css` for tokens.

## Structure

```
src/
  layouts/Layout.astro       shared HTML shell, fonts, nav + footer
  components/
    Nav.astro                 scroll-aware header, mobile menu
    Footer.astro              sitemap + required "Powered by Modulifyr" credit
    PageHeader.astro          shared inner-page hero header
  scripts/animations.js       GSAP utilities: reveal, hero intro, parallax,
                              counters, float, rotate-on-hover, scroll-Y
                              reused across every page rather than duplicated
  pages/                      14 routes
```

## Commands

```
npm install
npm run dev       # localhost:4321
npm run build     # outputs to dist/
npm run preview
```

## Sitemap (14 pages)

`/` `/about` `/services` `/doctors` `/patient-info` `/insurance` `/contact`
`/careers` `/testimonials` `/blog` `/facilities` `/health-tips`
`/virtual-consultation` `/404`