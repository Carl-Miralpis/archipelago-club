import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-stone-950 min-h-[75vh] flex items-center justify-center relative overflow-hidden">
      {/* Background ambient grid design detail */}
      <div className="absolute inset-0 bg-[radial-gradient(30rem_30rem_at_center,theme(colors.stone.900),theme(colors.stone.950))]" aria-hidden="true" />
      <div className="absolute h-64 w-64 rounded-full bg-red-500/5 blur-[100px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

      <div className="max-w-md w-full mx-auto px-6 text-center space-y-6 relative z-10 font-mono">
        {/* Terminal Error Header */}
        <div className="inline-flex items-center gap-2 rounded border border-red-500/20 bg-red-500/5 px-3 py-1 text-xs text-red-400">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
          STATUS // 404_PAGE_NOT_FOUND
        </div>

        {/* Big Error Display */}
        <div className="space-y-2">
          <h1 className="text-7xl font-bold tracking-tighter text-stone-200">
            404
          </h1>
          <p className="text-xs uppercase tracking-widest text-stone-500">
            Route Resolve Timeout
          </p>
        </div>

        {/* Context Copy */}
        <p className="text-sm font-sans text-stone-400 leading-relaxed max-w-xs mx-auto">
          The spatial node coordinates you requested are outside club parameters or do not exist in our network array.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <Link 
            href="/" 
            className="inline-flex items-center justify-center rounded border border-stone-800 bg-stone-900/50 px-5 py-2.5 text-xs font-semibold tracking-wider text-amber-500 hover:text-amber-400 hover:border-amber-500/30 active:scale-[0.98] transition-all"
          >
            RETURN_TO_HOME_ARRAY →
          </Link>
        </div>
      </div>
    </div>
  );
}