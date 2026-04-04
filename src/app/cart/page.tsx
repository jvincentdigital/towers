"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } =
    useCart();

  const [checkout, setCheckout] = useState({
    name: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const shipping = totalPrice >= 150 ? 0 : 9.99;
  const orderTotal = totalPrice + shipping;

  function handlePlaceOrder(e: FormEvent) {
    e.preventDefault();
    alert(
      "Order placed! Thank you for shopping with Towers. You'll receive a confirmation email shortly."
    );
    clearCart();
  }

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

        {/* ── Checkout Form ── */}
        <form onSubmit={handlePlaceOrder} className="mt-16 max-w-3xl">
          <h2 className="mb-8 text-2xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
            Checkout
          </h2>

          {/* Personal Info */}
          <fieldset className="mb-10">
            <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Personal Information
            </legend>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label
                  htmlFor="co-name"
                  className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  Full Name
                </label>
                <input
                  id="co-name"
                  type="text"
                  required
                  value={checkout.name}
                  onChange={(e) =>
                    setCheckout({ ...checkout, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label
                  htmlFor="co-email"
                  className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  Email
                </label>
                <input
                  id="co-email"
                  type="email"
                  required
                  value={checkout.email}
                  onChange={(e) =>
                    setCheckout({ ...checkout, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label
                  htmlFor="co-phone"
                  className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  Phone
                </label>
                <input
                  id="co-phone"
                  type="tel"
                  required
                  value={checkout.phone}
                  onChange={(e) =>
                    setCheckout({ ...checkout, phone: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
            </div>
          </fieldset>

          {/* Shipping Address */}
          <fieldset className="mb-10">
            <legend className="mb-4 text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
              Shipping Address
            </legend>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label
                  htmlFor="co-street"
                  className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  Street Address
                </label>
                <input
                  id="co-street"
                  type="text"
                  required
                  value={checkout.street}
                  onChange={(e) =>
                    setCheckout({ ...checkout, street: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label
                  htmlFor="co-city"
                  className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                >
                  City
                </label>
                <input
                  id="co-city"
                  type="text"
                  required
                  value={checkout.city}
                  onChange={(e) =>
                    setCheckout({ ...checkout, city: e.target.value })
                  }
                  className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="co-state"
                    className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                  >
                    State
                  </label>
                  <input
                    id="co-state"
                    type="text"
                    required
                    value={checkout.state}
                    onChange={(e) =>
                      setCheckout({ ...checkout, state: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="co-zip"
                    className="mb-1 block text-sm font-semibold text-zinc-700 dark:text-zinc-300"
                  >
                    ZIP
                  </label>
                  <input
                    id="co-zip"
                    type="text"
                    required
                    value={checkout.zip}
                    onChange={(e) =>
                      setCheckout({ ...checkout, zip: e.target.value })
                    }
                    className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-2.5 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>
              </div>
            </div>
          </fieldset>

          {/* Payment Placeholder */}
          <div className="mb-10 rounded-lg border-2 border-dashed border-zinc-300 dark:border-zinc-600 bg-zinc-50 dark:bg-neutral-800 px-6 py-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
              Payment integration coming soon
            </p>
          </div>

          {/* Place Order */}
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[.15em] text-white transition hover:bg-accent/90 sm:w-auto"
          >
            Place Order
          </button>
        </form>
      </section>
    </main>
  );
}
