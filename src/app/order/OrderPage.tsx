'use client'

import { useState, useCallback } from 'react'
import { CartProvider } from '@/context/CartContext'
import { MENU_ITEMS, MENU_CATEGORIES, MenuAvailability } from '@/lib/menu-data'
import OrderHero, { ServiceWindow } from '@/components/order/OrderHero'
import CategoryNav from '@/components/order/CategoryNav'
import MenuSection from '@/components/order/MenuSection'
import CartSidebar from '@/components/order/CartSidebar'
import CartFloatingBar from '@/components/order/CartFloatingBar'

function OrderPageContent() {
  // Default to 'closed'; resolved immediately on mount by OrderHero
  const [service, setService] = useState<ServiceWindow>('closed')

  const handleServiceResolved = useCallback((s: ServiceWindow) => {
    setService(s)
  }, [])

  // When closed, show all items (full browse mode)
  const effectiveAvailability: MenuAvailability | 'both' =
    service === 'closed' ? 'both' : service

  const visibleCategories = MENU_CATEGORIES.filter((cat) => {
    if (effectiveAvailability === 'both') return true
    return cat.availability === effectiveAvailability || cat.availability === 'both'
  })

  function getItemsForCategory(categoryId: string) {
    return MENU_ITEMS.filter((item) => {
      if (item.category !== categoryId) return false
      if (effectiveAvailability === 'both') return true
      return item.availability === effectiveAvailability || item.availability === 'both'
    })
  }

  return (
    <div className="min-h-screen pb-20 lg:pb-0">
      <OrderHero service={service} onServiceResolved={handleServiceResolved} />

      <CategoryNav
        categories={visibleCategories}
        service={effectiveAvailability === 'both' ? 'closed' : effectiveAvailability}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {service === 'closed' && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3 mb-8 font-body text-sm text-amber-800">
            We&apos;re currently closed. Browse the full menu below and come back
            during service hours to place your order.
          </div>
        )}

        <div className="flex gap-8 items-start">
          {/* Menu items */}
          <div className="flex-1 min-w-0 flex flex-col gap-12">
            {visibleCategories.map((cat) => {
              const items = getItemsForCategory(cat.id)
              return items.length > 0 ? (
                <MenuSection key={cat.id} category={cat} items={items} />
              ) : null
            })}
          </div>

          {/* Desktop cart sidebar */}
          <div className="w-72 shrink-0">
            <CartSidebar />
          </div>
        </div>
      </div>

      {/* Mobile floating cart bar */}
      <CartFloatingBar />
    </div>
  )
}

export default function OrderPage() {
  return (
    <CartProvider>
      <OrderPageContent />
    </CartProvider>
  )
}
