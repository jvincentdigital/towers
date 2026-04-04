# Towers

Puerto Rico's premier online store for motocross, ATV, and UTV parts, riding gear, protection, and lifestyle products.

**Live:** [towers-ivory.vercel.app](https://towers-ivory.vercel.app)

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Vercel** (hosting, auto-deploys from main)

## Features

- 6 pages: Home, Shop, Product Detail, About, Contact, Cart/Checkout
- Fully responsive (mobile-first) with sticky header and hamburger menu
- Dark mode with toggle (persists to localStorage, falls back to system preference)
- Shopping cart with add/remove/update across all pages
- Shop page with category, brand, and price filters + sort
- Product detail with image gallery, size/quantity selectors, specs accordion
- 14 mock products across 5 categories: Helmets, Gear, Protection, Parts, Lifestyle

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                # Pages (Home, Shop, Product, About, Contact, Cart)
├── components/         # Header, Footer, ProductCard, home sections
├── context/            # CartContext, ThemeContext
└── data/               # Mock product data
public/
└── images/             # Product, category, and hero images
```

## Pages

### Homepage
Full-width hero section, featured categories grid, featured products, lifestyle banner, and newsletter signup.

### Shop
Sidebar filters (category, brand, price range), sort dropdown, responsive product grid. Supports URL params for category pre-filtering.

### Product Detail
Image gallery with thumbnails, size and quantity selectors, add to cart, specs accordion, and related products section.

### About
Brand story, mission statement, values grid (Authenticity, Performance, Community, Quality), and community photo banner.

### Contact
Contact form (name, email, subject, message), store info card (San Juan, PR), and map placeholder.

### Cart / Checkout
Cart line items with quantity stepper, order summary with shipping calculation (free over $150), checkout form with personal info, shipping address, and payment placeholder.

## Design

- **Color palette:** White, black, accent red (#E63946)
- **Typography:** Inter (sans-serif)
- **Aesthetic:** Clean, premium, modern — inspired by Alpinestars and Troy Lee Designs
- **Dark mode:** Class-based toggle with localStorage persistence and system preference fallback

## Repo

**GitHub:** [github.com/jcincnet11/towers](https://github.com/jcincnet11/towers)
