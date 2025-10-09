import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function ClubSection() {
  return (
    <section className="py-40 bg-[#1E2A24] text-[#FAF8F4] relative overflow-hidden">
      {/* Sophisticated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="luxe-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="1" fill="#C5A46D" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#luxe-grid)" />
        </svg>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A24] via-transparent to-[#1E2A24]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/30 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Luxury Badge */}
        <div className="mb-12 flex justify-center">
          <div className="relative">
            <svg className="w-20 h-20 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
            </svg>
            <div className="absolute inset-0 blur-3xl bg-[#C5A46D]/30 scale-150" />
          </div>
        </div>

        {/* Heading - Elevated */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-8 tracking-[-0.02em]">
          Join BoutiqLife Club
        </h2>

        {/* Divider */}
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-10" />

        {/* Subheading */}
        <p className="text-2xl md:text-3xl lg:text-4xl font-decorative text-[#E8DCC5] italic mb-12 tracking-wide">
          An invitation to experience more
        </p>

        {/* Description */}
        <p className="text-lg md:text-xl text-[#FAF8F4]/90 mb-20 leading-loose max-w-3xl mx-auto font-light tracking-wide">
          Exclusive access to curated experiences, member-only properties, and a community
          of discerning travelers who appreciate the art of authentic hospitality.
        </p>

        {/* Benefits Grid - Premium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 max-w-5xl mx-auto">
          <div className="space-y-6 group">
            <div className="w-20 h-20 border-2 border-[#C5A46D]/30 group-hover:border-[#C5A46D] flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <h3 className="font-serif text-2xl text-[#FAF8F4] tracking-tight">Exclusive Experiences</h3>
            <p className="text-[#FAF8F4]/85 leading-relaxed font-light tracking-wide">
              First access to limited properties and curated retreats
            </p>
          </div>

          <div className="space-y-6 group">
            <div className="w-20 h-20 border-2 border-[#C5A46D]/30 group-hover:border-[#C5A46D] flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <h3 className="font-serif text-2xl text-[#FAF8F4] tracking-tight">Private Community</h3>
            <p className="text-[#FAF8F4]/85 leading-relaxed font-light tracking-wide">
              Connect with like-minded travelers and property owners
            </p>
          </div>

          <div className="space-y-6 group">
            <div className="w-20 h-20 border-2 border-[#C5A46D]/30 group-hover:border-[#C5A46D] flex items-center justify-center mx-auto transition-all duration-500 group-hover:scale-110">
              <svg className="w-8 h-8 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <div className="w-12 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mx-auto opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <h3 className="font-serif text-2xl text-[#FAF8F4] tracking-tight">Member Perks</h3>
            <p className="text-[#FAF8F4]/85 leading-relaxed font-light tracking-wide">
              Special rates, concierge services, and invitation-only events
            </p>
          </div>
        </div>

        {/* CTA - Elevated */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
          <Link href="/club">
            <Button
              className="bg-[#C5A46D] text-[#1E2A24] hover:bg-[#E8DCC5] hover:text-[#1E2A24] transition-all duration-500 px-14 py-7 text-xs font-semibold tracking-[0.15em] uppercase shadow-2xl hover:shadow-[#C5A46D]/20 hover:scale-105 border-2 border-[#C5A46D]"
            >
              Become a Member
            </Button>
          </Link>
          <Link href="/club#benefits">
            <Button
              variant="outline"
              className="border-2 border-[#E8DCC5]/50 text-[#E8DCC5] hover:bg-[#E8DCC5] hover:text-[#1E2A24] transition-all duration-500 px-14 py-7 text-xs font-semibold tracking-[0.15em] uppercase backdrop-blur-sm hover:scale-105"
            >
              Learn More
            </Button>
          </Link>
        </div>

        {/* Pricing Hint - Refined */}
        <p className="text-[#C5A46D] text-sm font-medium tracking-[0.15em]">
          STARTING AT ₹15,000/YEAR
        </p>
      </div>
    </section>
  );
}
