"use client";

import Link from "next/link";

const shopLinks = [
  { href: "/shop?category=motocross", label: "Motocross" },
  { href: "/shop?category=atv", label: "ATV" },
  { href: "/shop?category=utv", label: "UTV" },
  { href: "/shop?category=gear", label: "Gear & Apparel" },
  { href: "/shop?category=accessories", label: "Accessories" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold uppercase tracking-widest text-white transition-colors hover:text-accent"
            >
              Towers
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              Puerto Rico&apos;s premier moto parts destination.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Shop
            </h3>
            <ul className="space-y-2">
              {shopLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + Newsletter */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white">
              Connect
            </h3>
            <div className="mb-6 flex gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-neutral-400 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.403a4.088 4.088 0 011.47.957c.453.453.78.898.957 1.47.164.46.35 1.26.404 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.404 2.43a4.088 4.088 0 01-.957 1.47 4.088 4.088 0 01-1.47.957c-.46.164-1.26.35-2.43.404-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.404a4.088 4.088 0 01-1.47-.957 4.088 4.088 0 01-.957-1.47c-.164-.46-.35-1.26-.404-2.43C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.404-2.43a4.088 4.088 0 01.957-1.47A4.088 4.088 0 015.064 2.3c.46-.164 1.26-.35 2.43-.404C8.76 1.838 9.14 1.826 12 1.826zm0-1.663C8.741.5 8.333.514 7.053.573 5.775.63 4.902.823 4.14 1.104a5.751 5.751 0 00-2.08 1.356A5.751 5.751 0 00.704 4.54C.423 5.302.23 6.175.173 7.453.114 8.733.1 9.14.1 12.4s.014 3.668.073 4.948c.057 1.278.25 2.15.531 2.913a5.751 5.751 0 001.356 2.08 5.751 5.751 0 002.08 1.356c.762.281 1.635.474 2.913.531C8.333 24.286 8.74 24.3 12 24.3s3.668-.014 4.948-.073c1.278-.057 2.15-.25 2.913-.531a5.751 5.751 0 002.08-1.356 5.751 5.751 0 001.356-2.08c.281-.762.474-1.635.531-2.913.059-1.28.073-1.688.073-4.948s-.014-3.668-.073-4.948c-.057-1.278-.25-2.15-.531-2.913a5.751 5.751 0 00-1.356-2.08A5.751 5.751 0 0019.86.704C19.1.423 18.226.23 16.948.173 15.668.114 15.26.1 12 .1z" />
                  <path d="M12 5.838a6.163 6.163 0 100 12.325 6.163 6.163 0 000-12.325zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 5.595a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-neutral-400 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.025 4.388 11.016 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.026 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.971H15.83c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796v8.437C19.612 23.089 24 18.098 24 12.073z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-neutral-400 transition-colors hover:text-accent"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.546 12 3.546 12 3.546s-7.505 0-9.377.504A3.016 3.016 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.504 9.376.504 9.376.504s7.505 0 9.377-.504a3.016 3.016 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            {/* Newsletter */}
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">
              Newsletter
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l-md border border-neutral-700 bg-neutral-800 px-3 py-2 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-r-md bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-neutral-500 sm:flex-row sm:px-6 lg:px-8">
          <p>&copy; 2026 Towers. All rights reserved.</p>
          <p>San Juan, Puerto Rico</p>
        </div>
      </div>
    </footer>
  );
}
