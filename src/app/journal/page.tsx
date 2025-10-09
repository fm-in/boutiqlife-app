'use client';

import { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { journalPosts, categories } from '@/lib/data/journal';
import Image from 'next/image';
import Link from 'next/link';

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? journalPosts
    : journalPosts.filter(post => post.category === selectedCategory);

  const featuredPost = journalPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured || selectedCategory !== 'All');

  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-2xl bg-[#C5A46D]/20 scale-150" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            The Journal
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-[#1E2A24]/70 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Travel stories, design insights, and cultural explorations from India's most inspiring stays
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-20 z-40 bg-[#FAF8F4]/98 backdrop-blur-xl border-b border-[#E8DCC5]/30 py-6">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 text-xs font-semibold tracking-[0.12em] uppercase transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#1E2A24] text-[#FAF8F4] shadow-lg'
                    : 'bg-white border border-[#E8DCC5]/40 text-[#1E2A24] hover:border-[#C5A46D] hover:text-[#C5A46D]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post (only on "All" view) */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-16">
          <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
            <Link href={`/journal/${featuredPost.slug}`} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E2A24]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                <div>
                  <span className="inline-block px-4 py-2 bg-[#C5A46D] text-[#1E2A24] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
                    Featured
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-4 group-hover:text-[#C5A46D] transition-colors duration-500 tracking-[-0.01em]">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xl font-decorative italic text-[#C5A46D] mb-6 font-medium">
                    {featuredPost.subtitle}
                  </p>
                  <div className="w-16 h-px bg-gradient-to-r from-[#C5A46D] to-transparent mb-6" />
                  <p className="text-[#1E2A24]/80 leading-loose font-light mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-[#1E2A24]/60">
                    <span>{featuredPost.author}</span>
                    <span>•</span>
                    <span>{featuredPost.readTime}</span>
                    <span>•</span>
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-16">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {regularPosts.map((post) => (
                <Link key={post.id} href={`/journal/${post.slug}`} className="group block">
                  <article className="bg-white border border-[#E8DCC5]/20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-[1200ms] group-hover:scale-110"
                      />
                      <div className="absolute top-4 right-4 bg-[#FAF8F4]/95 backdrop-blur-sm px-4 py-1.5 text-[10px] font-bold tracking-[0.15em] uppercase text-[#1E2A24]">
                        {post.category}
                      </div>
                    </div>

                    <div className="p-8">
                      <h3 className="text-2xl font-serif text-[#1E2A24] mb-3 group-hover:text-[#C5A46D] transition-colors duration-500 tracking-[-0.01em]">
                        {post.title}
                      </h3>
                      <p className="text-sm font-decorative italic text-[#C5A46D] mb-4 font-medium">
                        {post.subtitle}
                      </p>
                      <div className="w-12 h-px bg-gradient-to-r from-[#E8DCC5] to-transparent mb-4" />
                      <p className="text-[#1E2A24]/70 text-sm leading-relaxed mb-6 line-clamp-3 font-light">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-[#1E2A24]/60">
                        <span>{post.author}</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-lg text-[#1E2A24]/70 font-light">
                No posts found in this category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-[#E8DCC5]/30">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            Never Miss a Story
          </h2>
          <p className="text-lg text-[#1E2A24]/70 font-light mb-12 leading-relaxed">
            Subscribe to our journal and receive curated travel stories, design insights, and exclusive offers
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] text-sm focus:border-[#C5A46D] focus:outline-none transition-colors"
            />
            <button
              type="submit"
              className="px-10 py-4 bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
