'use client'

import { useEffect } from 'react'
import { OrderType, useCart } from '@/context/CartContext'
import { DELIVERY_FEE, DELIVERY_MINIMUM } from '@/lib/menu-data'

export type ServiceWindow = 'lunch' | 'dinner' | 'closed'

function getServiceWindow(): ServiceWindow {
  const now  = new Date()
  const day  = now.getDay()            // 0=Sun 1=Mon … 6=Sat
  const mins = now.getHours() * 60 + now.getMinutes()

  if (day === 1) return 'closed'       // Monday closed

  // Lunch: 9:00am – 2:00pm  (Tue–Sun)
  if (mins >= 540 && mins < 840) return 'lunch'

  // Dinner: 5:00pm – 9:00pm  (Fri & Sat only)
  if ((day === 5 || day === 6) && mins >= 1020 && mins < 1260) return 'dinner'

  return 'closed'
}

const HEADING: Record<ServiceWindow, string> = {
  lunch:  'Lunch is open',
  dinner: 'Dinner service is open',
  closed: 'Currently closed. Browse the menu.',
}

const SUBHEADING: Record<ServiceWindow, string> = {
  lunch:  'Ordering available now · 9am–2pm',
  dinner: 'Ordering available now · Fri–Sat 5–9pm',
  closed: 'We open again next service window',
}

interface OrderHeroProps {
  service: ServiceWindow
  onServiceResolved: (s: ServiceWindow) => void
}

export default function OrderHero({ service, onServiceResolved }: OrderHeroProps) {
  const { orderType, setOrderType } = useCart()

  // Resolve service window (including ?preview= override) on mount
  useEffect(() => {
    const params  = new URLSearchParams(window.location.search)
    const preview = params.get('preview') as ServiceWindow | null
    const valid   = preview && ['lunch', 'dinner', 'closed'].includes(preview)
    onServiceResolved(valid ? (preview as ServiceWindow) : getServiceWindow())
  }, [onServiceResolved])

  return (
    <div className="bg-[var(--color-navy)] text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Heading */}
          <div>
            <h1 className="font-display text-4xl md:text-5xl leading-tight mb-1">
              {HEADING[service]}
            </h1>
            <p className="font-body text-sm text-white/70">{SUBHEADING[service]}</p>
          </div>

          {/* Delivery / Pickup toggle */}
          <div className="flex items-center bg-white/10 rounded-lg p-1 self-start md:self-auto shrink-0">
            {(['delivery', 'pickup'] as OrderType[]).map((type) => (
              <button
                key={type}
                onClick={() => setOrderType(type)}
                className={`font-body text-sm font-medium px-5 py-2 rounded-md transition-all capitalize ${
                  orderType === type
                    ? 'bg-white text-[var(--color-navy)] shadow-sm'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Info strip */}
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-sm text-white/60">
          <span>
            Delivery fee:{' '}
            <span className="text-white font-medium">${DELIVERY_FEE.toFixed(2)}</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            Minimum:{' '}
            <span className="text-white font-medium">${DELIVERY_MINIMUM.toFixed(2)}</span>
          </span>
          <span className="hidden sm:inline">·</span>
          <span>
            Est. delivery:{' '}
            <span className="text-white font-medium">35–45 min</span>
          </span>
        </div>
      </div>
    </div>
  )
}
