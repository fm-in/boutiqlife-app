export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  excerpt: string;
  featured: boolean;
}

export const journalPosts: JournalPost[] = [
  {
    id: '1',
    slug: 'coastal-escapes-goa',
    title: 'Where the Sea Meets Serenity',
    subtitle: 'Discovering Goa\'s Hidden Coastal Treasures',
    author: 'Priya Sharma',
    date: '2025-03-15',
    readTime: '8 min read',
    category: 'Coastal',
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    excerpt: 'Beyond the beaches and parties lies another Goa—one of quiet coves, heritage homes, and slow mornings by the sea. We explore the coastal hideaways that capture the true essence of this paradise.',
    featured: true
  },
  {
    id: '2',
    slug: 'heritage-homes-rajasthan',
    title: 'Living History',
    subtitle: 'The Art of Staying in Rajasthan\'s Heritage Homes',
    author: 'Arjun Mehta',
    date: '2025-03-10',
    readTime: '10 min read',
    category: 'Heritage',
    image: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?w=1200',
    excerpt: 'Step into centuries-old havelis and palaces where every wall tells a story. From Jaipur to Jodhpur, these heritage stays offer more than accommodation—they offer a journey through time.',
    featured: true
  },
  {
    id: '3',
    slug: 'forest-retreats-coorg',
    title: 'Into the Wild',
    subtitle: 'Forest Retreats for the Soul',
    author: 'Maya Iyer',
    date: '2025-03-05',
    readTime: '6 min read',
    category: 'Forest',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
    excerpt: 'In the misty highlands of Coorg, discover stays where luxury meets wilderness. These forest retreats prove that comfort and nature can coexist in perfect harmony.',
    featured: false
  },
  {
    id: '4',
    slug: 'design-driven-stays',
    title: 'Form Meets Function',
    subtitle: 'The Rise of Design-Driven Boutique Hotels',
    author: 'Rohan Das',
    date: '2025-02-28',
    readTime: '7 min read',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
    excerpt: 'How independent designers are reimagining hospitality, creating spaces that are as much art installations as they are places to stay.',
    featured: false
  },
  {
    id: '5',
    slug: 'urban-sanctuaries',
    title: 'City Sanctuaries',
    subtitle: 'Finding Peace in India\'s Urban Jungle',
    author: 'Kavya Nair',
    date: '2025-02-20',
    readTime: '5 min read',
    category: 'Urban',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
    excerpt: 'From Mumbai to Bangalore, discover urban retreats that offer respite from the chaos without compromising on location or luxury.',
    featured: false
  },
  {
    id: '6',
    slug: 'sustainable-travel',
    title: 'Travel with Purpose',
    subtitle: 'The Future of Sustainable Luxury Hospitality',
    author: 'Aditya Verma',
    date: '2025-02-15',
    readTime: '9 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1200',
    excerpt: 'Luxury and sustainability are no longer mutually exclusive. Meet the properties leading the charge in responsible, eco-conscious hospitality.',
    featured: false
  }
];

export const categories = ['All', 'Coastal', 'Heritage', 'Forest', 'Urban', 'Design', 'Sustainability'];
