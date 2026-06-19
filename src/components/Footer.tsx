export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-8 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p>&copy; {new Date().getFullYear()} The Archipelago Club. All rights reserved.</p>
        <p className="mt-2">Calabarzon's premier smart-cafe and co-working space.</p>
      </div>
    </footer>
  );
}