import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"; // Import the brand new Footer component

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "The Archipelago Club | Exclusive Coastal Coworking",
  description: "An elite sanctuary for remote innovators, digital pioneers, and global creators. Discover the ultimate human-in-the-loop workspace.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-stone-950 text-stone-100 antialiased min-h-screen flex flex-col`}>
        <Navbar />
        {/* The flex-grow class ensures the content pushes the footer to the bottom on short pages */}
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}