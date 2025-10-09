'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[2000ms]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=2000&q=90')`,
            transform: loaded ? 'scale(1)' : 'scale(1.1)',
          }}
        >
          {/* Sophisticated Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E2A24]/70 via-[#1E2A24]/40 to-[#1E2A24]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E2A24]/30 via-transparent to-[#1E2A24]/30" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C5A46D]/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 text-center flex flex-col items-center justify-center min-h-screen">
        <div className="flex-1 flex flex-col items-center justify-center max-w-5xl">
          {/* Luxury Badge */}
          <div
            className={`mb-12 flex justify-center transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="relative">
              <svg
                className="w-16 h-16 text-[#C5A46D] animate-pulse"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-2xl bg-[#C5A46D]/20" />
            </div>
          </div>

          {/* Main Headline - Ultra Luxury Typography */}
          <h1
            className={`font-serif text-[#FAF8F4] mb-8 leading-[0.95] tracking-[-0.03em] transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
            }}
          >
            For those who
            <br />
            <span className="italic font-decorative text-[#FAF8F4] tracking-[-0.01em]">
              never stay ordinary
            </span>
          </h1>

          {/* Divider */}
          <div
            className={`w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-10 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            }`}
          />

          {/* Tagline */}
          <p
            className={`text-2xl sm:text-3xl md:text-4xl font-decorative italic text-[#FAF8F4] mb-12 tracking-wide transition-all duration-1000 delay-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Where every stay tells a story
          </p>

          {/* Description */}
          <p
            className={`text-base sm:text-lg md:text-xl text-[#FAF8F4]/90 mb-16 max-w-3xl mx-auto leading-relaxed font-light tracking-wide transition-all duration-1000 delay-900 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Discover curated boutique properties and design-driven stays worldwide.
            <br className="hidden sm:block" />
            Handpicked for authenticity, crafted for experience, celebrated for their stories.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-24 transition-all duration-1000 delay-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <Link href="/discover">
              <Button
                className="bg-[#FAF8F4] text-[#1E2A24] hover:bg-[#C5A46D] hover:text-[#1E2A24] transition-all duration-500 px-12 py-7 text-xs font-semibold tracking-[0.15em] uppercase shadow-2xl hover:shadow-[#C5A46D]/20 hover:scale-105 border-2 border-[#FAF8F4]"
              >
                Explore Properties
              </Button>
            </Link>
            <Link href="/club">
              <Button
                variant="outline"
                className="border-2 border-[#FAF8F4] text-[#FAF8F4] hover:bg-[#FAF8F4] hover:text-[#1E2A24] transition-all duration-500 px-12 py-7 text-xs font-semibold tracking-[0.15em] uppercase shadow-2xl backdrop-blur-md hover:scale-105"
              >
                Join The Club
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator - Now separate from main content */}
        <div
          className={`flex flex-col items-center gap-3 pb-8 transition-all duration-1000 delay-1200 ${
            loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-[#FAF8F4] text-xs tracking-[0.2em] uppercase font-medium">Scroll to explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-[#C5A46D] to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}
