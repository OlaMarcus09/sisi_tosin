import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Setup the Fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// 2. The Metadata (This controls what shows on WhatsApp/Google)
export const metadata: Metadata = {
  title: "Sisi Tosin | Actor, Influencer & Fashion Brand",
  description: "Official website of Sisi Tosin. Shop custom wears, book for acting roles, and view exclusive content.",
  openGraph: {
    title: "Sisi Tosin | The Holiday Edit",
    description: "Shop custom wears and view the exclusive holiday collection.",
    url: "https://sisitosin.vercel.app",
    siteName: "Sisi Tosin Brand",
    images: [
      {
        url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop", // This ensures her photo shows on WhatsApp links
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
