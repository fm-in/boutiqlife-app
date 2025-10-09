'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const values = [
  {
    title: 'Authenticity',
    description: 'We celebrate properties that stay true to their roots, honoring local culture, architecture, and traditions'
  },
  {
    title: 'Curation',
    description: 'Each property is handpicked for its unique character, exceptional design, and commitment to guest experience'
  },
  {
    title: 'Community',
    description: 'We believe in connecting travelers with meaningful experiences and fostering relationships that last beyond the stay'
  },
  {
    title: 'Sustainability',
    description: 'Supporting properties that respect their environment and contribute positively to their local communities'
  }
];

const team = [
  {
    name: 'Aanya Kapoor',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
    bio: 'Former hospitality executive with a passion for design and authentic travel experiences'
  },
  {
    name: 'Rohan Malhotra',
    role: 'Chief Curator',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    bio: 'Architecture graduate who has spent a decade discovering India\'s most unique stays'
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Community',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400',
    bio: 'Building connections between travelers, property owners, and local communities'
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-[#1E2A24] to-[#1E2A24]/95">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg className="w-20 h-20 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-3xl bg-[#C5A46D]/30 scale-150" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#FAF8F4] mb-8 tracking-[-0.02em] font-normal">
            For Those Who Never
            <br />
            <span className="italic font-decorative text-[#FAF8F4] font-normal">Stay Ordinary</span>
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-10" />

          <p className="text-lg md:text-xl text-[#FAF8F4]/90 max-w-3xl mx-auto font-light leading-loose tracking-wide">
            BoutiqLife was born from a simple belief: that where you stay should be as memorable as where you go.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
                Our Story
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-8" />
              <div className="space-y-6 text-[#1E2A24]/80 font-light leading-loose">
                <p>
                  It started with a weekend escape to a converted haveli in Rajasthan. What was meant to be a simple getaway became a revelation—we realized that the space we inhabited was as transformative as the destination itself.
                </p>
                <p>
                  That experience planted a seed. We began traveling across India, seeking out properties that told stories, reflected local culture, and were designed with intention. We found hidden gems that weren't on any major booking platform, properties run by passionate owners who cared deeply about their guests' experiences.
                </p>
                <p>
                  BoutiqLife emerged from this journey—a curated collection of stays for travelers who value authenticity over opulence, design over decoration, and experiences over amenities.
                </p>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200"
                alt="Our Story"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-[#E8DCC5]/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              What We Stand For
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light max-w-2xl mx-auto">
              Our values guide every property we feature and every experience we create
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-10 border border-[#E8DCC5]/30 shadow-lg">
                <h3 className="text-2xl font-serif text-[#1E2A24] mb-4">{value.title}</h3>
                <div className="w-12 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-6" />
                <p className="text-[#1E2A24]/80 font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-6 tracking-[-0.02em]">
              Meet the Team
            </h2>
            <p className="text-lg text-[#1E2A24]/70 font-light max-w-2xl mx-auto">
              A small team united by a love for travel, design, and authentic hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member) => (
              <div key={member.name} className="text-center group">
                <div className="relative aspect-square overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#1E2A24] mb-2">{member.name}</h3>
                <p className="text-sm text-[#C5A46D] uppercase tracking-[0.15em] mb-4 font-semibold">
                  {member.role}
                </p>
                <p className="text-[#1E2A24]/70 font-light leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1E2A24]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-serif text-[#C5A46D] mb-3">150+</p>
              <p className="text-sm text-[#FAF8F4] font-medium uppercase tracking-[0.15em]">Curated Properties</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-serif text-[#C5A46D] mb-3">15</p>
              <p className="text-sm text-[#FAF8F4] font-medium uppercase tracking-[0.15em]">States Covered</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-serif text-[#C5A46D] mb-3">5,000+</p>
              <p className="text-sm text-[#FAF8F4] font-medium uppercase tracking-[0.15em]">Happy Travelers</p>
            </div>
            <div className="text-center">
              <p className="text-5xl md:text-6xl font-serif text-[#C5A46D] mb-3">98%</p>
              <p className="text-sm text-[#FAF8F4] font-medium uppercase tracking-[0.15em]">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            Join Our Journey
          </h2>
          <p className="text-lg text-[#1E2A24]/70 font-light mb-12 leading-relaxed">
            Whether you're a traveler seeking your next extraordinary stay or a property owner who shares our vision, we'd love to connect
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/discover">
              <Button className="bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] px-12 py-7 text-xs tracking-[0.15em] uppercase font-semibold">
                Explore Properties
              </Button>
            </Link>
            <Link href="/owners">
              <Button
                variant="outline"
                className="border-2 border-[#1E2A24] text-[#1E2A24] hover:bg-[#1E2A24] hover:text-[#FAF8F4] px-12 py-7 text-xs tracking-[0.15em] uppercase font-semibold"
              >
                List Your Property
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
