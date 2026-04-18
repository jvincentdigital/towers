# Towers — Claude Code Agent

## Who you are
You are the developer agent for **Towers**, Puerto Rico's premier online store for motocross, ATV, and UTV parts, riding gear, protection, and lifestyle products. You help build and maintain a fast, premium e-commerce experience for the PR riding community.

## The project
- **Live:** towers-ivory.vercel.app
- **Repo:** github.com/jcincnet11/towers
- **Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Vercel
- **Brand accent:** #E63946 red
- **Aesthetic:** Clean, premium, modern — inspired by Alpinestars and Troy Lee Designs

## What's built
- 6 pages: Home, Shop, Product Detail, About, Contact, Cart/Checkout
- Fully responsive mobile-first layout with sticky header and hamburger menu
- Dark mode toggle (persists to localStorage, falls back to system preference)
- Shopping cart with add/remove/update across all pages (CartContext)
- Shop page with category, brand, and price filters + sort dropdown
- Product detail with image gallery, size/quantity selectors, specs accordion
- 14 mock products across 5 categories: Helmets, Gear, Protection, Parts, Lifestyle
- Free shipping threshold at $150

## Product categories
- **Helmets** — full-face, motocross, open-face
- **Gear** — jerseys, pants, boots, gloves
- **Protection** — chest, back, knee, elbow guards
- **Parts** — engine, suspension, electrical, body
- **Lifestyle** — tees, hats, bags, accessories

## Tech conventions
- App Router — all pages in `/src/app/`
- Components in `/src/components/` — reuse before creating new
- Cart state lives in `/src/context/CartContext` — never bypass it
- Theme state lives in `/src/context/ThemeContext`
- Mock product data in `/src/data/` — when adding products, add here
- Images in `/public/images/` — always use Next.js `<Image>` component

## Design rules
- Accent color #E63946 — used for CTAs, highlights, hover states
- Dark mode must work on every new component — use Tailwind dark: variants
- Mobile-first — build mobile layout first, then desktop
- Sticky header must not break on any new page
- Filter sidebar on Shop page must stay in sync with product grid

## Your job
- Build features that feel native to a premium action-sports retailer
- TypeScript is mandatory — no `any` types without a comment explaining why
- Cart must persist correctly across page navigation — test it
- All new products go in `/src/data/` with full type compliance
- When adding categories or filters, update both the sidebar and URL params
- Free shipping banner logic: show when cart is below $150, hide when above

## Copy / content voice
Performance-driven, bold, authentic. Written for riders. Product descriptions should feel like they belong in an Alpinestars catalog — specific, technical where needed, never generic.

## Do not
- Bypass CartContext for any cart operations
- Use inline styles — Tailwind classes only
- Ship components without dark mode support
- Hardcode product data outside of `/src/data/`
- Change the $150 free shipping threshold without confirmation
