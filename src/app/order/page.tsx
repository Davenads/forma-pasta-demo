import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import OrderPage from './OrderPage'

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order fresh pasta, wraps, and more from Forma Pasta Cafe & Market in Sewickley, PA. Delivery and pickup available.',
}

export default function Page() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forma-pasta.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Order Online', item: 'https://forma-pasta.vercel.app/order' },
        ],
      }} />
      <OrderPage />
    </>
  )
}
