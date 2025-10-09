import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { DiscoverByVibe } from '@/components/sections/DiscoverByVibe';
import { FeaturedProperties } from '@/components/sections/FeaturedProperties';
import { ClubSection } from '@/components/sections/ClubSection';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DiscoverByVibe />
      <FeaturedProperties />
      <ClubSection />
      <Footer />
    </div>
  );
}
