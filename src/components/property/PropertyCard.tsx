import Link from 'next/link';
import Image from 'next/image';
import { Property } from '@/lib/data/properties';
import { Card } from '@/components/ui/card';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <Link href={`/properties/${property.slug}`} className="group block">
      <Card className="overflow-hidden border border-[#E8DCC5]/20 shadow-[0_4px_24px_-2px_rgba(30,42,36,0.08)] hover:shadow-[0_24px_48px_-12px_rgba(197,164,109,0.18)] transition-all duration-700 bg-white hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={property.images[0]}
            alt={property.name}
            fill
            className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
          />

          {/* Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/90 via-[#1E2A24]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          {/* Subtle Vignette Always Visible */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/30 via-transparent to-transparent" />

          {/* Featured Badge - Refined */}
          {property.featured && (
            <div className="absolute top-6 right-6 bg-[#C5A46D]/95 backdrop-blur-md text-[#1E2A24] px-5 py-2 text-[10px] font-bold tracking-[0.2em] uppercase border border-[#C5A46D]">
              Featured
            </div>
          )}

          {/* Location - Elevated */}
          <div className="absolute bottom-6 left-6 right-6 flex items-center space-x-2 text-[#FAF8F4] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:translate-y-0">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium tracking-wide">{property.location.city}, {property.location.state}</span>
          </div>

          {/* Decorative Corner Accent */}
          <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#C5A46D]/0 group-hover:border-[#C5A46D]/50 transition-all duration-700" />
        </div>

        {/* Content - Enhanced Spacing */}
        <div className="p-8">
          {/* Property Name - Larger, More Elegant */}
          <h3 className="text-3xl font-serif text-[#1E2A24] mb-3 group-hover:text-[#C5A46D] transition-colors duration-500 leading-tight tracking-[-0.01em]">
            {property.name}
          </h3>

          {/* Tagline - More Refined */}
          <p className="text-sm font-decorative text-[#C5A46D] italic mb-5 tracking-wide">
            {property.tagline}
          </p>

          {/* Decorative Divider */}
          <div className="w-12 h-px bg-gradient-to-r from-[#E8DCC5] to-transparent mb-5" />

          {/* Description - Better Typography */}
          <p className="text-[#1E2A24]/70 text-sm leading-loose mb-6 line-clamp-2 font-light tracking-wide">
            {property.description}
          </p>

          {/* Vibe Tags - More Sophisticated */}
          <div className="flex flex-wrap gap-2 mb-6">
            {property.vibe.slice(0, 3).map((vibe) => (
              <span
                key={vibe}
                className="px-4 py-1.5 bg-[#FAF8F4] border border-[#E8DCC5]/40 text-[#1E2A24] text-[10px] font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:bg-[#E8DCC5]/30"
              >
                {vibe}
              </span>
            ))}
          </div>

          {/* Price & CTA - More Spacious */}
          <div className="flex items-center justify-between pt-6 border-t border-[#E8DCC5]/30">
            <div className="flex flex-col">
              <span className="text-[10px] text-[#1E2A24]/70 font-medium uppercase tracking-[0.15em] mb-1">Starting from</span>
              <span className="text-[#C5A46D] font-serif text-2xl tracking-tight">
                {property.priceRange}
              </span>
            </div>
            <div className="flex items-center text-[#1E2A24] text-xs font-semibold tracking-[0.1em] uppercase group-hover:text-[#C5A46D] transition-colors duration-500">
              <span>View Details</span>
              <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
