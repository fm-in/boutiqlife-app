# 🏛️ BoutiqLife — Luxury Boutique Property Platform

> **Where every stay tells a story. For those who never stay ordinary.**

---

## 🎨 Project Overview

BoutiqLife is a curated discovery and lifestyle platform for boutique properties and design-driven stays worldwide. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring a sophisticated luxury aesthetic.

### ✨ Features Implemented

#### ✅ **MVP Phase 1 - Complete**

**Brand Identity:**
- ✓ Custom color palette (Champagne Beige, Deep Forest Green, Warm Ivory, Charcoal, Gold)
- ✓ Premium typography (Playfair Display, Inter, Cormorant Garamond)
- ✓ Logo integration (circular icon + full wordmark)
- ✓ Sophisticated luxury design system

**Core Pages & Components:**
- ✓ **Luxurious Homepage** with full-screen hero section
- ✓ **Navigation Bar** (responsive, with mobile menu)
- ✓ **Hero Section** (immersive, with video background support)
- ✓ **Discover by Vibe** (Coastal, Forest, Heritage, Urban)
- ✓ **Featured Properties Grid** (3 curated properties)
- ✓ **BoutiqLife Club Section** (membership CTA)
- ✓ **Footer** (newsletter signup, links, social media)

**Property System:**
- ✓ Mock data for 6 properties
- ✓ Property Card component (hover effects, image gallery)
- ✓ Property filtering by vibe
- ✓ Featured properties showcase

---

## 🚀 Getting Started

### Development Server

The server is currently running at:
- **Local:** http://localhost:3000
- **Network:** http://192.168.29.32:3000

### Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 📁 Project Structure

```
boutiqlife-app/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with fonts
│   │   ├── page.tsx             # Homepage
│   │   └── globals.css          # Global styles & brand colors
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Main navigation
│   │   │   └── Footer.tsx       # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx         # Hero section
│   │   │   ├── DiscoverByVibe.tsx
│   │   │   ├── FeaturedProperties.tsx
│   │   │   └── ClubSection.tsx
│   │   ├── property/
│   │   │   └── PropertyCard.tsx # Property display card
│   │   └── ui/                  # shadcn/ui components
│   └── lib/
│       └── data/
│           └── properties.ts    # Mock property data
├── public/
│   ├── logo-icon.png           # Circular logo
│   └── logo-full.png           # Full wordmark
└── tailwind.config.js          # Tailwind configuration
```

---

## 🎨 Brand Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Champagne Beige** | `#E8DCC5` | Primary background/accent, sophistication |
| **Deep Forest Green** | `#1E2A24` | Primary text, headers, brand anchor |
| **Warm Ivory** | `#FAF8F4` | Main background, purity & calm |
| **Charcoal Black** | `#202020` | Editorial text, UI contrast |
| **Gold Accent** | `#C5A46D` | Highlights, links, premium details |

### Using Colors in Code

```tsx
// Tailwind classes
className="bg-ivory text-forest border-champagne"

// Custom colors are available via Tailwind
className="bg-gold hover:text-gold"
```

---

## 🖋️ Typography

**Font Families:**
- **Headings:** Playfair Display (Serif) — `font-serif`
- **Body Text:** Inter (Sans-serif) — `font-sans`
- **Decorative:** Cormorant Garamond — `font-decorative`

```tsx
<h1 className="font-serif text-forest">Luxury Heading</h1>
<p className="font-sans text-charcoal">Body text</p>
<span className="font-decorative italic">Elegant accent</span>
```

---

## 📦 Tech Stack

### Core Technologies
- **Next.js 15** (App Router) — React framework
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling
- **shadcn/ui** — Premium UI components

### Key Dependencies
```json
{
  "next": "15.5.4",
  "react": "^19",
  "typescript": "^5",
  "tailwindcss": "^4",
  "@radix-ui/*": "latest"
}
```

---

## 🧩 Adding New Components

### Using shadcn/ui

```bash
# Add new components
npx shadcn@latest add [component-name]

# Examples:
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add form
```

---

## 📝 Mock Data

### Property Interface

```typescript
interface Property {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  location: { city: string; state: string; country: string; };
  vibe: string[];
  propertyType: 'villa' | 'homestay' | 'resort' | 'urban' | 'heritage';
  priceRange: string;
  amenities: string[];
  images: string[];
  featured: boolean;
}
```

### Current Mock Properties

1. **Villa Serene** (Goa) — Coastal, Minimalist
2. **The Forest Retreat** (Coorg) — Forest, Heritage
3. **Haveli Heritage** (Jaipur) — Heritage, Cultural
4. **Urban Hideout** (Mumbai) — Urban, Artistic
5. **Mountain Echo Lodge** (Manali) — Mountain, Tranquil
6. **Coastal Casa** (Pondicherry) — Coastal, Colonial

---

## 🎯 Next Steps (Phase 1 Completion)

### Pages to Build Next

1. **Property Detail Page** (`/properties/[slug]`)
   - Full image gallery with lightbox
   - Property story section
   - Amenities list
   - Location map integration
   - Inquiry form

2. **Discover/Listing Page** (`/discover`)
   - Filterable property grid
   - Search functionality
   - Map view toggle
   - Vibe-based filtering

3. **BoutiqLife Club Page** (`/club`)
   - Membership tiers
   - Benefits breakdown
   - Member testimonials
   - Stripe payment integration

4. **The Boutiq Journal** (`/journal`)
   - Blog/magazine layout
   - Article listing
   - Rich editorial content
   - Category filtering

5. **For Owners Page** (`/owners`)
   - Value proposition
   - Pricing tiers
   - Partner application form
   - Case studies

---

## 🔧 Configuration Files

### Tailwind Config
Custom colors are defined in `tailwind.config.js`:
```js
colors: {
  champagne: '#E8DCC5',
  forest: '#1E2A24',
  ivory: '#FAF8F4',
  charcoal: '#202020',
  gold: '#C5A46D',
}
```

### Global Styles
Brand colors and design tokens in `src/app/globals.css`:
```css
:root {
  --champagne-beige: #E8DCC5;
  --deep-forest-green: #1E2A24;
  --warm-ivory: #FAF8F4;
  --charcoal-black: #202020;
  --gold-accent: #C5A46D;
}
```

---

## 🎨 Design Principles

1. **Sophisticated Simplicity** — Clean layouts, generous whitespace
2. **Editorial Photography** — High-quality, film-grain aesthetics
3. **Smooth Interactions** — Elegant hover effects, transitions (400-600ms)
4. **Mobile-First** — Responsive across all devices
5. **Typography-Led** — Serif headings, readable body text
6. **Subtle Luxury** — Gold accents used sparingly

---

## 🚀 Deployment

### Recommended: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Environment Variables (Future)

```bash
# .env.local (when adding backend)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
STRIPE_SECRET_KEY=your_stripe_key
```

---

## 📊 Performance Targets

- **Lighthouse Score:** > 90
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3s
- **Mobile-Friendly:** 100%

---

## 🐛 Known Issues & Future Enhancements

### To Address:
- [ ] Add actual video background for Hero (currently static image)
- [ ] Implement property detail pages
- [ ] Add Algolia/MeiliSearch for property search
- [ ] Integrate Supabase for backend
- [ ] Add authentication flow
- [ ] Implement inquiry form with email notifications
- [ ] Add image optimization with Cloudinary
- [ ] Create admin dashboard for property management

---

## 📚 Resources

- **Next.js 15 Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Execution Plan:** See `BOUTIQLIFE_EXECUTION_PLAN.md`

---

## 🎉 What's Working Right Now

✅ **Luxury homepage is live at http://localhost:3000**

Features:
- Full-screen hero with animated scroll indicator
- Responsive navigation with mobile menu
- "Discover by Vibe" interactive cards
- Featured properties grid with hover effects
- BoutiqLife Club membership section
- Complete footer with newsletter signup
- Premium typography and color scheme
- Smooth animations and transitions
- Mobile-responsive design

**Try it out:**
1. Open http://localhost:3000 in your browser
2. Scroll through the sections
3. Hover over property cards and vibe cards
4. Test the mobile menu (resize browser)
5. Experience the luxurious design aesthetic

---

## 🤝 Contributing

This project follows:
- TypeScript strict mode
- ESLint configuration
- Prettier formatting (recommended)
- Conventional commits

---

## 📄 License

Proprietary — BoutiqLife Platform

---

**Built with expertise for BoutiqLife** ✨
*Where every stay tells a story.*
