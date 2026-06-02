import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { ThemeProvider } from "@/context/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Towers | Motocross, ATV & UTV Parts",
  description:
    "Puerto Rico's premier motocross, ATV, and UTV parts shop. Premium gear, accessories, and components for every rider.",
  openGraph: {
    title: "Towers | Motocross, ATV & UTV Parts",
    description:
      "Puerto Rico's premier motocross, ATV, and UTV parts shop. Premium gear, accessories, and components for every rider.",
    type: "website",
    siteName: "Towers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Towers | Motocross, ATV & UTV Parts",
    description:
      "Puerto Rico's premier motocross, ATV, and UTV parts shop. Premium gear, accessories, and components for every rider.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100`}>
        <CartProvider>
          <ThemeProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </ThemeProvider>
        </CartProvider>
        <Analytics />
      </body>
    </html>
  );
}
