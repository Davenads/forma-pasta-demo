# Forma Pasta Cafe & Market — Sewickley Demo

A demo website for Forma Pasta Cafe & Market, a fresh pasta restaurant, cooking school, and Italian market at 531 Beaver Street in Sewickley, PA. The site showcases all three facets of the business: a cafe serving breakfast, lunch, brunch, and Friday/Saturday dinner; hands-on pasta-making classes; and a take-home market stocked with house-made pasta shapes and sauces.

## Live Demo

https://forma-pasta.vercel.app

## Business Details

- **Address:** 531 Beaver Street, Sewickley, PA 15143
- **Phone:** (412) 586-7195
- **Email:** hello@formapgh.com
- **Instagram:** @formapastapgh
- **Type:** Restaurant / Cooking School / Italian Market

### Hours

| Service | Days | Times |
|---------|------|-------|
| Cafe & Lunch | Tuesday – Friday | 8am – 4pm |
| Brunch | Saturday – Sunday | 8am – 2pm |
| Dinner | Friday – Saturday | 5pm – 9pm |
| — | Monday | Closed |

BYOB welcome; no corkage fee.

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage with eight sections: full-screen hero with animated logo, three-pillars overview (cafe / classes / market), weekly pasta feature, classes callout, market callout, testimonials carousel, hours block, and Instagram strip |
| `/menu` | Static menu page with three service sections (Breakfast & Lunch, Brunch, Dinner), each listing dishes with name, description, and price. Includes feature cards calling out fresh pasta, BYOB, and seasonal rotation. Links to Toast online ordering and OpenTable reservations. |
| `/classes` | Pasta class booking page. Displays four class types with duration, group size, and pricing. Includes class policies, a testimonial carousel, and a full class booking inquiry form. |
| `/market` | Italian market take-home page. Lists all market items by category (Fresh Pasta, House Sauces, Market Extras) with names, descriptions, and prices. Includes a call-to-reserve CTA and an Instagram follow CTA for weekly availability updates. |
| `/about` | Brand story page. Long-form editorial copy about the kitchen philosophy, a three-column principles grid, and a four-photo grid of kitchen imagery. |
| `/contact` | Contact and hours page. Shows address, phone, full hours table, OpenTable reservation link, and BYOB callout on the left. On the right: embedded Google Maps iframe and the contact inquiry form. Also includes FAQPage JSON-LD. |
| `/order` | Interactive online ordering page. Time-aware service window detection (lunch / dinner / closed), category navigation, menu item cards with dietary flags and add-ons, cart management with desktop sidebar and mobile floating bar, and a checkout modal. Uses a split server/client pattern. |

## Components

### Layout

- **`Navbar`** — Responsive navigation with logo, page links, and an "Order Online" CTA button. Transparent over the hero, transitions to solid on scroll.
- **`Footer`** — Business address, phone, hours summary, social links, and site navigation.

### Sections (homepage)

- **`Hero`** — Full-viewport section with background food photography, `bg-black/72` overlay, animated logo image, animated red rule, tagline, dual CTA buttons, BYOB badge, and a scroll indicator. All Framer Motion entrance animations.
- **`ThreePillars`** — Three-column grid introducing the cafe, pasta classes, and market as distinct offerings, each with a link.
- **`WeeklyPasta`** — Feature section spotlighting the rotating weekly pasta with an editorial image.
- **`ClassesCallout`** — Promotional section driving traffic to the `/classes` page.
- **`MarketCallout`** — Promotional section driving traffic to the `/market` page.
- **`HoursSection`** — Compact hours display pulled from `HOURS` in constants.
- **`TestimonialsSection`** — Wraps the `TestimonialCarousel` in a full-width section.
- **`InstagramStrip`** — Footer-style strip with Instagram handle and follow CTA.

### UI

- **`CTAButton`** — Polymorphic button component supporting `href` (renders as `<a>` or `<Link>`), `external`, `variant` (`primary` / `secondary`), and `type="submit"`. Accepts `className` for overrides.
- **`SectionReveal`** — Framer Motion wrapper using `useInView` to animate sections into view on scroll. Supports `direction` (`up` / `left`) and `delay` props.
- **`TestimonialCarousel`** — Auto-advancing (5-second interval) testimonial carousel with directional slide animation via Framer Motion `AnimatePresence`. Manual prev/next controls and dot navigation. Pulls from `TESTIMONIALS` in constants.

### Forms

- **`ContactForm`** — Client component. React Hook Form + Zod validation. Fields: name, email, phone (optional), message. Submits via `sendContactEmail` server action. Renders a success state on completion.
- **`ClassBookingForm`** — Client component. React Hook Form + Zod validation. Fields: name, email, phone, class type (dropdown from `PASTA_CLASS_TYPES`), preferred date/timeframe, group size (dropdown), optional notes. Submits via `sendClassBookingEmail` server action.

### Order System

- **`OrderHero`** — Detects current service window (lunch / dinner / closed) based on real time and day, and surfaces it in a banner. Exposes the resolved `ServiceWindow` to the parent via callback.
- **`CategoryNav`** — Sticky horizontal category navigation that filters visible sections based on the active service window.
- **`MenuSection`** — Renders a group of `MenuItemCard` components for a given category.
- **`MenuItemCard`** — Individual menu item with name, description, price, best-seller badge, dietary flags (`V`, `GF`), optional add-ons, and "includes with" note. Add-to-cart button.
- **`DietaryBadge`** — Small pill badge for dietary flags (Vegetarian, Gluten-Friendly).
- **`CartSidebar`** — Desktop-only sticky cart panel showing line items, quantity controls, subtotal, delivery fee, and a checkout button.
- **`CartFloatingBar`** — Mobile-only bottom bar showing item count and total; tapping opens `CartDrawer`.
- **`CartDrawer`** — Slide-up mobile drawer version of the cart.
- **`CheckoutModal`** — Modal overlay for order placement, connected to the Slice ordering URL.

### Data / Context

- **`CartContext`** (`src/context/CartContext.tsx`) — React context providing cart state, add/remove/update-quantity actions, and total calculations. Wraps the entire order page via `CartProvider`.
- **`JsonLd`** — Minimal server component that renders a `<script type="application/ld+json">` tag. Accepts a single schema object or an array.

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **Forms:** React Hook Form + Zod
- **Email:** Resend (via server actions)
- **Fonts:** Cormorant Garamond (display/headings, italic style), Inter (body)
- **Deployment:** Vercel

## JSON-LD Schema

The root layout injects two schemas on every page:

- **`Restaurant`** — Populated with name, description, telephone, email, cuisine types (`Italian`, `Pasta`), price range (`$$`), full postal address, geo coordinates, aggregate rating, opening hours specifications, and links to the menu and Google Maps.
- **`WebSite`** — Name, URL, and description.

Per-page **`BreadcrumbList`** schemas are injected on all inner pages (`/menu`, `/classes`, `/market`, `/about`, `/contact`, `/order`).

The contact page adds a **`FAQPage`** schema with four Q&A pairs covering location, hours, contact method, and reservations.

## SEO

- Root layout `metadata` with `metadataBase`, default title, title template (`%s | Forma Pasta`), description, keywords, and full OpenGraph configuration with image
- Per-page `metadata` exports on all routes with page-specific titles and descriptions
- `sitemap.ts` — native Next.js sitemap at `/sitemap.xml` covering all six public routes with priority and change frequency values
- `robots.ts` — allows all, disallows `/api/`, references sitemap URL
- Alt text on all images
- Logical heading hierarchy (one `<h1>` per page, `<h2>` for sections, `<h3>` for cards)

## Special Patterns

### Split server/client on `/order`

The `/order` route uses a split pattern to support both metadata exports and client-side interactivity:

- `src/app/order/page.tsx` — server component; exports `metadata` and JSON-LD, renders `<OrderPage />`
- `src/app/order/OrderPage.tsx` — `'use client'` component; owns all cart state, service window state, and renders the full interactive ordering UI

### Time-aware service window

`OrderHero` computes the current service window on mount by checking the real-world day and time against the cafe's schedule. The resolved state (`'lunch'`, `'dinner'`, or `'closed'`) is lifted to `OrderPageContent` via a callback and drives which menu categories and items are visible in the order UI.

### Two server actions

`src/app/actions/contact.ts` exports two server actions:

- `sendContactEmail` — handles the general contact form
- `sendClassBookingEmail` — handles class booking inquiries with additional fields (class type, date preference, group size)

Both validate server-side with Zod and send email via Resend.

### Dual menu data sources

The site maintains two separate menu data structures:

- `src/lib/constants.ts` — static display menu used on `/menu` and `/market` (cafe dishes, market items, class types, testimonials)
- `src/lib/menu-data.ts` — structured ordering data used on `/order` (typed `MenuItem` and `MenuCategory` interfaces, availability flags, dietary flags, add-ons, numeric pricing)

## Local Development

```bash
cd C:/Projects/Sewickley-Demos/forma-pasta
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Requires a `RESEND_API_KEY` environment variable for contact form and class booking email delivery. Without it, form submissions will fail gracefully with an error message.

## Data Source

All business data (name, address, hours, menu, testimonials, class types, market items, social links) is centralized in `src/lib/constants.ts`. Update that file first — components inherit changes automatically. Menu items for the interactive order page live separately in `src/lib/menu-data.ts`.

## Deployment

Deployed on Vercel. Connected to the `main` branch of the private GitHub repo under the `Davenads` org. Push to `main` triggers automatic redeployment.
