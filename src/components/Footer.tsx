import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-900 bg-stone-950 text-stone-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand identity */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold tracking-wider text-amber-500">THE ARCHIPELAGO CLUB</p>
          <p className="text-xs text-stone-500 mt-1">Premium Coastal Spaces for Digital Pioneers.</p>
        </div>

        {/* Dynamic Legal and Social Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
          <Link href="/legal/privacy" className="hover:text-stone-200 transition-colors">Privacy Policy</Link>
          <Link href="/legal/terms" className="hover:text-stone-200 transition-colors">Terms of Service</Link>
          <Link href="#contact" className="hover:text-stone-200 transition-colors">Contact Support</Link>
        </div>

        {/* Copyright notice */}
        <div className="text-xs text-stone-500 text-center md:text-right">
          <p>&copy; {currentYear} The Archipelago Club. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}