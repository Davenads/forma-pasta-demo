'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import CartDrawer from './CartDrawer'

export default function CartFloatingBar() {
  const { itemCount, total } = useCart()
  const [drawerOpen, setDrawerOpen] = useState(false)

  if (itemCount === 0) return null

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-navy)] shadow-2xl">
        <button
          onClick={() => setDrawerOpen(true)}
          className="w-full flex items-center justify-between text-white px-5 py-4"
          aria-label={`View cart — ${itemCount} items, $${total.toFixed(2)}`}
        >
          <span className="font-body text-sm flex items-center gap-2">
            <span className="bg-[var(--color-primary)] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0">
              {itemCount}
            </span>
            {itemCount === 1 ? '1 item' : `${itemCount} items`}
          </span>
          <span className="font-body font-semibold text-base">
            ${total.toFixed(2)}
          </span>
          <span className="font-body text-sm text-white/70">View Cart →</span>
        </button>
      </div>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  )
}
