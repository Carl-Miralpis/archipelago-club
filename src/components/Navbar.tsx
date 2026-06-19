"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "The Concept", href: "#concept" },
    { name: "Amenities", href: "#amenities" },
    { name: "Locations", href: "#locations" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-800 bg-stone-950/80 backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="text-xl font-bold tracking-widest text-amber-500 hover:text-amber-400 transition-colors"
        >
          THE ARCHIPELAGO CLUB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Desktop Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-stone-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#waitlist"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-stone-950 bg-amber-500 rounded-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/10"
          >
            Apply for Membership
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-stone-400 hover:text-white hover:bg-stone-900 focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )
          }
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div 
        className={`md:hidden transition-all duration-300 ease-in-out border-b border-stone-800 bg-stone-950 ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`} 
        id="mobile-menu"
      >
        <nav className="px-2 pt-2 pb-4 space-y-1 sm:px-3 flex flex-col" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium text-stone-300 hover:text-white hover:bg-stone-900 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 px-3">
            <Link
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-base font-medium text-stone-950 bg-amber-500 rounded-sm hover:bg-amber-400 transition-colors"
            >
              Apply for Membership
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}