import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'

const marketItems = [
  'Tagliatelle', 'Pappardelle', 'Rigatoni', 'Orecchiette',
  'Sunday Bolognese', 'Norma Sauce', 'Pesto Genovese', 'Fresh Ricotta',
]

export default function MarketCallout() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <SectionReveal direction="right">
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=800&q=80"
                alt="Fresh pasta and house-made sauces available at the market counter"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </SectionReveal>

          {/* Text */}
          <SectionReveal direction="left" delay={0.15}>
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-3">
                The market
              </p>
              <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-[var(--color-foreground)] leading-tight mb-5">
                Take the kitchen home
              </h2>
              <p className="font-body text-base text-[var(--color-muted)] leading-relaxed mb-6">
                Fresh pasta varieties and house-made sauces are available during all cafe hours. Pick up the same pasta we serve at dinner — made that morning.
              </p>

              {/* Item grid */}
              <div className="flex flex-wrap gap-2 mb-8">
                {marketItems.map((item) => (
                  <span
                    key={item}
                    className="font-body text-xs px-3 py-1.5 bg-[var(--color-accent)]/40 text-[var(--color-foreground)] rounded-full border border-[var(--color-border)]"
                  >
                    {item}
                  </span>
                ))}
                <span className="font-body text-xs px-3 py-1.5 text-[var(--color-muted)] italic">
                  + more
                </span>
              </div>

              <p className="font-body text-sm text-[var(--color-muted)] italic mb-8">
                Call ahead to reserve — popular items sell out early on weekends.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/market" variant="primary">
                  See the Market
                </CTAButton>
                <CTAButton href="tel:+14125867195" variant="secondary">
                  Call to Reserve
                </CTAButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
