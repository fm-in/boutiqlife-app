'use client';

import { use } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { properties } from '@/lib/data/properties';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { PropertyCard } from '@/components/property/PropertyCard';

export default function PropertyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const property = properties.find(p => p.slug === slug);

  if (!property) {
    return (
      <div className="min-h-screen bg-[#FAF8F4] flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-serif text-[#1E2A24] mb-4">Property Not Found</h1>
          <Link href="/discover">
            <Button className="bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D]">
              Browse All Properties
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProperties = properties
    .filter(p => p.id !== property.id && p.vibe.some(v => property.vibe.includes(v)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Gallery */}
      <section className="pt-24">
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-4 gap-4 h-[600px]">
            {/* Main Image */}
            <div className="col-span-4 lg:col-span-2 relative overflow-hidden group">
              <Image
                src={property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
            </div>
            {/* Secondary Images */}
            <div className="hidden lg:block col-span-1 relative overflow-hidden group">
              <Image
                src={property.images[1] || property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="hidden lg:block col-span-1 relative overflow-hidden group">
              <Image
                src={property.images[2] || property.images[0]}
                alt={property.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Property Info */}
      <section className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-6 h-6 text-[#C5A46D]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm tracking-[0.12em] uppercase text-[#1E2A24]/70 font-medium">
                    {property.location.city}, {property.location.state}, {property.location.country}
                  </span>
                </div>

                <h1 className="text-5xl md:text-6xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
                  {property.name}
                </h1>

                <p className="text-2xl font-decorative italic text-[#C5A46D] mb-8">
                  {property.tagline}
                </p>

                <div className="w-20 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-8" />

                <p className="text-lg text-[#1E2A24]/80 leading-loose font-light">
                  {property.description}
                </p>
              </div>

              {/* Vibe Tags */}
              <div className="mb-12">
                <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1E2A24]/60 mb-4">The Vibe</h3>
                <div className="flex flex-wrap gap-3">
                  {property.vibe.map((vibe) => (
                    <span
                      key={vibe}
                      className="px-5 py-2.5 bg-[#E8DCC5]/40 border border-[#E8DCC5] text-[#1E2A24] text-xs font-semibold tracking-[0.12em] uppercase"
                    >
                      {vibe}
                    </span>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-12">
                <h3 className="text-2xl font-serif text-[#1E2A24] mb-6">Amenities & Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#1E2A24]/80 font-light">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white border border-[#E8DCC5]/30 p-8 shadow-lg">
                <div className="mb-8">
                  <p className="text-sm text-[#1E2A24]/60 mb-2 tracking-[0.15em] uppercase">Starting from</p>
                  <p className="text-4xl font-serif text-[#C5A46D] mb-1">{property.priceRange}</p>
                  <p className="text-sm text-[#1E2A24]/60 font-light">per night</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div>
                    <label className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2 block">Check In</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-[#E8DCC5]/40 text-[#1E2A24] text-sm focus:border-[#C5A46D] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2 block">Check Out</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-[#E8DCC5]/40 text-[#1E2A24] text-sm focus:border-[#C5A46D] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2 block">Guests</label>
                    <select className="w-full px-4 py-3 border border-[#E8DCC5]/40 text-[#1E2A24] text-sm focus:border-[#C5A46D] focus:outline-none transition-colors">
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>
                </div>

                <Button className="w-full bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] py-6 text-xs tracking-[0.15em] uppercase font-semibold">
                  Check Availability
                </Button>

                <p className="text-xs text-[#1E2A24]/60 text-center mt-6 font-light">
                  You won't be charged yet
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <section className="py-20 bg-[#E8DCC5]/30">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
                Similar Properties
              </h2>
              <p className="text-lg text-[#1E2A24]/70 font-light">
                Discover more stays with a similar vibe
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {relatedProperties.map((relatedProperty) => (
                <PropertyCard key={relatedProperty.id} property={relatedProperty} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
