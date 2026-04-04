import Link from "next/link";
import { getFeaturedProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 tracking-tight">
        FEATURED PRODUCTS
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.slice(0, 8).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          href="/shop"
          className="inline-block border-2 border-neutral-900 hover:border-accent hover:text-accent text-neutral-900 font-semibold px-8 py-3 rounded transition-colors"
        >
          View All Products
        </Link>
      </div>
    </section>
  );
}
