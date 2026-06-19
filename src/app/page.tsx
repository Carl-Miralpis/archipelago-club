import WaitlistForm from "../components/WaitlistForm";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-emerald-50/50 via-white to-white">
      {/* Structural background details for visual flair */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-200 to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Direct, conversion-ready copy */}
          <div className="lg:col-span-7 max-w-2xl lg:max-w-none text-center lg:text-left">
            <span className="inline-flex items-center rounded-full bg-emerald-100/80 px-3 py-1 text-xs font-medium text-emerald-800 ring-1 ring-inset ring-emerald-600/10 mb-6">
              Opening Q3 2026 in Calabarzon
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-5xl xl:text-6xl">
              Where high-speed work meets <span className="text-emerald-600">artisan craft.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The Archipelago Club is Calabarzon's upcoming premium smart-cafe and co-working ecosystem. Engineered for digital professionals, remote squads, and creators demanding ultra-fast connectivity, ergonomic sanctuaries, and meticulous specialty roasts.
            </p>
            
            <div className="mt-10 flex flex-col items-center lg:items-start gap-y-4">
              <WaitlistForm />
              <p className="text-xs text-slate-500">
                🔒 Zero spam. Early access members unlock 20% off workspace bookings.
              </p>
            </div>
          </div>

          {/* Right Column: Visual placeholder container simulating Figma-spec placement */}
          <div className="lg:col-span-5 w-full max-w-md lg:max-w-none mx-auto">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-square rounded-2xl bg-slate-900/5 p-2 ring-1 ring-inset ring-slate-900/10 backdrop-blur-sm shadow-xl overflow-hidden flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-950 flex flex-col justify-between p-6 sm:p-8">
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">The Blueprint</p>
                    <h3 className="text-xl font-bold text-white">Smart Space Features</h3>
                  </div>
                  <span className="text-xs bg-white/10 text-white/90 px-2.5 py-1 rounded-md font-mono">v1.0-alpha</span>
                </div>
                
                <div className="space-y-3 font-mono text-xs text-slate-400 my-auto">
                  <p className="flex items-center gap-2"><span className="text-emerald-500">✓</span> 1Gbps Redundant Fiber Wi-Fi</p>
                  <p className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Soundproofed Pods for Virtual Meetings</p>
                  <p className="flex items-center gap-2"><span className="text-emerald-500">✓</span> IoT Smart-Lighting & Ergonomic Seating</p>
                  <p className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Specialty Coffee Bar & In-house Roastery</p>
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs text-slate-400">
                  <span>Location: Calabarzon, PH</span>
                  <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" /> Live Seat Tracker Active</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}