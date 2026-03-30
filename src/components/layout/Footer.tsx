import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#202020] text-[#FAF8F4]">
      {/* Newsletter Section - Elevated */}
      <div className="border-b border-[#C5A46D]/10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-24">
          <div className="max-w-3xl mx-auto text-center">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <svg className="w-12 h-12 text-[#C5A46D] relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5L12 2Z" />
                </svg>
                <div className="absolute inset-0 blur-2xl bg-[#C5A46D]/20 scale-150" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif text-[#FAF8F4] mb-6 tracking-[-0.01em] font-normal">Stay in the Know</h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C5A46D] to-transparent mx-auto mb-8" />
            <p className="text-lg text-[#FAF8F4]/80 mb-12 font-light leading-relaxed tracking-wide">
              Subscribe to receive handpicked properties, travel stories, and exclusive member offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                aria-label="Email address for newsletter"
                className="flex-1 bg-[#FAF8F4]/10 border border-[#FAF8F4]/20 text-[#FAF8F4] placeholder:text-[#FAF8F4]/50 focus:border-[#C5A46D] px-6 py-6 text-sm tracking-wide transition-all duration-300"
              />
              <Button className="bg-[#C5A46D] text-[#1E2A24] hover:bg-[#E8DCC5] transition-all duration-500 font-semibold tracking-[0.15em] uppercase px-10 py-6 text-xs hover:scale-105 shadow-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer - Enhanced */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <span className="text-2xl font-serif tracking-[0.15em] font-medium">BOUTIQLIFE</span>
            </div>
            <p className="text-[#FAF8F4]/85 mb-8 font-light leading-loose max-w-md tracking-wide">
              Curated boutique properties and design-driven stays worldwide.
              Where every stay tells a story.
            </p>
            <div className="flex space-x-6">
              <Link href="https://instagram.com" target="_blank" className="text-[#FAF8F4]/70 hover:text-[#C5A46D] transition-all duration-300 hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link href="https://pinterest.com" target="_blank" className="text-[#FAF8F4]/70 hover:text-[#C5A46D] transition-all duration-300 hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-[#FAF8F4]/70 hover:text-[#C5A46D] transition-all duration-300 hover:scale-110">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Discover Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#FAF8F4]">Discover</h3>
            <ul className="space-y-4 text-[#FAF8F4]/80 font-light">
              <li><Link href="/discover" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">All Properties</Link></li>
              <li><Link href="/discover?vibe=coastal" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Coastal Stays</Link></li>
              <li><Link href="/discover?vibe=forest" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Forest Retreats</Link></li>
              <li><Link href="/discover?vibe=heritage" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Heritage Homes</Link></li>
              <li><Link href="/discover?vibe=urban" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Urban Hideouts</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#FAF8F4]">Company</h3>
            <ul className="space-y-4 text-[#FAF8F4]/80 font-light">
              <li><Link href="/about" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">About Us</Link></li>
              <li><Link href="/journal" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">The Journal</Link></li>
              <li><Link href="/club" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">The Club</Link></li>
              <li><Link href="/owners" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">For Property Owners</Link></li>
              <li><Link href="/contact" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Contact</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="font-serif text-xl mb-6 text-[#FAF8F4]">Support</h3>
            <ul className="space-y-4 text-[#FAF8F4]/80 font-light">
              <li><Link href="/faq" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">FAQ</Link></li>
              <li><Link href="/terms" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Privacy Policy</Link></li>
              <li><Link href="/careers" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Careers</Link></li>
              <li><Link href="/press" className="hover:text-[#C5A46D] transition-all duration-300 hover:translate-x-1 inline-block">Press</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Refined */}
        <div className="pt-10 border-t border-[#C5A46D]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#FAF8F4]/75">
          <p className="mb-4 md:mb-0 font-light tracking-wide">
            © {new Date().getFullYear()} BoutiqLife. For those who never stay ordinary.
          </p>
          <p className="font-light tracking-wide">
            Crafted with care in India
          </p>
        </div>
      </div>
    </footer>
  );
}
