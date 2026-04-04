import Hero from "@/components/home/Hero";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import LifestyleBanner from "@/components/home/LifestyleBanner";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <LifestyleBanner />
      <Newsletter />
    </main>
  );
}
