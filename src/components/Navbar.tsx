import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tighter text-slate-900">
          Archipelago<span className="text-emerald-600">Club.</span>
        </Link>
        
        <nav className="hidden md:flex gap-6 font-medium text-sm text-slate-600">
          <Link href="/about" className="hover:text-emerald-600 transition-colors">About</Link>
          <Link href="/amenities" className="hover:text-emerald-600 transition-colors">Amenities</Link>
          <Link href="/contact" className="hover:text-emerald-600 transition-colors">Contact</Link>
        </nav>

        {/* Mobile menu button (we will wire this up later) */}
        <button className="md:hidden p-2 text-slate-600" aria-label="Toggle navigation">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}