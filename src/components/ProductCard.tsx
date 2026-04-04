"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group border border-neutral-200 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-shadow">
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <Link
          href={`/product/${product.id}`}
          className="block text-neutral-900 font-semibold hover:text-accent transition-colors mb-2 leading-tight"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-neutral-900">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addItem(product)}
            className="text-sm bg-accent hover:bg-accent/90 text-white font-semibold px-4 py-2 rounded transition-colors"
          >
            Quick Add
          </button>
        </div>
      </div>
    </div>
  );
}
