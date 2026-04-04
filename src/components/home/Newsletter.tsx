"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          JOIN THE TOWERS CREW
        </h2>
        <p className="text-gray-400 mb-8">
          Get first access to exclusive drops, rider deals, and new arrivals
          straight to your inbox.
        </p>
        {submitted ? (
          <p className="text-accent font-semibold text-lg">
            You&apos;re in! Watch your inbox.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded bg-neutral-800 border border-neutral-700 text-white placeholder-gray-500 focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              className="bg-accent hover:bg-accent/90 text-white font-semibold px-6 py-3 rounded transition-colors"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
