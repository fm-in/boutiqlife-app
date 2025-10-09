'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const benefits = [
  {
    icon: '🎯',
    title: 'Targeted Exposure',
    description: 'Reach travelers who value design, authenticity, and unique experiences—not just amenities and price'
  },
  {
    icon: '✨',
    title: 'Premium Positioning',
    description: 'Your property featured alongside India\'s most distinctive stays, elevating its perceived value'
  },
  {
    icon: '📸',
    title: 'Professional Showcase',
    description: 'Complimentary professional photography and storytelling that captures your property\'s essence'
  },
  {
    icon: '🤝',
    title: 'Direct Bookings',
    description: 'Build direct relationships with guests, reducing dependency on high-commission OTAs'
  },
  {
    icon: '💬',
    title: 'Marketing Support',
    description: 'Featured placements in our journal, social media, and member communications'
  },
  {
    icon: '📊',
    title: 'Analytics & Insights',
    description: 'Detailed performance metrics and guest feedback to optimize your offering'
  }
];

const process = [
  {
    step: '01',
    title: 'Submit Your Property',
    description: 'Fill out our application form with details about your property, photos, and what makes it special'
  },
  {
    step: '02',
    title: 'Curation Review',
    description: 'Our team evaluates your property based on design, experience, location, and alignment with our values'
  },
  {
    step: '03',
    title: 'Onboarding',
    description: "Once approved, we'll schedule a photoshoot, create your property story, and set up your listing"
  },
  {
    step: '04',
    title: 'Go Live',
    description: 'Your property goes live on BoutiqLife and gets featured in our member communications'
  }
];

const criteria = [
  'Unique architectural or design character',
  'Authentic connection to local culture',
  'Commitment to guest experience',
  'Sustainable and responsible practices',
  'Maximum 20 rooms (intimacy matters)',
  'Independent ownership or small boutique chain'
];

export default function OwnersPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#1E2A24] to-[#1E2A24]/95 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="owners-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="1" fill="#C5A46D" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#owners-grid)" />
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
            List Your Property
            <br />
            <span className="italic font-decorative text-[#FAF8F4] font-normal">on BoutiqLife</span>
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#FAF8F4]/90 max-w-3xl mx-auto font-light leading-loose tracking-wide">
            Join a curated collection of India's most distinctive stays and connect with travelers who appreciate what makes your property special
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              Why Partner With Us
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light max-w-2xl mx-auto">
              More than a listing platform—a partnership that elevates your property
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="text-6xl mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-serif text-[#1E2A24] mb-4">{benefit.title}</h3>
                <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#E8DCC5]/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              How It Works
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light max-w-2xl mx-auto">
              A simple, transparent process from application to going live
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white p-8 border border-[#E8DCC5]/30 shadow-lg h-full">
                  <div className="text-6xl font-serif text-[#C5A46D]/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-serif text-[#1E2A24] mb-4">{item.title}</h3>
                  <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#C5A46D]/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Criteria Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1">
              <Image
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200"
                alt="Property Criteria"
                fill
                className="object-cover"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
                What We Look For
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-8" />
              <p className="text-[#1E2A24]/80 font-light leading-loose mb-8">
                We're selective about the properties we feature. Our curation process ensures that every stay on BoutiqLife offers something truly special.
              </p>

              <ul className="space-y-4">
                {criteria.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-[#C5A46D] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#1E2A24]/80 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-24 bg-[#E8DCC5]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              Apply Now
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light">
              Tell us about your property and start your journey with BoutiqLife
            </p>
          </div>

          <div className="bg-white p-10 border border-[#E8DCC5]/30 shadow-lg">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Property Name
                  </label>
                  <Input
                    type="text"
                    className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  Email Address
                </label>
                <Input
                  type="email"
                  className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  Property Location
                </label>
                <Input
                  type="text"
                  placeholder="City, State"
                  className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  Number of Rooms
                </label>
                <select className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D] focus:outline-none">
                  <option>1-5 rooms</option>
                  <option>6-10 rooms</option>
                  <option>11-15 rooms</option>
                  <option>16-20 rooms</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  Property Website (if available)
                </label>
                <Input
                  type="url"
                  placeholder="https://"
                  className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                  What makes your property unique?
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us your property's story..."
                  className="w-full px-5 py-4 border border-[#E8DCC5]/40 focus:border-[#C5A46D] focus:outline-none resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] py-6 text-xs tracking-[0.15em] uppercase font-semibold"
              >
                Submit Application
              </Button>

              <p className="text-xs text-[#1E2A24]/60 font-light text-center">
                We'll review your application and get back to you within 5-7 business days
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-12 text-center tracking-[-0.02em]">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-[#E8DCC5]/30 pb-6">
              <h3 className="text-xl font-serif text-[#1E2A24] mb-3">What does it cost to list?</h3>
              <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                We operate on a commission-only model. We only succeed when you do. No upfront fees, no monthly charges.
              </p>
            </div>

            <div className="border-b border-[#E8DCC5]/30 pb-6">
              <h3 className="text-xl font-serif text-[#1E2A24] mb-3">How long is the application process?</h3>
              <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                Typically 2-3 weeks from application to going live, including the curation review, photoshoot, and content creation.
              </p>
            </div>

            <div className="border-b border-[#E8DCC5]/30 pb-6">
              <h3 className="text-xl font-serif text-[#1E2A24] mb-3">Can I manage my own calendar and pricing?</h3>
              <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                Absolutely. You have full control over availability, pricing, and booking policies through our property owner dashboard.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-xl font-serif text-[#1E2A24] mb-3">What if my property is already on other platforms?</h3>
              <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                That's perfectly fine. Many of our partners are multi-listed. We focus on bringing you a different type of guest—one who values what makes your property unique.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
