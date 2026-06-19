import { notFound } from "next/navigation";
import { legalData } from "../../../components/legalData";
import Link from "next/link";

interface LegalPageProps {
  params: {
    slug: string;
  };
}

// Generate static pages at build time for optimal speed/SEO
export function generateStaticParams() {
  return [{ slug: "privacy" }, { slug: "terms" }];
}

export default function LegalPage({ params }: LegalPageProps) {
  const content = legalData[params.slug];

  // If a user types a random URL like /legal/banana, trigger Next.js 404 error page
  if (!content) {
    notFound();
  }

  return (
    <div className="bg-stone-950 min-h-[75vh] pt-32 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation anchor */}
        <Link 
          href="/" 
          className="inline-flex items-center text-xs font-mono text-amber-500/80 hover:text-amber-400 gap-1.5 mb-8 group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span> BACK TO HOME
        </Link>

        {/* Article Header */}
        <header className="border-b border-stone-900 pb-8 mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-stone-100 sm:text-4xl">
            {content.title}
          </h1>
          <p className="text-xs font-mono text-stone-500 mt-2">
            LAST MODIFIED // {content.lastUpdated}
          </p>
        </header>

        {/* Dynamic Section Mapping */}
        <article className="space-y-10">
          {content.sections.map((section, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-lg font-semibold text-stone-200">
                {section.heading}
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed font-sans">
                {section.body}
              </p>
            </div>
          ))}
        </article>

      </div>
    </div>
  );
}