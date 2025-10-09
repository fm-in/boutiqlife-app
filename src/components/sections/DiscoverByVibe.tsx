import Link from 'next/link';
import Image from 'next/image';

const vibes = [
  {
    name: 'Coastal',
    description: 'Where the sea meets serenity',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
    slug: 'coastal',
  },
  {
    name: 'Forest',
    description: 'Into the wild, in comfort',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800',
    slug: 'forest',
  },
  {
    name: 'Heritage',
    description: 'Stories etched in architecture',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=800',
    slug: 'heritage',
  },
  {
    name: 'Urban',
    description: 'Sanctuaries in the city',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    slug: 'urban',
  },
];

export function DiscoverByVibe() {
  return (
    <section className="py-32 bg-[#E8DCC5]">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header - Elevated */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-8" />
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
            Discover by Vibe
          </h2>
          <p className="text-lg md:text-xl text-[#1E2A24]/70 font-light max-w-2xl mx-auto leading-relaxed tracking-wide">
            Find your perfect escape through the mood that calls to you
          </p>
        </div>

        {/* Vibe Grid - Enhanced */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {vibes.map((vibe, index) => (
            <Link
              key={vibe.slug}
              href={`/discover?vibe=${vibe.slug}`}
              className="group relative overflow-hidden aspect-[3/4] transition-all duration-700 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={vibe.image}
                  alt={vibe.name}
                  fill
                  className="object-cover transition-all duration-[1200ms] group-hover:scale-110"
                />
                {/* Sophisticated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/95 via-[#1E2A24]/60 to-[#1E2A24]/30 group-hover:from-[#1E2A24]/80 group-hover:via-[#1E2A24]/40 transition-all duration-700" />
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border border-[#C5A46D]/0 group-hover:border-[#C5A46D]/30 transition-all duration-700" />

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <div className="transform transition-all duration-700 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <svg
                      className="w-10 h-10 text-[#C5A46D] relative z-10"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                    </svg>
                    <div className="absolute inset-0 blur-xl bg-[#C5A46D]/30 scale-150" />
                  </div>

                  {/* Decorative Line */}
                  <div className="w-16 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-6 transition-all duration-700 group-hover:w-24" />

                  {/* Title */}
                  <h3 className="text-4xl font-serif text-[#FAF8F4] mb-4 tracking-[-0.01em] leading-tight">
                    {vibe.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[#E8DCC5] text-base font-decorative italic opacity-0 group-hover:opacity-100 transition-all duration-700 mb-6 tracking-wide leading-relaxed">
                    {vibe.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-[#C5A46D] text-xs font-bold uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-4 group-hover:translate-x-0">
                    <span>Explore</span>
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#C5A46D]/0 group-hover:border-[#C5A46D]/40 transition-all duration-700" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
