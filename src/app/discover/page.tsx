'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { PropertyCard } from '@/components/property/PropertyCard';
import { mockProperties as properties } from '@/lib/data/properties';
import { Button } from '@/components/ui/button';

const vibes = ['All', 'Coastal', 'Forest', 'Heritage', 'Urban', 'Mountain', 'Desert'];
const propertyTypes = ['All', 'Villa', 'Homestay', 'Resort', 'Urban', 'Heritage'];

export default function DiscoverPage() {
  const [selectedVibe, setSelectedVibe] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const filteredProperties = properties.filter(property => {
    const vibeMatch = selectedVibe === 'All' || property.vibe.includes(selectedVibe.toLowerCase());
    const typeMatch = selectedType === 'All' || property.propertyType === selectedType.toLowerCase();
    return vibeMatch && typeMatch;
  });

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E2A24] to-[#1E2A24]/95">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          {/* Decorative Star */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-2xl bg-[#C5A46D]/30 scale-150" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAF8F4] mb-8 tracking-[-0.02em] font-normal">
            Discover Your Perfect Stay
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-[#FAF8F4]/90 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Explore our curated collection of boutique properties, each carefully selected
            for their unique character, exceptional design, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-20 z-40 bg-[#FAF8F4]/98 backdrop-blur-xl border-b border-[#E8DCC5]/30 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-8">
          {/* Vibe Filters */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1E2A24]/60 mb-4">Filter by Vibe</h3>
            <div className="flex flex-wrap gap-3">
              {vibes.map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setSelectedVibe(vibe)}
                  className={`px-6 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                    selectedVibe === vibe
                      ? 'bg-[#1E2A24] text-[#FAF8F4] shadow-lg'
                      : 'bg-white border border-[#E8DCC5]/40 text-[#1E2A24] hover:border-[#C5A46D] hover:text-[#C5A46D]'
                  }`}
                >
                  {vibe}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Filters */}
          <div>
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-[#1E2A24]/60 mb-4">Property Type</h3>
            <div className="flex flex-wrap gap-3">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                    selectedType === type
                      ? 'bg-[#1E2A24] text-[#FAF8F4] shadow-lg'
                      : 'bg-white border border-[#E8DCC5]/40 text-[#1E2A24] hover:border-[#C5A46D] hover:text-[#C5A46D]'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 pt-6 border-t border-[#E8DCC5]/30">
            <p className="text-sm text-[#1E2A24]/70 font-light">
              Showing <span className="font-semibold text-[#C5A46D]">{filteredProperties.length}</span> {filteredProperties.length === 1 ? 'property' : 'properties'}
            </p>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="mb-8">
                <svg className="w-20 h-20 text-[#E8DCC5] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif text-[#1E2A24] mb-4">No properties found</h3>
              <p className="text-[#1E2A24]/70 mb-8 max-w-md mx-auto">
                Try adjusting your filters to discover more amazing properties
              </p>
              <Button
                onClick={() => {
                  setSelectedVibe('All');
                  setSelectedType('All');
                }}
                className="bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] px-10 py-6 text-xs tracking-[0.15em] uppercase"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
