"use client";

import { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { products, categories, brands } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { X, SlidersHorizontal } from "lucide-react";

type PriceRange = "under50" | "50-100" | "100-250" | "250plus";

const priceRanges: { key: PriceRange; label: string; min: number; max: number }[] = [
  { key: "under50", label: "Under $50", min: 0, max: 50 },
  { key: "50-100", label: "$50 – $100", min: 50, max: 100 },
  { key: "100-250", label: "$100 – $250", min: 100, max: 250 },
  { key: "250plus", label: "$250+", min: 250, max: Infinity },
];

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-20 text-center text-neutral-400">Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<PriceRange | null>(null);
  const [sort, setSort] = useState<SortOption>("featured");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sync category from URL on mount / param change
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories((prev) =>
        prev.includes(initialCategory) ? prev : [initialCategory]
      );
    }
  }, [initialCategory]);

  const toggleCategory = (cat: string) =>
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );

  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );

  const filtered = useMemo(() => {
    let result = [...products];

    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.category));
    }
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brand));
    }
    if (selectedPriceRange) {
      const range = priceRanges.find((r) => r.key === selectedPriceRange)!;
      result = result.filter((p) => p.price >= range.min && p.price < range.max);
    }

    switch (sort) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.reverse();
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [selectedCategories, selectedBrands, selectedPriceRange, sort]);

  /* ---- Sidebar content (reused for desktop + mobile overlay) ---- */
  const filterContent = (
    <div className="space-y-8">
      {/* Categories */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.slug}>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.slug)}
                  onChange={() => toggleCategory(cat.slug)}
                  className="accent-accent h-4 w-4"
                />
                {cat.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Brands */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Brand</h3>
        <ul className="space-y-2">
          {brands.map((brand) => (
            <li key={brand}>
              <label className="flex items-center gap-2 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => toggleBrand(brand)}
                  className="accent-accent h-4 w-4"
                />
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider mb-3">Price</h3>
        <div className="flex flex-col gap-2">
          {priceRanges.map((range) => (
            <button
              key={range.key}
              onClick={() =>
                setSelectedPriceRange((prev) => (prev === range.key ? null : range.key))
              }
              className={`text-left text-sm px-3 py-2 border rounded transition-colors ${
                selectedPriceRange === range.key
                  ? "bg-accent text-white border-accent"
                  : "border-neutral-300 hover:border-accent"
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Header row */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold tracking-tight">SHOP ALL</h1>

        <div className="flex items-center gap-4">
          {/* Mobile filter toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-1.5 text-sm font-medium"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm border border-neutral-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-accent"
          >
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low → High</option>
            <option value="price-desc">Price: High → Low</option>
            <option value="newest">Newest</option>
          </select>
        </div>
      </div>

      <div className="flex gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden lg:block w-56 shrink-0">{filterContent}</aside>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative z-10 w-72 max-w-full bg-white h-full overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              {filterContent}
            </div>
          </div>
        )}

        {/* Product grid */}
        <div className="flex-1">
          <p className="text-sm text-neutral-500 mb-4">
            {filtered.length} product{filtered.length !== 1 && "s"}
          </p>
          {filtered.length === 0 ? (
            <p className="text-neutral-400 py-20 text-center">
              No products match your filters.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
