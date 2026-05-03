import { MenuItem, MenuCategory } from '@/lib/menu-data'
import MenuItemCard from './MenuItemCard'

interface MenuSectionProps {
  category: MenuCategory
  items: MenuItem[]
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  if (items.length === 0) return null

  return (
    <section id={`section-${category.id}`} className="scroll-mt-36">
      <div className="mb-4">
        <h2 className="font-display text-3xl leading-tight">{category.label}</h2>
        {category.availability !== 'both' && (
          <p className="font-body text-xs text-[var(--color-muted)] mt-1 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] inline-block shrink-0" />
            {category.availability === 'lunch'
              ? 'Lunch only · Available 9am–2pm'
              : 'Dinner only · Fri–Sat 5–9pm'}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
