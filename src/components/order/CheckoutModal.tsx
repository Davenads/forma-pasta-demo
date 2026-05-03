'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import { SLICE_ORDER_URL } from '@/lib/menu-data'

interface CheckoutModalProps {
  onClose: () => void
}

export default function CheckoutModal({ onClose }: CheckoutModalProps) {
  const { items, orderType, subtotal, deliveryFee, total } = useCart()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  function handleCheckout() {
    window.open(SLICE_ORDER_URL, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{ background: 'rgba(15,31,61,0.88)' }}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hero/forma-logo.png"
              alt="Forma Pasta"
              width={200}
              height={67}
              className="h-12 w-auto"
            />
          </div>

          <h2 className="font-display text-2xl text-center mb-1">Ready to checkout?</h2>
          <p className="font-body text-sm text-[var(--color-muted)] text-center mb-6 leading-relaxed">
            We&apos;ll hand you off to our secure checkout partner to complete payment.
            Your selections will be waiting.
          </p>

          {/* Order summary */}
          <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-xl p-4 mb-5">
            <div className="flex flex-col gap-1.5 mb-3">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between font-body text-sm">
                  <span className="text-[var(--color-muted)] truncate pr-3">
                    {item.name} × {item.quantity}
                  </span>
                  <span className="shrink-0">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-[var(--color-border)] pt-2.5 flex flex-col gap-1.5">
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
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-[var(--color-primary)] text-white font-body font-medium py-3.5 rounded-lg hover:bg-[#a81818] transition-colors mb-3"
          >
            Continue to Checkout
          </button>
          <button
            onClick={onClose}
            className="w-full font-body text-sm text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors py-2"
          >
            Keep Browsing
          </button>

          <p className="font-body text-[11px] text-[var(--color-muted)] text-center mt-3">
            Payment is processed securely via Slice
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
