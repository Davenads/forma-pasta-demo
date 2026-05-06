import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/JsonLd'
import { CONTACT, HOURS, SITE_NAME } from '@/lib/constants'

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://forma-pasta.vercel.app'),
  title: {
    default: 'Forma Pasta Cafe & Market | Sewickley, PA',
    template: '%s | Forma Pasta',
  },
  description:
    'Fresh pasta made from scratch daily in Sewickley, PA. Cafe, cooking classes, and an artisan Italian market on Beaver Street. BYOB welcome.',
  keywords: [
    'pasta restaurant Sewickley',
    'pasta classes Sewickley',
    'fresh pasta Sewickley PA',
    'artisan cafe Sewickley',
    'Italian market Sewickley',
  ],
  openGraph: {
    title: 'Forma Pasta Cafe & Market | Sewickley, PA',
    description:
      'Fresh pasta made from scratch daily in Sewickley, PA. Cafe, cooking classes, and an artisan Italian market on Beaver Street. BYOB welcome.',
    type: 'website',
    url: 'https://forma-pasta.vercel.app',
    images: [
      {
        url: '/images/hero/hero-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Forma Pasta Cafe & Market, fresh pasta in Sewickley, PA',
      },
    ],
  },
}

const schemaData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: SITE_NAME,
  description:
    'Fresh pasta made from scratch daily in Sewickley, PA. Cafe, cooking classes, and an artisan Italian market on Beaver Street. BYOB welcome.',
  url: 'https://forma-pasta.vercel.app',
  image: 'https://forma-pasta.vercel.app/images/hero/hero-1.jpg',
  telephone: CONTACT.phone,
  email: CONTACT.email,
  servesCuisine: ['Italian', 'Pasta'],
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '531 Beaver Street',
    addressLocality: 'Sewickley',
    addressRegion: 'PA',
    postalCode: '15143',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 40.5371,
    longitude: -80.1869,
  },
  hasMenu: 'https://forma-pasta.vercel.app/menu',
  menu: 'https://forma-pasta.vercel.app/menu',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '08:00',
      closes: '14:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '17:00',
      closes: '21:00',
    },
  ],
  sameAs: [CONTACT.instagram],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <JsonLd data={schemaData} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
