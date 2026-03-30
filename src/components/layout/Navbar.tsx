'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? 'bg-[#FAF8F4]/98 backdrop-blur-xl shadow-[0_2px_16px_rgba(30,42,36,0.08)] py-4'
          : 'bg-[#1E2A24]/60 backdrop-blur-xl py-6'
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <span className={`text-2xl font-serif tracking-[0.15em] transition-all duration-500 font-medium ${
              scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
            } group-hover:text-[#C5A46D] group-hover:scale-105 inline-block`}>
              BOUTIQLIFE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-12">
            <Link
              href="/discover"
              className={`text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:text-[#C5A46D] relative py-3 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A46D] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
              }`}
            >
              Discover
            </Link>
            <Link
              href="/journal"
              className={`text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:text-[#C5A46D] relative py-3 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A46D] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
              }`}
            >
              Journal
            </Link>
            <Link
              href="/club"
              className={`text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:text-[#C5A46D] relative py-3 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A46D] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
              }`}
            >
              The Club
            </Link>
            <Link
              href="/contact"
              className={`text-xs tracking-[0.12em] uppercase font-semibold transition-all duration-300 hover:text-[#C5A46D] relative py-3 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A46D] after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              className={`px-10 py-6 text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-500 border-2 ${
                scrolled
                  ? 'bg-[#1E2A24] text-[#FAF8F4] border-[#1E2A24] hover:bg-[#C5A46D] hover:border-[#C5A46D] hover:text-[#1E2A24]'
                  : 'bg-[#FAF8F4] text-[#1E2A24] border-[#FAF8F4] hover:bg-transparent hover:text-[#FAF8F4] hover:border-[#FAF8F4]'
              } shadow-lg hover:shadow-2xl hover:scale-105`}
            >
              Book Your Stay
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-3 min-w-[44px] min-h-[44px] flex items-center justify-center transition-all duration-300 hover:scale-110 ${
              scrolled ? 'text-[#1E2A24]' : 'text-[#FAF8F4]'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1E2A24] z-40 transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ top: scrolled ? '76px' : '92px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-10 px-6">
          <Link
            href="/discover"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF8F4] text-3xl font-serif tracking-wide hover:text-[#C5A46D] transition-colors duration-300"
          >
            Discover
          </Link>
          <Link
            href="/journal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF8F4] text-3xl font-serif tracking-wide hover:text-[#C5A46D] transition-colors duration-300"
          >
            Journal
          </Link>
          <Link
            href="/club"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF8F4] text-3xl font-serif tracking-wide hover:text-[#C5A46D] transition-colors duration-300"
          >
            The Club
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#FAF8F4] text-3xl font-serif tracking-wide hover:text-[#C5A46D] transition-colors duration-300"
          >
            Contact
          </Link>
          <Button
            onClick={() => setMobileMenuOpen(false)}
            className="mt-12 px-12 py-7 bg-[#C5A46D] text-[#1E2A24] hover:bg-[#FAF8F4] text-xs tracking-[0.15em] uppercase font-semibold transition-all duration-500"
          >
            Book Your Stay
          </Button>
        </div>
      </div>
    </nav>
  );
}
