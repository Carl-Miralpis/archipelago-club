import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Load Google Font optimally
const inter = Inter({ subsets: ["latin"] });

// On-page SEO Metadata
export const metadata: Metadata = {
  title: "The Archipelago Club | Modern Co-working & Cafe in Calabarzon",
  description: "Join the exclusive waitlist for Calabarzon's premier smart-cafe and co-working space. Fast Wi-Fi, premium coffee, and a community of innovators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}