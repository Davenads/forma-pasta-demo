'use client'

import { MenuCategory } from '@/lib/menu-data'

type ServiceDisplay = 'lunch' | 'dinner' | 'both' | 'closed'

interface CategoryNavProps {
  categories: MenuCategory[]
  service: ServiceDisplay
}

export default function CategoryNav({ categories, service }: CategoryNavProps) {
  const visible = categories.filter((cat) => {
    if (service === 'closed' || service === 'both') return true
    return cat.availability === service || cat.availability === 'both'
  })

  function scrollTo(id: string) {
    const el = document.getElementById(`section-${id}`)
    if (!el) return
    const navbarH = window.innerWidth >= 768 ? 80 : 64
    const catNavH = 56
    const top = el.getBoundingClientRect().top + window.scrollY - navbarH - catNavH
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <nav
      className="sticky top-16 md:top-20 z-40 bg-white border-b border-[var(--color-border)] shadow-sm"
      aria-label="Menu categories"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden">
          {visible.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollTo(cat.id)}
              className="font-body text-xs sm:text-sm font-medium tracking-wide uppercase whitespace-nowrap px-4 sm:px-5 py-4 border-b-2 border-transparent hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] text-[var(--color-muted)] transition-colors shrink-0"
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
