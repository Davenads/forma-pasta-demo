'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MenuItem } from '@/lib/menu-data'
import { useCart } from '@/context/CartContext'
import DietaryBadge from './DietaryBadge'

export default function MenuItemCard({ item }: { item: MenuItem }) {
  const { items, addItem, updateQty } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const cartItem = items.find((i) => i.id === item.id)
  const qty = cartItem?.quantity ?? 0

  function handleAdd() {
    addItem({ id: item.id, name: item.name, price: item.price })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 500)
  }

  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-4 flex flex-col gap-2 hover:border-[var(--color-muted)] transition-colors">
      <div className="flex items-start gap-3">
        {/* Text content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <h3 className="font-display text-[1.15rem] leading-tight">{item.name}</h3>
            {item.bestSeller && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-body font-semibold tracking-wide uppercase bg-amber-100 text-amber-700">
                Best Seller
              </span>
            )}
            {item.dietary?.map((flag) => (
              <DietaryBadge key={flag} flag={flag} />
            ))}
          </div>
          <p className="font-body text-sm text-[var(--color-muted)] leading-snug">
            {item.description}
          </p>
          {item.includesWith && (
            <p className="font-body text-xs text-[var(--color-secondary)] mt-1.5 font-medium">
              Includes {item.includesWith}
            </p>
          )}
          {item.addOns && item.addOns.length > 0 && (
            <p className="font-body text-xs text-[var(--color-muted)] mt-1">
              {item.addOns.map((a) => `${a.label} +$${a.price}`).join(' · ')}
            </p>
          )}
        </div>

        {/* Price + add control */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <span className="font-body font-semibold text-[var(--color-foreground)] text-sm">
            ${item.price.toFixed(2)}
          </span>

          <AnimatePresence mode="wait">
            {qty === 0 ? (
              <motion.button
                key="add"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: justAdded ? [1, 0.88, 1] : 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.15 }}
                onClick={handleAdd}
                className="bg-[var(--color-primary)] text-white font-body text-sm px-4 py-1.5 rounded hover:bg-[#a81818] transition-colors"
                aria-label={`Add ${item.name} to cart`}
              >
                Add
              </motion.button>
            ) : (
              <motion.div
                key="stepper"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.15 }}
                className="flex items-center border border-[var(--color-navy)] rounded overflow-hidden"
              >
                <button
                  onClick={() => updateQty(item.id, qty - 1)}
                  className="w-7 h-7 flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-accent)] transition-colors font-bold text-base"
                  aria-label={`Remove one ${item.name}`}
                >
                  −
                </button>
                <span className="font-body text-sm font-semibold w-5 text-center select-none">
                  {qty}
                </span>
                <button
                  onClick={() => updateQty(item.id, qty + 1)}
                  className="w-7 h-7 flex items-center justify-center text-[var(--color-navy)] hover:bg-[var(--color-accent)] transition-colors font-bold text-base"
                  aria-label={`Add another ${item.name}`}
                >
                  +
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
