"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { getProduct, getRelatedProducts } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import { ChevronDown, Minus, Plus } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = getProduct(id);
  const relatedProducts = product ? getRelatedProducts(product.id) : [];
  const { addItem } = useCart();

  const [mainImage, setMainImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [specsOpen, setSpecsOpen] = useState(false);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Product not found</h1>
        <p className="text-neutral-500">
          The product you&apos;re looking for doesn&apos;t exist or has been removed.
        </p>
      </main>
    );
  }

  const allImages = product.images.length > 0 ? product.images : [product.image];

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize ?? undefined);
  };

  const decrement = () => setQuantity((q) => Math.max(1, q - 1));
  const increment = () => setQuantity((q) => q + 1);

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      {/* Product section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Image gallery */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-neutral-100">
            <Image
              src={allImages[mainImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {allImages.length > 1 && (
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {allImages.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setMainImage(i)}
                  className={`relative w-20 h-20 shrink-0 rounded overflow-hidden border-2 transition-colors ${
                    mainImage === i ? "border-accent" : "border-transparent"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="flex flex-col">
          <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">
            {product.brand}
          </p>
          <h1 className="text-3xl font-bold tracking-tight mb-3">{product.name}</h1>
          <p className="text-2xl font-semibold text-accent mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-neutral-600 leading-relaxed mb-8">{product.description}</p>

          {/* Size selector */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-sm border rounded transition-colors ${
                      selectedSize === size
                        ? "bg-accent text-white border-accent"
                        : "border-neutral-300 hover:border-accent"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity selector */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2">
              Quantity
            </h3>
            <div className="inline-flex items-center border border-neutral-300 rounded">
              <button
                onClick={decrement}
                className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                aria-label="Decrease quantity"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 min-w-[3rem] text-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={increment}
                className="px-3 py-2 hover:bg-neutral-100 transition-colors"
                aria-label="Increase quantity"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-accent text-white font-semibold text-sm uppercase tracking-wider py-4 rounded hover:bg-accent/90 transition-colors"
          >
            Add to Cart
          </button>

          {/* Specs accordion */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mt-8 border-t pt-6">
              <button
                onClick={() => setSpecsOpen((o) => !o)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider">
                  Specifications
                </h3>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    specsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {specsOpen && (
                <dl className="mt-4 space-y-3">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between text-sm">
                      <dt className="text-neutral-500">{key}</dt>
                      <dd className="font-medium">{value}</dd>
                    </div>
                  ))}
                </dl>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
