export default function Locations() {
  const chapters = [
    {
      province: "Cavite",
      spot: "Tagaytay Ridge",
      vibe: "High-Altitude Focus",
      specs: "Panoramic crater views, cool climate, optimized indoor-outdoor hot desks, and hyper-isolated meeting capsules.",
      status: "Presale Q3 2026"
    },
    {
      province: "Laguna",
      spot: "Caliraya Lakefront",
      vibe: "Lakeside Sanctuary",
      specs: "Waterfront desks, specialized solar-powered tech docks, team retreat villas, and high-gain satellite backup grids.",
      status: "Opening Q4 2026"
    },
    {
      province: "Batangas",
      spot: "Anasao Coast",
      vibe: "Marine Work-Lounge",
      specs: "Beachfront workspaces, ocean-view call booths, saltwater infinity pool access, and micro-lot cold brew bars.",
      status: "Developing 2027"
    }
  ];

  return (
    <section id="locations" className="bg-stone-950 py-24 border-t border-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Sticky Description Context */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-500">
              Strategic Geography
            </h2>
            <p className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
              Founding Chapters
            </p>
            <p className="text-stone-400 text-sm leading-relaxed pt-2">
              We choose environments that actively counteract digital burnout. Our initial locations across Calabarzon blend deep technical infrastructure with remarkable natural backdrops.
            </p>
          </div>

          {/* Right Column - Scrolling Spatial Destination Cards */}
          <div className="lg:col-span-8 space-y-6">
            {chapters.map((chapter, index) => (
              <div 
                key={index}
                className="group relative rounded border border-stone-900 bg-stone-900/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:border-stone-800 hover:bg-stone-900/30 grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
                {/* Meta details */}
                <div className="md:col-span-4 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-500/80 bg-amber-500/5 px-2 py-0.5 border border-amber-500/10 rounded">
                    {chapter.status}
                  </span>
                  <h3 className="text-xl font-bold text-stone-100 pt-2 group-hover:text-amber-400 transition-colors">
                    {chapter.province}
                  </h3>
                  <p className="text-xs font-mono text-stone-500">
                    {chapter.spot} // {chapter.vibe}
                  </p>
                </div>

                {/* Technical specs copy */}
                <div className="md:col-span-8 border-t md:border-t-0 md:border-l border-stone-900 pt-4 md:pt-0 md:pl-6">
                  <p className="text-sm text-stone-400 leading-relaxed">
                    {chapter.specs}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}