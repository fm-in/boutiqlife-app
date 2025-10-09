// Mock data for BoutiqLife properties
export interface Property {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  vibe: string[];
  propertyType: 'villa' | 'homestay' | 'resort' | 'urban' | 'heritage';
  priceRange: string;
  amenities: string[];
  images: string[];
  featured: boolean;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    name: 'Villa Serene',
    slug: 'villa-serene-goa',
    tagline: 'Where minimalism meets the sea',
    description: 'A contemporary masterpiece perched on the cliffs of North Goa. Villa Serene embodies the art of understated luxury, where every corner is designed to frame the Arabian Sea. Floor-to-ceiling windows blur the boundaries between indoors and out, while the infinity pool seems to merge with the horizon.',
    location: {
      city: 'Goa',
      state: 'Goa',
      country: 'India',
    },
    vibe: ['coastal', 'minimalist', 'modern'],
    propertyType: 'villa',
    priceRange: '₹₹₹',
    amenities: ['Infinity Pool', 'Ocean View', 'Chef on Request', 'Private Beach Access', 'WiFi', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200',
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    ],
    featured: true,
  },
  {
    id: '2',
    name: 'The Forest Retreat',
    slug: 'forest-retreat-coorg',
    tagline: 'Embrace the wild in comfort',
    description: 'Nestled deep within the coffee plantations of Coorg, this heritage homestay offers an escape into nature without sacrificing comfort. Wake up to mist-covered hills, spend afternoons exploring spice trails, and evenings by the bonfire under a canopy of stars.',
    location: {
      city: 'Coorg',
      state: 'Karnataka',
      country: 'India',
    },
    vibe: ['forest', 'heritage', 'tranquil'],
    propertyType: 'homestay',
    priceRange: '₹₹',
    amenities: ['Bonfire', 'Plantation Walks', 'Home-cooked Meals', 'Bird Watching', 'WiFi'],
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200',
    ],
    featured: true,
  },
  {
    id: '3',
    name: 'Haveli Heritage',
    slug: 'haveli-heritage-jaipur',
    tagline: 'Royal stories in every corner',
    description: 'A 200-year-old haveli meticulously restored to celebrate Rajasthani craftsmanship. Hand-painted frescoes, intricate jaali work, and vintage furnishings create an immersive historical experience, while modern amenities ensure contemporary comfort.',
    location: {
      city: 'Jaipur',
      state: 'Rajasthan',
      country: 'India',
    },
    vibe: ['heritage', 'cultural', 'architectural'],
    propertyType: 'heritage',
    priceRange: '₹₹₹',
    amenities: ['Rooftop Terrace', 'Traditional Thali Meals', 'Heritage Tours', 'Cultural Performances', 'Air Conditioning'],
    images: [
      'https://images.unsplash.com/photo-1631049552240-59c37f38802b?w=1200',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200',
    ],
    featured: true,
  },
  {
    id: '4',
    name: 'Urban Hideout',
    slug: 'urban-hideout-mumbai',
    tagline: 'A sanctuary in the city',
    description: 'In the heart of Mumbai\'s artistic quarter, this boutique space combines industrial chic with bohemian warmth. Exposed brick walls, curated art pieces, and a rooftop garden create an urban oasis for the culturally curious traveler.',
    location: {
      city: 'Mumbai',
      state: 'Maharashtra',
      country: 'India',
    },
    vibe: ['urban', 'artistic', 'contemporary'],
    propertyType: 'urban',
    priceRange: '₹₹',
    amenities: ['Rooftop Garden', 'Art Gallery', 'Co-working Space', 'Café', 'WiFi'],
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
    ],
    featured: false,
  },
  {
    id: '5',
    name: 'Mountain Echo Lodge',
    slug: 'mountain-echo-manali',
    tagline: 'Peaks, pine, and profound peace',
    description: 'Perched at 8,000 feet in the Himalayas, this alpine lodge offers panoramic views of snow-capped peaks. Floor-to-ceiling windows in every room, a library with a fireplace, and locally sourced gourmet meals make this the perfect mountain escape.',
    location: {
      city: 'Manali',
      state: 'Himachal Pradesh',
      country: 'India',
    },
    vibe: ['mountain', 'tranquil', 'adventure'],
    propertyType: 'resort',
    priceRange: '₹₹₹',
    amenities: ['Mountain View', 'Fireplace', 'Library', 'Trekking Guides', 'Organic Meals', 'Yoga Studio'],
    images: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200',
      'https://images.unsplash.com/photo-1464093515883-ec948246accb?w=1200',
    ],
    featured: false,
  },
  {
    id: '6',
    name: 'Coastal Casa',
    slug: 'coastal-casa-pondicherry',
    tagline: 'French elegance by the Bay of Bengal',
    description: 'A beautifully restored French colonial villa in Pondicherry\'s White Town. Yellow walls, blue shutters, antique furniture, and a courtyard pool capture the essence of French-Tamil fusion. Steps away from the promenade and Auroville.',
    location: {
      city: 'Pondicherry',
      state: 'Puducherry',
      country: 'India',
    },
    vibe: ['coastal', 'colonial', 'cultural'],
    propertyType: 'villa',
    priceRange: '₹₹',
    amenities: ['Courtyard Pool', 'French Breakfast', 'Bicycles', 'Beach Access', 'WiFi'],
    images: [
      'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?w=1200',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200',
    ],
    featured: false,
  },
];

export const featuredProperties = mockProperties.filter(p => p.featured);

export const getPropertyBySlug = (slug: string) => {
  return mockProperties.find(p => p.slug === slug);
};

export const getPropertiesByVibe = (vibe: string) => {
  return mockProperties.filter(p => p.vibe.includes(vibe.toLowerCase()));
};

// Export as 'properties' for convenience
export const properties = mockProperties;
