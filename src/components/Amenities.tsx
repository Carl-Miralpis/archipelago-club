export default function Amenities() {
  const luxuryAmenities = [
    {
      id: "01",
      title: "Gigabit Fiber Arrays",
      description: "Dual-provider synchronous enterprise lines with seamless automated cellular failovers to keep you permanently online.",
      tag: "Connectivity"
    },
    {
      id: "02",
      title: "Acoustic Seclusion Pods",
      description: "Sound-isolated spatial environments optimized with studio-grade soundproofing for crisp virtual streaming and calls.",
      tag: "Privacy"
    },
    {
      id: "03",
      title: "Micro-Lot Roastery",
      description: "Bespoke single-origin coffee selections rotated weekly and roasted in-house, dialed explicitly for cognitive focus.",
      tag: "Artisan Craft"
    },
    {
      id: "04",
      title: "Ergonomic Sanctuaries",
      description: "Adaptive smart lighting, automated climate zoning, and elite physical support seating designed for extended sessions.",
      tag: "Wellness"
    },
    {
      id: "05",
      title: "Coastal Access Lounges",
      description: "Open-air architectural decks overlooking pristine waters, built for clear reflection between deep sprints.",
      tag: "Lifestyle"
    },
    {
      id: "06",
      title: "Member Crypts & Vaults",
      description: "Secure, climate-controlled equipment lockers and biometric hardware storage facilities for your gear.",
      tag: "Security"
    }
  ];

  return (
    <section id="amenities" className="bg-stone-950 py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
            Engineered Infrastructure
          </h2>
          <p className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
            Club Assets & Amenities
          </p>
          <div className="h-0.5 w-12 bg-amber-500 mx-auto mt-4" />
          <p className="text-stone-400 text-sm sm:text-base max-w-2xl mx-auto pt-2">
            Every square inch of our coastal sanctuaries is designed to maximize focus, comfort, and baseline productivity for digital pioneers.
          </p>
        </div>

        {/* Dynamic Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {luxuryAmenities.map((amenity) => (
            <div 
              key={amenity.id}
              className="group relative rounded border border-stone-900 bg-stone-900/20 p-6 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 hover:bg-stone-900/40 flex flex-col justify-between"
            >
              <div>
                {/* Upper card tracking tag and index indicators */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-stone-500 px-2 py-0.5 bg-stone-900 border border-stone-800 rounded">
                    {amenity.tag}
                  </span>
                  <span className="font-mono text-xs text-amber-500/50 group-hover:text-amber-500 transition-colors">
                    //{amenity.id}
                  </span>
                </div>

                {/* Content Elements */}
                <h3 className="text-lg font-semibold text-stone-200 group-hover:text-amber-400 transition-colors">
                  {amenity.title}
                </h3>
                <p className="mt-3 text-sm text-stone-400 leading-relaxed">
                  {amenity.description}
                </p>
              </div>

              {/* Bottom decorative border design detail that activates on hover */}
              <div className="w-0 h-[1px] bg-gradient-to-r from-amber-500 to-transparent mt-6 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}