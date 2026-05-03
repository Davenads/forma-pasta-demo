'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import { DELIVERY_MINIMUM } from '@/lib/menu-data'
import CheckoutModal from './CheckoutModal'

export default function CartSidebar() {
  const { items, orderType, subtotal, deliveryFee, total, meetsMinimum, updateQty } = useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  return (
    <>
      <aside className="hidden lg:flex flex-col bg-white border border-[var(--color-border)] rounded-xl p-6 h-fit sticky top-36">
        <h2 className="font-display text-xl mb-4 leading-tight">Your Order</h2>

        {items.length === 0 ? (
          <p className="font-body text-sm text-[var(--color-muted)] text-center py-8 leading-relaxed">
            Your cart is empty.
            <br />
            Add items from the menu.
          </p>
        ) : (
          <div className="flex flex-col gap-3 mb-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <span className="font-body text-sm flex-1 min-w-0 truncate">{item.name}</span>
                <div className="flex items-center border border-[var(--color-border)] rounded shrink-0">
                  <button
                    onClick={() => updateQty(item.id, item.quantity - 1)}
                    className="w-6 h-6 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label="Decrease"
                  >
                    −
                  </button>
                  <span className="font-body text-xs font-medium px-1.5 select-none">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQty(item.id, item.quantity + 1)}
                    className="w-6 h-6 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                    aria-label="Increase"
                  >
                    +
                  </button>
                </div>
                <span className="font-body text-sm font-medium w-12 text-right shrink-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <>
            <div className="border-t border-[var(--color-border)] pt-3 mb-4 flex flex-col gap-1.5">
              <div className="flex justify-between font-body text-sm">
                <span className="text-[var(--color-muted)]">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {orderType === 'delivery' && (
                <div className="flex justify-between font-body text-sm">
                  <span className="text-[var(--color-muted)]">Delivery</span>
                  <span>${deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-body font-semibold text-base border-t border-[var(--color-border)] pt-2 mt-0.5">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            {!meetsMinimum && (
              <p className="font-body text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3 leading-snug">
                Add ${(DELIVERY_MINIMUM - subtotal).toFixed(2)} more to meet the $
                {DELIVERY_MINIMUM} delivery minimum.
              </p>
            )}

            <button
              onClick={() => setShowCheckout(true)}
              disabled={!meetsMinimum}
              className="w-full bg-[var(--color-primary)] text-white font-body text-sm font-medium py-3 rounded-lg hover:bg-[#a81818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Checkout →
            </button>
          </>
        )}
      </aside>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  )
}
