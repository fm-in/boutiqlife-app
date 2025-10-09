'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAF8F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <svg className="w-16 h-16 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
              </svg>
              <div className="absolute inset-0 blur-2xl bg-[#C5A46D]/20 scale-150" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#1E2A24] mb-8 tracking-[-0.02em]">
            Get in Touch
          </h1>

          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-8" />

          <p className="text-lg md:text-xl text-[#1E2A24]/70 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Whether you're planning your next escape or have a question, we're here to help create your perfect stay
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-serif text-[#1E2A24] mb-8 tracking-[-0.01em]">
                Send us a Message
              </h2>

              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                      First Name
                    </label>
                    <Input
                      type="text"
                      placeholder="John"
                      className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                      Last Name
                    </label>
                    <Input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Phone Number (Optional)
                  </label>
                  <Input
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Inquiry Type
                  </label>
                  <select className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] focus:outline-none transition-colors">
                    <option>General Inquiry</option>
                    <option>Property Booking</option>
                    <option>Membership Question</option>
                    <option>Property Owner</option>
                    <option>Press & Media</option>
                    <option>Partnership Opportunity</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-3">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your inquiry..."
                    className="w-full px-5 py-4 border border-[#E8DCC5]/40 text-[#1E2A24] focus:border-[#C5A46D] focus:outline-none transition-colors resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#1E2A24] text-[#FAF8F4] hover:bg-[#C5A46D] hover:text-[#1E2A24] py-6 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-500"
                >
                  Send Message
                </Button>

                <p className="text-xs text-[#1E2A24]/60 font-light text-center">
                  We typically respond within 24 hours
                </p>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-serif text-[#1E2A24] mb-8 tracking-[-0.01em]">
                  Other Ways to Reach Us
                </h2>

                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#C5A46D]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2">Email</h3>
                      <p className="text-[#1E2A24] font-light leading-relaxed">
                        <a href="mailto:hello@boutiqlife.com" className="hover:text-[#C5A46D] transition-colors">
                          hello@boutiqlife.com
                        </a>
                        <br />
                        <a href="mailto:bookings@boutiqlife.com" className="hover:text-[#C5A46D] transition-colors">
                          bookings@boutiqlife.com
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#C5A46D]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2">Phone</h3>
                      <p className="text-[#1E2A24] font-light leading-relaxed">
                        +91 (22) 1234 5678
                        <br />
                        <span className="text-sm text-[#1E2A24]/60">Mon-Sat, 9:00 AM - 7:00 PM IST</span>
                      </p>
                    </div>
                  </div>

                  {/* Office */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#C5A46D]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C5A46D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-2">Office</h3>
                      <p className="text-[#1E2A24] font-light leading-relaxed">
                        BoutiqLife Pvt. Ltd.
                        <br />
                        Bandra West
                        <br />
                        Mumbai, Maharashtra 400050
                        <br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 border border-[#C5A46D]/30 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C5A46D]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold tracking-[0.12em] uppercase text-[#1E2A24]/70 mb-4">Follow Us</h3>
                      <div className="flex gap-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#1E2A24]/60 hover:text-[#C5A46D] transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="text-[#1E2A24]/60 hover:text-[#C5A46D] transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#1E2A24]/60 hover:text-[#C5A46D] transition-colors">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Link */}
              <div className="bg-[#E8DCC5]/30 p-8 border border-[#E8DCC5]/50">
                <h3 className="text-xl font-serif text-[#1E2A24] mb-4">Have a Quick Question?</h3>
                <p className="text-[#1E2A24]/70 font-light mb-6 leading-relaxed">
                  Check out our FAQ section for instant answers to common questions about bookings, memberships, and more.
                </p>
                <Button
                  variant="outline"
                  className="border-2 border-[#1E2A24] text-[#1E2A24] hover:bg-[#1E2A24] hover:text-[#FAF8F4] px-8 py-4 text-xs tracking-[0.15em] uppercase font-semibold"
                >
                  View FAQ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
