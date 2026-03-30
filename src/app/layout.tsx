import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// BoutiqLife Brand Fonts
const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-decorative",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BoutiqLife — Where every stay tells a story",
  description: "Discover curated boutique properties and design-driven stays worldwide. For those who never stay ordinary.",
  keywords: ["boutique hotels", "luxury stays", "design hotels", "curated travel", "unique accommodations"],
  authors: [{ name: "BoutiqLife" }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  metadataBase: new URL("https://boutiqlife.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BoutiqLife — Where every stay tells a story",
    description: "Discover curated boutique properties and design-driven stays worldwide.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
        alt: "BoutiqLife — Where every stay tells a story",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${cormorant.variable}`}>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BoutiqLife",
              url: "https://boutiqlife.com",
              logo: "https://boutiqlife.com/icon.png",
              description: "Discover curated boutique properties and design-driven stays worldwide.",
              sameAs: [
                "https://instagram.com/boutiqlife",
                "https://linkedin.com/company/boutiqlife",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
