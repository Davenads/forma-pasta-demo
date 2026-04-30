import Image from 'next/image'
import Link from 'next/link'
import SectionReveal from '@/components/ui/SectionReveal'

const pillars = [
  {
    title: 'Cafe',
    subtitle: 'Tue–Fri 8am–4pm | Sat–Sun 8am–2pm | Fri–Sat dinner 5–9pm',
    description:
      'Breakfast, lunch, and weekend brunch built around fresh pasta. Seasonal specials, house-baked items, and a menu that changes with what\'s coming out of the kitchen.',
    cta: { label: 'See the Menu', href: '/menu' },
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    imageAlt: 'Rustic pasta dish plated in a warm restaurant setting',
  },
  {
    title: 'Classes',
    subtitle: 'Private, couples, and group sessions',
    description:
      'Learn to make fresh pasta from scratch — dough, shape, and sauce. Perfect for date nights, birthdays, and team events. You take home what you make.',
    cta: { label: 'Book a Class', href: '/classes' },
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80',
    imageAlt: 'Hands working pasta dough on a floured surface in a cooking class',
  },
  {
    title: 'Market',
    subtitle: 'Fresh pasta and house sauces to go',
    description:
      'Take the kitchen home. Fresh pasta varieties, house-made sauces, and seasonal market items available during cafe hours. Call ahead to reserve.',
    cta: { label: 'Shop the Market', href: '/market' },
    image: 'https://images.unsplash.com/photo-1474679902186-55ed43c66cca?w=800&q=80',
    imageAlt: 'Jars of artisan pasta sauces and fresh pasta packages at a market counter',
  },
]

export default function ThreePillars() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-14">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
              What we are
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold italic text-[var(--color-foreground)]">
              More than a restaurant
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.12}>
              <article className="group flex flex-col bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={pillar.image}
                    alt={pillar.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 font-display text-3xl italic font-semibold text-white">
                    {pillar.title}
                  </h3>
                </div>
                <div className="flex flex-col flex-1 p-6 gap-3">
                  <p className="font-body text-xs text-[var(--color-primary)] tracking-wide">
                    {pillar.subtitle}
                  </p>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed flex-1">
                    {pillar.description}
                  </p>
                  <Link
                    href={pillar.cta.href}
                    className="font-body text-sm font-medium text-[var(--color-primary)] inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all"
                  >
                    {pillar.cta.label}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
