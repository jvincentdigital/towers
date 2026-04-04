export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category: string;
  description: string;
  sizes?: string[];
  image: string;
  images: string[];
  specs: Record<string, string>;
  featured?: boolean;
}

export const categories = [
  { name: "Helmets", slug: "helmets", image: "/images/categories/helmets.jpg" },
  { name: "Gear", slug: "gear", image: "/images/categories/gear.jpg" },
  { name: "Protection", slug: "protection", image: "/images/categories/protection.jpg" },
  { name: "Parts", slug: "parts", image: "/images/categories/parts.jpg" },
  { name: "Lifestyle", slug: "lifestyle", image: "/images/categories/lifestyle.jpg" },
];

export const brands = ["Fox Racing", "Alpinestars", "Troy Lee Designs", "ProTaper", "Shoei", "Leatt"];

export const products: Product[] = [
  {
    id: "1",
    name: "V3 RS Moto Helmet",
    brand: "Fox Racing",
    price: 549.99,
    category: "helmets",
    description: "Premium carbon fiber motocross helmet with MIPS technology. Lightweight construction with superior ventilation and an emergency cheek pad release system.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/products/helmet-1.jpg",
    images: ["/images/products/helmet-1.jpg"],
    specs: { Weight: "1,250g", Shell: "Carbon Fiber", Certification: "ECE 22.06", Ventilation: "12 intake / 4 exhaust" },
    featured: true,
  },
  {
    id: "2",
    name: "Supertech R10 Helmet",
    brand: "Alpinestars",
    price: 649.99,
    category: "helmets",
    description: "Race-ready helmet featuring advanced composite shell, optimized aerodynamics, and A-Head fitment system for a personalized fit.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/helmet-2.jpg",
    images: ["/images/products/helmet-2.jpg"],
    specs: { Weight: "1,300g", Shell: "Advanced Composite", Certification: "ECE 22.06 / DOT", Ventilation: "10 intake / 6 exhaust" },
    featured: true,
  },
  {
    id: "3",
    name: "SE5 Carbon Jersey",
    brand: "Troy Lee Designs",
    price: 74.99,
    category: "gear",
    description: "Lightweight performance jersey with moisture-wicking fabric, mesh ventilation panels, and a relaxed fit for maximum mobility on the bike.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/jersey.jpg",
    images: ["/images/products/jersey.jpg"],
    specs: { Material: "100% Polyester", Fit: "Relaxed", Features: "Mesh ventilation, drop tail" },
    featured: true,
  },
  {
    id: "4",
    name: "Racer Tactical Pants",
    brand: "Alpinestars",
    price: 189.99,
    category: "gear",
    description: "Durable motocross pants with pre-curved leg construction, stretch panels, and TPR knee bracing for aggressive riding.",
    sizes: ["28", "30", "32", "34", "36"],
    image: "/images/products/pants.jpg",
    images: ["/images/products/pants.jpg"],
    specs: { Material: "Polyester/Nylon", Closure: "Ratchet buckle", Features: "Pre-curved legs, stretch panels" },
    featured: true,
  },
  {
    id: "5",
    name: "Airline Gloves",
    brand: "Fox Racing",
    price: 34.99,
    category: "gear",
    description: "Ultra-lightweight riding gloves with single-layer Clarino palm, perforated finger gussets, and silicone fingertip grip.",
    sizes: ["S", "M", "L", "XL"],
    image: "/images/products/gloves.jpg",
    images: ["/images/products/gloves.jpg"],
    specs: { Material: "Clarino / Mesh", Closure: "Slip-on", Features: "Perforated gussets, silicone grip" },
    featured: true,
  },
  {
    id: "6",
    name: "Tech 10 Boots",
    brand: "Alpinestars",
    price: 599.99,
    category: "gear",
    description: "The benchmark in motocross boot technology. Features a dual-pivot system, TPU shin plate, and replaceable sole for long-lasting performance.",
    sizes: ["8", "9", "10", "11", "12"],
    image: "/images/products/boots.jpg",
    images: ["/images/products/boots.jpg"],
    specs: { Material: "Microfiber / TPU", Sole: "Replaceable dual-compound", Features: "Dual pivot, buckle system" },
    featured: true,
  },
  {
    id: "7",
    name: "5.5 Chest Protector",
    brand: "Leatt",
    price: 249.99,
    category: "protection",
    description: "CE-certified hard shell chest protector with 3D impact foam, ventilated design, and adjustable shoulder/waist straps.",
    sizes: ["S/M", "L/XL", "XXL"],
    image: "/images/products/protector.jpg",
    images: ["/images/products/protector.jpg"],
    specs: { Certification: "CE Level 1", Material: "Hard shell + 3D foam", Coverage: "Chest, back, shoulders" },
    featured: true,
  },
  {
    id: "8",
    name: "GP SE Knee Guards",
    brand: "Troy Lee Designs",
    price: 89.99,
    category: "protection",
    description: "Lightweight slip-on knee guards with D3O impact protection, perforated neoprene body, and silicone grip panels.",
    sizes: ["S/M", "L/XL"],
    image: "/images/products/knee-guards.jpg",
    images: ["/images/products/knee-guards.jpg"],
    specs: { Protection: "D3O", Material: "Perforated neoprene", Closure: "Slip-on with silicone grip" },
    featured: true,
  },
  {
    id: "9",
    name: "Contour Handlebar",
    brand: "ProTaper",
    price: 74.99,
    category: "parts",
    description: "7075-T6 aluminum handlebar with variable wall thickness for optimized strength-to-weight ratio. Available in multiple bends.",
    image: "/images/products/handlebar.jpg",
    images: ["/images/products/handlebar.jpg"],
    specs: { Material: "7075-T6 Aluminum", Diameter: "1-1/8 inch (28.6mm)", Finish: "Anodized" },
  },
  {
    id: "10",
    name: "Pillow Top Grips",
    brand: "ProTaper",
    price: 19.99,
    category: "parts",
    description: "Dual-compound grip with tacky outer layer and vibration-damping inner core. Half-waffle pattern for superior traction.",
    image: "/images/products/grips.jpg",
    images: ["/images/products/grips.jpg"],
    specs: { Material: "Dual-compound rubber", Pattern: "Half-waffle", Compatibility: "Universal" },
  },
  {
    id: "11",
    name: "Ultralight 520 Chain",
    brand: "ProTaper",
    price: 129.99,
    category: "parts",
    description: "High-performance 520 pitch racing chain with gold chromoly plates, seamless rollers, and clip-type master link.",
    image: "/images/products/chain.jpg",
    images: ["/images/products/chain.jpg"],
    specs: { Pitch: "520", Plates: "Chromoly", Links: "120", "Tensile Strength": "8,800 lbs" },
  },
  {
    id: "12",
    name: "Rear Sprocket 48T",
    brand: "ProTaper",
    price: 64.99,
    category: "parts",
    description: "CNC-machined 7075-T6 aluminum rear sprocket. Hard anodized finish for extended wear life and precision fitment.",
    image: "/images/products/sprocket.jpg",
    images: ["/images/products/sprocket.jpg"],
    specs: { Material: "7075-T6 Aluminum", Teeth: "48", Finish: "Hard anodized", Fitment: "Honda/Yamaha/KTM" },
  },
  {
    id: "13",
    name: "Towers Moto Lifestyle Tee",
    brand: "Towers",
    price: 39.99,
    category: "lifestyle",
    description: "Premium cotton tee with Towers moto graphic. Relaxed fit, ribbed collar, and screen-printed artwork.",
    sizes: ["S", "M", "L", "XL", "XXL"],
    image: "/images/products/tee.jpg",
    images: ["/images/products/tee.jpg"],
    specs: { Material: "100% Ring-spun Cotton", Weight: "6.1 oz", Fit: "Relaxed" },
  },
  {
    id: "14",
    name: "Towers Snapback Hat",
    brand: "Towers",
    price: 29.99,
    category: "lifestyle",
    description: "Structured snapback cap with embroidered Towers logo. Moisture-wicking sweatband and adjustable snap closure.",
    image: "/images/products/snapback.jpg",
    images: ["/images/products/snapback.jpg"],
    specs: { Material: "Cotton/Poly blend", Closure: "Snapback", Fit: "One size" },
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(id: string, limit = 4): Product[] {
  const product = getProduct(id);
  if (!product) return [];
  return products.filter((p) => p.id !== id && p.category === product.category).slice(0, limit);
}
