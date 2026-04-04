"use client";

import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    alert(
      `Thanks, ${form.name}! Your message has been received. We'll get back to you soon.`
    );
    setForm({ name: "", email: "", subject: "General", message: "" });
  }

  return (
    <main>
      {/* Page Title */}
      <section className="bg-zinc-900 py-16 md:py-24">
        <h1 className="text-center text-4xl font-extrabold uppercase tracking-[.2em] text-white md:text-6xl">
          Get in Touch
        </h1>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form — left (3 cols) */}
          <form
            onSubmit={handleSubmit}
            className="space-y-6 lg:col-span-3"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-3 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-3 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="you@example.com"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300"
              >
                Subject
              </label>
              <select
                id="subject"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-3 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
              >
                <option value="General">General Inquiry</option>
                <option value="Orders">Orders</option>
                <option value="Returns">Returns</option>
                <option value="Partnerships">Partnerships</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold uppercase tracking-wide text-zinc-700 dark:text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-y rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-neutral-800 px-4 py-3 text-zinc-900 dark:text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-accent/90 md:w-auto"
            >
              Send Message
            </button>
          </form>

          {/* Info — right (2 cols) */}
          <div className="space-y-8 lg:col-span-2">
            {/* Store Info Card */}
            <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-neutral-900 p-8 shadow-sm">
              <h2 className="mb-6 text-xl font-bold uppercase tracking-wide text-zinc-900 dark:text-white">
                Towers HQ
              </h2>

              <div className="space-y-5 text-sm text-zinc-600 dark:text-zinc-400">
                {/* Address */}
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Address</p>
                    <p>123 Calle del Parque</p>
                    <p>San Juan, PR 00901</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Email</p>
                    <p>info@towerspr.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Phone</p>
                    <p>(787) 555-0199</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-white">Hours</p>
                    <p>Mon &ndash; Sat: 9:00 AM &ndash; 6:00 PM</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="flex h-64 items-center justify-center rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-600 bg-zinc-100 dark:bg-neutral-800">
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto mb-2 h-10 w-10 text-zinc-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-wide text-zinc-400">
                  Map
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
