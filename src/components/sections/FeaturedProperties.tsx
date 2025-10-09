import { featuredProperties } from '@/lib/data/properties';
import { PropertyCard } from '@/components/property/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function FeaturedProperties() {
  return (
    <section className="py-32 bg-[#FAF8F4]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header - Luxury Grade */}
        <div className="text-center mb-24">
          <div className="inline-block mb-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-[#C5A46D]"></div>
              <div className="relative">
                <svg className="w-10 h-10 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                </svg>
                <div className="absolute inset-0 blur-xl bg-[#C5A46D]/20 scale-150" />
              </div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-[#C5A46D] to-[#C5A46D]"></div>
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            Curated for You
          </h2>
          <p className="text-lg md:text-xl text-[#1E2A24]/70 max-w-3xl mx-auto font-light leading-loose tracking-wide">
            Handpicked properties that embody the art of staying. Each one tells a unique story,
            offering experiences beyond accommodation.
          </p>
        </div>

        {/* Property Grid - More Spacious */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {/* View All CTA - Premium */}
        <div className="text-center">
          <Link href="/discover">
            <Button
              className="border-2 border-[#1E2A24] text-[#1E2A24] bg-transparent hover:bg-[#1E2A24] hover:text-[#FAF8F4] transition-all duration-500 px-14 py-7 text-xs font-semibold tracking-[0.15em] uppercase shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Discover All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
