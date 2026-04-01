import type { Metadata } from 'next'
import { Manrope, Noto_Serif } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })
const notoSerif = Noto_Serif({ subsets: ['latin'], weight: ['400', '700'], style: ['normal', 'italic'], variable: '--font-noto-serif' })

export const metadata: Metadata = {
  title: "Lilly's Nails | Premium Nail Salon in Edgware",
  description: "Experience premium acrylics, custom gel extensions, and meticulous manicures at Lilly's Nails in Edgware.",
  openGraph: {
    title: "Lilly's Nails | Premium Nail Salon in Edgware",
    description: "Experience premium acrylics, custom gel extensions, and meticulous manicures at Lilly's Nails in Edgware.",
    url: "https://lillysnails.co.uk",
    siteName: "Lilly's Nails",
    locale: "en_GB",
    type: "website",
  },
  alternates: {
    canonical: "https://lillysnails.co.uk",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NailSalon",
    "name": "Lilly's Nails",
    "image": "https://lillysnails.co.uk/hero.png",
    "url": "https://lillysnails.co.uk",
    "telephone": "020 8952 2187",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "85 Burnt Oak Broadway",
      "addressLocality": "Edgware",
      "postalCode": "HA8 5EP",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.6007571,
      "longitude": -0.2704078
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${notoSerif.variable} font-body bg-surface text-on-surface`}>
        {children}
      </body>
    </html>
  )
}
