import type { Metadata } from 'next'
import OrderPage from './OrderPage'

export const metadata: Metadata = {
  title: 'Order Online',
  description:
    'Order fresh pasta, wraps, and more from Forma Pasta Cafe & Market in Sewickley, PA. Delivery and pickup available.',
}

export default function Page() {
  return <OrderPage />
}
