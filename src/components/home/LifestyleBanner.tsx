import Link from "next/link";
import Image from "next/image";

export default function LifestyleBanner() {
  return (
    <section className="relative py-32 flex items-center justify-center">
      <Image
        src="/images/hero/lifestyle-banner.jpg"
        alt="Towers Lifestyle"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
          MORE THAN PARTS — IT&apos;S A LIFESTYLE
        </h2>
        <p className="text-lg text-gray-300 max-w-xl mx-auto mb-8">
          Rep the culture on and off the track with Towers originals.
        </p>
        <Link
          href="/shop?category=lifestyle"
          className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-10 py-4 rounded transition-colors"
        >
          SHOP LIFESTYLE
        </Link>
      </div>
    </section>
  );
}
