'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '@/context/CartContext'
import { DELIVERY_MINIMUM } from '@/lib/menu-data'
import CheckoutModal from './CheckoutModal'

interface CartDrawerProps {
  open: boolean
  onClose: () => void
}

export default function CartDrawer({ open, onClose }: CartDrawerProps) {
  const { items, orderType, subtotal, deliveryFee, total, meetsMinimum, updateQty } =
    useCart()
  const [showCheckout, setShowCheckout] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={onClose}
            />

            {/* Sheet */}
            <motion.div
              key="drawer"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 320 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-2xl max-h-[88vh] flex flex-col lg:hidden"
            >
              {/* Drag handle */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-10 h-1 bg-[var(--color-border)] rounded-full" />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-[var(--color-border)]">
                <h2 className="font-display text-2xl">Your Order</h2>
                <button
                  onClick={onClose}
                  className="font-body text-xl text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors leading-none"
                  aria-label="Close cart"
                >
                  ✕
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto px-6 py-4">
                {items.length === 0 ? (
                  <p className="font-body text-sm text-[var(--color-muted)] text-center py-10">
                    Your cart is empty.
                  </p>
                ) : (
                  <div className="flex flex-col gap-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-3">
                        <span className="font-body text-sm flex-1 min-w-0">{item.name}</span>
                        <div className="flex items-center border border-[var(--color-border)] rounded shrink-0">
                          <button
                            onClick={() => updateQty(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                            aria-label="Decrease"
                          >
                            −
                          </button>
                          <span className="font-body text-sm font-medium px-2 select-none">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center text-[var(--color-muted)] hover:text-[var(--color-primary)] transition-colors"
                            aria-label="Increase"
                          >
                            +
                          </button>
                        </div>
                        <span className="font-body text-sm font-medium w-14 text-right shrink-0">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="border-t border-[var(--color-border)] px-6 py-4 pb-8">
                  <div className="flex flex-col gap-1.5 mb-4">
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
                    onClick={() => { onClose(); setShowCheckout(true) }}
                    disabled={!meetsMinimum}
                    className="w-full bg-[var(--color-primary)] text-white font-body font-medium py-3.5 rounded-lg hover:bg-[#a81818] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Checkout →
                  </button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {showCheckout && <CheckoutModal onClose={() => setShowCheckout(false)} />}
    </>
  )
}
