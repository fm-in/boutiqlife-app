'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const membershipTiers = [
  {
    name: 'Explorer',
    price: '₹15,000',
    period: 'per year',
    description: 'Perfect for occasional travelers seeking curated experiences',
    features: [
      'Access to member-only properties',
      '10% discount on all bookings',
      'Priority customer support',
      'Quarterly travel inspiration newsletter',
      'Early access to new listings',
      'Complimentary property guidebooks'
    ],
    cta: 'Start Exploring',
    highlighted: false
  },
  {
    name: 'Curator',
    price: '₹35,000',
    period: 'per year',
    description: 'For discerning travelers who value exclusive access',
    features: [
      'Everything in Explorer',
      '15% discount on all bookings',
      'Exclusive access to premium properties',
      'Personalized concierge service',
      'Complimentary room upgrades (subject to availability)',
      'Member-only events and retreats',
      'Dedicated account manager',
      'Partner benefits (restaurants, spas, experiences)'
    ],
    cta: 'Become a Curator',
    highlighted: true
  },
  {
    name: 'Luminary',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'Bespoke membership for those who expect nothing less than extraordinary',
    features: [
      'Everything in Curator',
      'Custom discount structure',
      'Unlimited property access',
      'Personal travel curator',
      'Guaranteed room upgrades',
      'Private property viewings',
      'Invitation-only experiences',
      'Global partner network access',
      'Annual hosted retreat'
    ],
    cta: 'Contact Us',
    highlighted: false
  }
];

const perks = [
  {
    icon: '🌟',
    title: 'Exclusive Properties',
    description: 'Access to hidden gems and member-only listings not available to the public'
  },
  {
    icon: '💎',
    title: 'Curated Experiences',
    description: 'Handpicked local experiences, from private chef dinners to cultural immersions'
  },
  {
    icon: '🤝',
    title: 'Community',
    description: 'Connect with like-minded travelers through exclusive events and forums'
  },
  {
    icon: '✨',
    title: 'White-Glove Service',
    description: 'Personalized support from our dedicated concierge team, 24/7'
  }
];

export default function ClubPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E2A24] to-[#1E2A24]/95 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="club-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#C5A46D" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#club-grid)" />
          </svg>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg className="w-20 h-20 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-3xl bg-[#C5A46D]/30 scale-150" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAF8F4] mb-8 tracking-[-0.02em] font-normal">
            The BoutiqLife Club
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-10" />

          <p className="text-2xl md:text-3xl lg:text-4xl font-decorative text-[#FAF8F4] italic mb-12 tracking-wide">
            Where travel becomes an art form
          </p>

          <p className="text-lg md:text-xl text-[#FAF8F4]/90 max-w-3xl mx-auto font-light leading-loose tracking-wide">
            Join a community of discerning travelers who appreciate authenticity, design, and exceptional hospitality.
            Our membership unlocks a world of curated stays and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              Choose Your Membership
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light max-w-2xl mx-auto">
              Select the tier that matches your travel style and unlock exclusive benefits
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {membershipTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative bg-white border-2 p-10 transition-all duration-500 hover:-translate-y-2 ${
                  tier.highlighted
                    ? 'border-[#C5A46D] shadow-[0_24px_48px_-12px_rgba(197,164,109,0.18)] scale-105'
                    : 'border-[#E8DCC5]/30 hover:border-[#C5A46D]/50 shadow-lg'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#C5A46D] text-[#1E2A24] px-6 py-2 text-xs font-bold tracking-[0.2em] uppercase">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-serif text-[#1E2A24] mb-3">{tier.name}</h3>
                  <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-6" />
                  <p className="text-[#1E2A24]/70 font-light text-sm mb-6 leading-relaxed">
                    {tier.description}
                  </p>
                  <div className="mb-2">
                    <span className="text-5xl font-serif text-[#C5A46D]">{tier.price}</span>
                  </div>
                  <p className="text-sm text-[#1E2A24]/60 font-light tracking-wide">{tier.period}</p>
                </div>

                <ul className="space-y-4 mb-10">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#C5A46D] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[#1E2A24]/80 text-sm font-light leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-500 ${
                    tier.highlighted
                      ? 'bg-[#C5A46D] text-[#1E2A24] hover:bg-[#1E2A24] hover:text-[#FAF8F4]'
                      : 'bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24]'
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-24 bg-[#E8DCC5]/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              Member Benefits
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light">
              Enjoy privileges designed for the modern traveler
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {perks.map((perk) => (
              <div key={perk.title} className="text-center">
                <div className="text-6xl mb-6">{perk.icon}</div>
                <h3 className="text-xl font-serif text-[#1E2A24] mb-4">{perk.title}</h3>
                <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            Ready to Elevate Your Travel?
          </h2>
          <p className="text-lg text-[#1E2A24]/70 font-light mb-12 leading-relaxed">
            Join thousands of discerning travelers who have discovered the art of staying extraordinary
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] px-12 py-7 text-xs tracking-[0.15em] uppercase font-semibold">
              Become a Member
            </Button>
            <Link href="/contact">
              <Button
                variant="outline"
                className="border-2 border-[#1E2A24] text-[#1E2A24] hover:bg-[#1E2A24] hover:text-[#FAF8F4] px-12 py-7 text-xs tracking-[0.15em] uppercase font-semibold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
