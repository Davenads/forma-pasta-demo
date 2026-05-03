import { DietaryFlag } from '@/lib/menu-data'

const LABELS: Record<DietaryFlag, string> = {
  V:  'Vegetarian',
  GF: 'Gluten-Free',
}

const COLORS: Record<DietaryFlag, string> = {
  V:  'bg-[var(--color-secondary)] text-white',
  GF: 'bg-amber-100 text-amber-800',
}

export default function DietaryBadge({ flag }: { flag: DietaryFlag }) {
  return (
    <span
      title={LABELS[flag]}
      className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-body font-semibold tracking-wide uppercase ${COLORS[flag]}`}
    >
      {flag}
    </span>
  )
}
