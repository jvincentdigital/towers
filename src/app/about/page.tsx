import Image from "next/image";

export const metadata = {
  title: "About Us | Towers",
  description:
    "Born in Puerto Rico, built for the track. Learn about Towers — your premium source for motocross, ATV, and UTV parts.",
};

export default function AboutPage() {
  return (
    <main>
      {/* Hero Banner */}
      <section className="relative flex h-72 items-center justify-center bg-zinc-900 md:h-96">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
        <h1 className="relative z-10 text-5xl font-extrabold uppercase tracking-[.2em] text-white md:text-7xl">
          Our Story
        </h1>
      </section>

      {/* Brand Story */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <h2 className="mb-8 text-3xl font-bold uppercase tracking-wide text-zinc-900 md:text-4xl">
          Born in Puerto Rico, Built for the Track
        </h2>

        <div className="space-y-6 text-lg leading-relaxed text-zinc-600">
          <p>
            Towers was founded by a crew of riders who grew up tearing through
            the trails and tracks of Puerto Rico. We know what it feels like to
            need a part yesterday, to demand gear that can handle Caribbean heat
            and terrain, and to want a shop that actually speaks your language —
            literally and figuratively.
          </p>
          <p>
            What started as a garage operation between friends has grown into the
            Caribbean&rsquo;s go-to destination for premium motocross, ATV, and
            UTV parts. We stock only brands we trust and ride ourselves. Every
            product on our shelves has been vetted by riders who push their
            machines to the limit every weekend.
          </p>
          <p>
            We&rsquo;re not just selling parts — we&rsquo;re building a
            community. From local race sponsorships to trail meetups across the
            island, Towers is committed to growing the moto culture in Puerto
            Rico and beyond. When you shop with us, you&rsquo;re supporting
            riders who pour everything back into the sport.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="bg-zinc-50 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <blockquote className="border-l-4 border-accent pl-8">
            <p className="text-2xl font-bold leading-snug text-zinc-900 md:text-3xl">
              Our mission is to equip every rider in the Caribbean with
              world-class parts, honest expertise, and a community that rides
              together.
            </p>
          </blockquote>
        </div>
      </section>

      {/* Values Grid */}
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="mb-14 text-center text-3xl font-bold uppercase tracking-wide text-zinc-900">
          What We Stand For
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Authenticity */}
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center transition hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase text-zinc-900">
              Authenticity
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              We only carry genuine, rider-tested parts. No knockoffs, no
              shortcuts — just the real deal.
            </p>
          </div>

          {/* Performance */}
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center transition hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase text-zinc-900">
              Performance
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Every product is chosen for durability and peak output. We ride
              hard, and our inventory reflects that.
            </p>
          </div>

          {/* Community */}
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center transition hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase text-zinc-900">
              Community
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              From race days to trail rides, we invest in the people who make the
              Caribbean moto scene thrive.
            </p>
          </div>

          {/* Quality */}
          <div className="rounded-xl border border-zinc-200 bg-white p-8 text-center transition hover:shadow-lg">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold uppercase text-zinc-900">
              Quality
            </h3>
            <p className="text-sm leading-relaxed text-zinc-500">
              Premium brands, rigorous standards. We stand behind every part we
              sell — period.
            </p>
          </div>
        </div>
      </section>

      {/* Community Photo Banner */}
      <section className="relative h-72 w-full md:h-[500px]">
        <Image
          src="/images/hero/community.jpg"
          alt="Towers community riders"
          fill
          className="object-cover"
          unoptimized
        />
      </section>
    </main>
  );
}
