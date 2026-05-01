import type { Metadata } from 'next'
import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'
import { BYOB_NOTE, TOAST_ORDER_URL, OPENTABLE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Menu',
  description:
    'Fresh pasta menu with seasonal dishes served at 531 Beaver Street, Sewickley. Breakfast, lunch, brunch, and dinner. All pasta made in-house daily. BYOB welcome.',
}

const breakfastLunchItems = [
  {
    name: 'Soft Egg Tagliatelle',
    description: 'Fresh egg tagliatelle, soft-poached egg, truffle butter, parmesan, chive',
    price: '$18',
  },
  {
    name: 'Cacio e Pepe',
    description: 'Hand-rolled tonnarelli, Pecorino Romano, black pepper. Classic.',
    price: '$16',
  },
  {
    name: 'Pasta al Pomodoro',
    description: 'Rigatoni, slow-roasted San Marzano tomato, basil, olive oil',
    price: '$15',
  },
  {
    name: 'Pasta al Burro',
    description: 'Fresh egg pasta, cultured butter, sage, pinch of nutmeg',
    price: '$14',
  },
  {
    name: 'Cafe Sandwich',
    description: 'Rotating daily. House-made focaccia, market ingredients. Ask your server.',
    price: '$13',
  },
  {
    name: 'Soup & Bread',
    description: 'House soup of the day with crusty bread and butter',
    price: '$11',
  },
]

const brunchItems = [
  {
    name: 'Brunch Tagliatelle',
    description: 'Fresh tagliatelle, pancetta, runny egg, parmesan, lemon',
    price: '$19',
  },
  {
    name: 'Pappardelle Boscaiola',
    description: 'Wide pappardelle, wild mushroom, cream, thyme, parmesan',
    price: '$20',
  },
  {
    name: 'Frittata del Giorno',
    description: 'Rotating seasonal frittata with house salad and bread',
    price: '$16',
  },
  {
    name: 'French Toast alla Forma',
    description: 'Thick-cut house bread, maple mascarpone, seasonal compote',
    price: '$14',
  },
  {
    name: 'Espresso & Pastry',
    description: 'Double espresso and a rotating daily pastry',
    price: '$9',
  },
  {
    name: 'Avocado Toast',
    description: 'House sourdough, whipped ricotta, avocado, chili flake, lemon',
    price: '$13',
  },
]

const dinnerItems = [
  {
    name: 'Rigatoni alla Norma',
    description:
      'Roasted eggplant, San Marzano tomato, fresh basil, house ricotta salata. Our most-ordered dish.',
    price: '$24',
  },
  {
    name: 'Pappardelle al Ragu',
    description: 'Slow-braised short rib ragu, fresh pappardelle, gremolata, parmesan',
    price: '$28',
  },
  {
    name: 'Tagliatelle al Burro e Tartufo',
    description: 'Fresh egg tagliatelle, brown butter, black truffle, aged parmesan',
    price: '$32',
  },
  {
    name: 'Orecchiette con Salsiccia',
    description: 'Hand-formed orecchiette, house Italian sausage, broccoli rabe, chili',
    price: '$26',
  },
  {
    name: 'Pasta di Stagione',
    description: 'Chef\'s seasonal pasta. Ask your server for tonight\'s preparation.',
    price: 'Market',
  },
  {
    name: 'Antipasto della Casa',
    description: 'Rotating house charcuterie, pickles, cheese, grilled bread',
    price: '$18',
  },
  {
    name: 'Insalata Verde',
    description: 'Seasonal greens, shaved fennel, lemon vinaigrette, parmesan',
    price: '$12',
  },
  {
    name: 'Tiramisu',
    description: 'House-made, classic, always on the menu',
    price: '$10',
  },
]

interface MenuSectionProps {
  title: string
  subtitle: string
  items: { name: string; description: string; price: string }[]
  note?: string
}

function MenuSection({ title, subtitle, items, note }: MenuSectionProps) {
  return (
    <SectionReveal>
      <section className="mb-16 md:mb-20">
        <div className="mb-8">
          <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)] mb-1">
            {title}
          </h2>
          <p className="font-body text-sm text-[var(--color-muted)]">{subtitle}</p>
        </div>

        <div className="flex flex-col divide-y divide-[var(--color-border)]">
          {items.map((item) => (
            <div key={item.name} className="flex justify-between gap-4 py-5">
              <div className="flex-1">
                <p className="font-body text-base font-medium text-[var(--color-foreground)] mb-1">
                  {item.name}
                </p>
                <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
              <p className="font-display text-lg italic font-medium text-[var(--color-primary)] whitespace-nowrap">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {note && (
          <p className="mt-6 font-body text-sm text-[var(--color-muted)] italic border-l-2 border-[var(--color-primary)] pl-4">
            {note}
          </p>
        )}
      </section>
    </SectionReveal>
  )
}

export default function MenuPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="/images/food/food-1.jpg"
          alt="Rustic pasta dish on a warm restaurant table"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-2">
            Our menu
          </p>
          <h1 className="font-display text-4xl md:text-6xl italic font-semibold text-white">
            Made from scratch. Every day.
          </h1>
        </div>
      </div>

      {/* Menu content */}
      <div className="bg-[var(--color-background)] py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Key notes */}
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-5 text-center">
                <p className="font-display text-lg italic text-[var(--color-primary)] mb-1">
                  All pasta made fresh
                </p>
                <p className="font-body text-xs text-[var(--color-muted)]">
                  in-house every morning
                </p>
              </div>
              <div className="flex-1 bg-[var(--color-primary)] rounded-lg p-5 text-center text-white">
                <p className="font-display text-lg italic mb-1">BYOB welcome</p>
                <p className="font-body text-xs text-white/70">
                  Bring your favorite bottle and we&apos;ll provide the glasses
                </p>
              </div>
              <div className="flex-1 bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-5 text-center">
                <p className="font-display text-lg italic text-[var(--color-secondary)] mb-1">
                  Seasonal menu
                </p>
                <p className="font-body text-xs text-[var(--color-muted)]">
                  dishes rotate with the season
                </p>
              </div>
            </div>
          </SectionReveal>

          <MenuSection
            title="Breakfast & Lunch"
            subtitle="Tuesday – Friday, 8am–4pm"
            items={breakfastLunchItems}
            note="Menu items rotate seasonally. Ask about today's specials."
          />

          <div className="border-t-2 border-[var(--color-border)] mb-16 md:mb-20" />

          <MenuSection
            title="Brunch"
            subtitle="Saturday & Sunday, 8am–2pm"
            items={brunchItems}
            note={BYOB_NOTE}
          />

          <div className="border-t-2 border-[var(--color-border)] mb-16 md:mb-20" />

          <MenuSection
            title="Dinner"
            subtitle="Friday & Saturday, 5–9pm. Reservations recommended."
            items={dinnerItems}
            note="Dinner is where we go deepest. BYOB welcome, no corkage fee."
          />

          {/* CTAs */}
          <SectionReveal>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 pt-8 border-t border-[var(--color-border)]">
              <CTAButton href={TOAST_ORDER_URL} external variant="primary">
                Order Online
              </CTAButton>
              <CTAButton href={OPENTABLE_URL} external variant="secondary">
                Reserve on OpenTable
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </div>
    </>
  )
}
