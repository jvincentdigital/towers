import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center">
      <Image
        src="/images/hero/hero-main.jpg"
        alt="Towers Moto"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-4">
          RIDE WITHOUT LIMITS
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Premium motocross, ATV &amp; UTV parts and gear — shipped from Puerto Rico
        </p>
        <Link
          href="/shop"
          className="inline-block bg-accent hover:bg-accent/90 text-white font-semibold text-lg px-10 py-4 rounded transition-colors"
        >
          SHOP NOW
        </Link>
      </div>
    </section>
  );
}
