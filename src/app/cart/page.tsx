"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalItems, totalPrice } =
    useCart();

  const shipping = totalPrice >= 150 ? 0 : 9.99;
  const orderTotal = totalPrice + shipping;

  /* ───── Empty Cart ───── */
  if (items.length === 0) {
    return (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mb-4 h-16 w-16 text-zinc-300 dark:text-zinc-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
          />
        </svg>
        <h1 className="mb-2 text-2xl font-bold uppercase text-zinc-900 dark:text-white">
          Your Cart is Empty
        </h1>
        <p className="mb-6 text-zinc-500 dark:text-zinc-400">
          Looks like you haven&rsquo;t added any parts yet.
        </p>
        <Link
          href="/shop"
          className="rounded-lg bg-accent px-8 py-3 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-accent/90"
        >
          Continue Shopping
        </Link>
      </main>
    );
  }

  /* ───── Cart with Items ───── */
  return (
    <main>
      {/* Header */}
      <section className="bg-zinc-900 py-12 md:py-16">
        <h1 className="text-center text-3xl font-extrabold uppercase tracking-[.2em] text-white md:text-5xl">
          Your Cart
          <span className="ml-3 text-accent">({totalItems})</span>
        </h1>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          {/* ── Cart Items (left 2 cols) ── */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-zinc-200 dark:divide-zinc-700">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size ?? ""}`}
                  className="flex gap-4 py-6 first:pt-0 last:pb-0 sm:gap-6"
                >
                  {/* Image */}
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-800 sm:h-28 sm:w-28">
                    <Image
                      src={item.product.image}
                      alt={item.product.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                        {item.product.brand}
                      </p>
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white sm:text-lg">
                        {item.product.name}
                      </h3>
                      {item.size && (
                        <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">
                          Size: {item.size}
                        </p>
                      )}
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4">
                      {/* Quantity stepper */}
                      <div className="flex items-center overflow-hidden rounded-lg border border-zinc-300 dark:border-zinc-600">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="px-3 py-1.5 text-sm font-bold text-zinc-600 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          aria-label="Decrease quantity"
                        >
                          &minus;
                        </button>
                        <span className="min-w-[2rem] border-x border-zinc-300 dark:border-zinc-600 px-2 py-1.5 text-center text-sm font-semibold text-zinc-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="px-3 py-1.5 text-sm font-bold text-zinc-600 dark:text-zinc-300 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeItem(item.product.id)}
                        className="text-sm font-semibold text-zinc-400 transition hover:text-accent"
                        aria-label={`Remove ${item.product.name}`}
                      >
                        &times;&ensp;Remove
                      </button>
                    </div>
                  </div>

                  {/* Line subtotal */}
                  <p className="shrink-0 text-base font-bold text-zinc-900 dark:text-white sm:text-lg">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Order Summary (right col, sticky) ── */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-neutral-900 p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Subtotal</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
                  <span>Shipping</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">Free</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-zinc-400">
                    Free shipping on orders over $150
                  </p>
                )}
                <hr className="border-zinc-200 dark:border-zinc-700" />
                <div className="flex justify-between text-base font-bold text-zinc-900 dark:text-white">
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Demo Notice (checkout is not active) ── */}
        <div className="mt-16 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
            Checkout
          </h2>

          <div className="rounded-xl border-2 border-dashed border-accent/40 bg-accent/5 px-6 py-10 text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[.2em] text-accent">
              Demo Store
            </p>
            <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-white">
              Checkout is not active
            </h3>
            <p className="mx-auto max-w-md text-sm text-zinc-600 dark:text-zinc-400">
              Towers is a demonstration storefront. Online ordering is not
              available and no orders can be placed here. Please do not enter any
              personal or payment information.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-lg bg-accent px-8 py-3 text-sm font-bold uppercase tracking-[.15em] text-white transition hover:bg-accent/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
