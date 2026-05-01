# Hero Page Redesign Plan
## Built around the Forma Pasta logo identity

---

## Logo Aesthetic Analysis

The `forma-logo.png` communicates a specific brand identity that the current hero doesn't honor:

| Element | Logo Value | Current Hero |
|---|---|---|
| Background | Deep navy (`~#0f1f3d`) | Dark photo overlay |
| Primary text | Bold white geometric sans | Italic serif (Cormorant Garamond) |
| Accent color | True red (`~#cc1e1e`) | Terracotta (`#c4622d`) |
| Tone | Bold, modern, graphic | Warm, artisan, editorial |
| Energy | Confident / punchy | Soft / atmospheric |

The logo uses strong negative space, hard geometric shapes, and a bold red underbar. The hero should absorb those elements rather than fight them.

---

## Design Direction

### Color Corrections
The CSS variables need to be updated to match the logo's actual red, not the current terracotta. The hero specifically should pull from:
- `--color-navy: #0f1f3d` — logo background; use as hero section bg or overlay tint
- `--color-red: #cc1e1e` — logo accent red; replaces or supplements `--color-primary`
- White text on navy for the hero content area

The rest of the site (warm cream, body text) can stay as-is — this contrast is deliberate. The hero is the "brand statement" panel; the site beneath it is the warm restaurant experience.

### Layout Structure

```
┌─────────────────────────────────────────┐
│  [full-bleed navy panel, ~75vh]          │
│                                          │
│        [FORMA PASTA logo, centered]      │
│          ~300–400px wide                 │
│                                          │
│   ─────────────────── (red rule)         │
│                                          │
│   "Fresh pasta. Handmade in Sewickley."  │
│     (white, bold, tight tracking)        │
│                                          │
│   [View Menu]  [Book a Class]            │
│                                          │
│         · BYOB welcome ·                 │
│                                          │
│  [scroll arrow]                          │
└─────────────────────────────────────────┘
```

The logo becomes the H1-equivalent visual anchor. The text tagline drops below it as a supporting line, not competing with it.

### Logo Placement
- Centered horizontally and vertically biased slightly above center
- Logo rendered via `next/image` with `priority` — it IS the first meaningful content
- On mobile: scale to ~240px wide; on desktop: ~360px wide
- Add subtle entrance animation (fade-in + slight scale from 0.95 → 1.0)

### Typography Change for Hero
The display serif (Cormorant Garamond) doesn't match the logo's bold sans energy. For the hero tagline:
- Use a bold system sans or add a second display font (e.g., `Inter` weight 800, or `Barlow Condensed 700`)
- `font-display` can remain as the serif for the rest of the site — just override inside the hero component
- Tagline: `text-white font-bold tracking-tight` — no italics, no cursive

### Red Underbar Motif
The logo has a red horizontal rule under "PASTA". Mirror this as a section divider within the hero:
- A `4px` tall, `64px` wide `div` in `bg-[#cc1e1e]` centered between the logo and the tagline
- This becomes the connecting visual element between logo identity and content

### Background Treatment
Two viable options — pick one:

**Option A — Pure navy (brand-forward)**
- `bg-[#0f1f3d]` solid fill
- Possibly add a very subtle pasta texture (noise or a low-opacity photo) at 5–8% opacity behind the navy
- Cleaner, more design-intentional

**Option B — Navy-tinted photo**
- Keep the hero photo (`hero-1.jpg`) as the base layer
- Overlay with a high-opacity navy gradient (`from-[#0f1f3d]/95 to-[#0f1f3d]/80`) instead of black
- More textural, preserves the handmade feeling

Recommendation: **Option A** for the hero. The logo is strong enough to carry a clean background. Option B risks muddying the brand read.

### CTA Buttons
Update to match logo red:
- Primary: `bg-[#cc1e1e] text-white hover:bg-[#a81818]`
- Secondary: `border-white text-white hover:bg-white hover:text-[#0f1f3d]`

The hover state inverting to navy reinforces the brand color loop.

### Scroll Indicator
Keep the existing scroll indicator but update its border/dot color to `#cc1e1e` to maintain the red accent through the full section.

---

## Implementation Files

| File | Change |
|---|---|
| `src/app/globals.css` | Add `--color-navy` and `--color-brand-red` vars alongside existing vars |
| `src/components/sections/Hero.tsx` | Full redesign per this plan |
| `src/components/ui/CTAButton.tsx` | Update primary variant color to brand red |

---

## Animation Sequence

| Element | Delay | Animation |
|---|---|---|
| Logo | 0ms | fade-in + scale 0.95→1.0, 600ms |
| Red rule | 300ms | width expand 0→64px, 400ms |
| Tagline | 500ms | fade-in + y 10→0, 500ms |
| CTAs | 700ms | fade-in + y 10→0, 500ms |
| BYOB badge | 900ms | fade-in, 400ms |
| Scroll indicator | 1400ms | fade-in, 400ms |

---

## What This Is NOT Changing
- Section content (menu, classes, testimonials, etc.)
- Font stack for body or non-hero headings
- Navbar or Footer
- Mobile breakpoints — all layout uses responsive Tailwind classes
