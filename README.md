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
