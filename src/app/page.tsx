import WaitlistForm from "../components/WaitlistForm";
import Amenities from "../components/Amenities"; // Import your beautiful new amenities section

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="waitlist" className="relative isolate overflow-hidden bg-stone-950 min-h-[85vh] flex items-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.stone.900),theme(colors.stone.950))]" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-[120px]" aria-hidden="true" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-3 py-1 text-xs font-medium text-amber-400 tracking-wide">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
                Opening Founding Chapter Q3 2026
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-stone-100 sm:text-6xl lg:text-5xl xl:text-6xl leading-[1.1]">
                Where elite code meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">coastal luxury.</span>
              </h1>
              
              <p className="text-base sm:text-lg leading-relaxed text-stone-400 max-w-2xl mx-auto lg:mx-0">
                The Archipelago Club is a private workspace network engineered for elite digital creators, systems architects, and remote teams. Merging lightning-fast enterprise arrays with bespoke specialty roasts and deep-focus layout structures along pristine Calabarzon coastlines.
              </p>
              
              <div className="pt-4 space-y-3">
                <WaitlistForm />
                <p className="text-xs text-stone-500">
                  🔒 Private waitlist active. Accepted members unlock 20% off workspace allocations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
              <div className="relative rounded border border-stone-800 bg-stone-900/40 p-6 sm:p-8 backdrop-blur-md shadow-2xl ring-1 ring-white/5 overflow-hidden">
                <div className="absolute top-0 right-0 border-b border-l border-stone-800 bg-stone-950 font-mono text-[10px] text-amber-500/70 px-3 py-1 uppercase tracking-widest">
                  System Spec
                </div>

                <h2 className="text-sm font-semibold text-stone-300 uppercase tracking-wider mb-6">FOUNDING INFRASTRUCTURE</h2>
                
                <ul className="space-y-4 font-mono text-xs text-stone-400">
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">01/</span>
                    <div>
                      <strong className="text-stone-200 block mb-0.5">Dual-Provider Redundancy</strong>
                      <span>1 Gbps synchronous fiber arrays with automated cellular failover.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">02/</span>
                    <div>
                      <strong className="text-stone-200 block mb-0.5">Acoustic Seclusion</strong>
                      <span>Sound-isolated spatial pods built for clear, studio-grade virtual streaming.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">03/</span>
                    <div>
                      <strong className="text-stone-200 block mb-0.5">Ergonomic Lounges</strong>
                      <span>Smart climate controllers, adaptive ambient lighting levels, and physical support seating.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold">04/</span>
                    <div>
                      <strong className="text-stone-200 block mb-0.5">Artisan Roastery</strong>
                      <span>Micro-lot single origins curated explicitly for cognitive clarity and peak performance.</span>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 border-t border-stone-800/60 pt-4 flex items-center justify-between font-mono text-[11px] text-stone-500">
                  <span>COORD // 14.15° N, 120.98° E</span>
                  <span className="text-amber-500/80">ALFA-v1.2</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <Amenities />
    </>
  );
}