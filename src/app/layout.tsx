import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'Forma Pasta Cafe & Market — Fresh Pasta Handmade in Sewickley',
  description:
    'Artisan fresh pasta cafe, pasta-making classes, and market in Sewickley, PA. All pasta and sauces made in-house daily. BYOB welcome.',
  keywords: [
    'Forma Pasta',
    'Sewickley restaurant',
    'fresh pasta Pittsburgh',
    'pasta classes Sewickley',
    'artisan pasta',
    'BYOB restaurant Sewickley',
  ],
  openGraph: {
    title: 'Forma Pasta Cafe & Market',
    description: 'Fresh pasta. Handmade in Sewickley.',
    type: 'website',
  },
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
    >
      <body className="min-h-full flex flex-col bg-[var(--color-background)] text-[var(--color-foreground)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
