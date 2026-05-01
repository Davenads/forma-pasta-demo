import type { Metadata } from 'next'
import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'
import { MARKET_ITEMS, CONTACT, HOURS_COMPACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Market — Forma Pasta Cafe & Market',
  description:
    'Fresh pasta and house-made sauces available to take home. Pickup during cafe hours. Call ahead to reserve.',
}

export default function MarketPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="/images/food/food-4.jpg"
          alt="Fresh pasta and market items at the Forma Pasta counter"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-2">
            Take-home market
          </p>
          <h1 className="font-display text-4xl md:text-6xl italic font-semibold text-white">
            Take the kitchen home
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 bg-[var(--color-primary)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <SectionReveal>
              <div className="md:col-span-2">
                <p className="font-display text-2xl md:text-3xl italic font-semibold leading-snug mb-3">
                  The same pasta we serve at dinner, available to take home.
                </p>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  Every pasta shape and sauce is made from scratch in our kitchen. What you buy in the market is exactly what&apos;s on the dinner menu, packaged for your table at home.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <p className="font-display text-xl italic font-semibold mb-1">Available during</p>
                <p className="font-body text-sm text-white/80 mb-1">{HOURS_COMPACT.tueFri}</p>
                <p className="font-body text-sm text-white/80 mb-3">{HOURS_COMPACT.satSun}</p>
                <p className="font-body text-xs text-white/60 italic">
                  Call ahead for weekend reservations. Popular items sell out.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Market listings */}
      <section className="py-16 md:py-20 bg-[var(--color-background)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {MARKET_ITEMS.map((category, catIndex) => (
            <SectionReveal key={category.category} delay={catIndex * 0.1}>
              <section className="mb-14">
                <h2 className="font-display text-3xl italic font-semibold text-[var(--color-foreground)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
                  {category.category}
                </h2>

                <div className="flex flex-col divide-y divide-[var(--color-border)]">
                  {category.items.map((item) => (
                    <div key={item.name} className="flex justify-between items-baseline gap-4 py-4">
                      <div className="flex-1">
                        <p className="font-body text-base font-medium text-[var(--color-foreground)]">
                          {item.name}
                        </p>
                        <p className="font-body text-sm text-[var(--color-muted)] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <p className="font-display text-lg italic font-medium text-[var(--color-primary)] whitespace-nowrap">
                        {item.price}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </SectionReveal>
          ))}

          {/* Reserve CTA */}
          <SectionReveal delay={0.2}>
            <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-8 text-center">
              <p className="font-display text-2xl italic font-semibold text-[var(--color-foreground)] mb-3">
                Want to guarantee your order?
              </p>
              <p className="font-body text-sm text-[var(--color-muted)] mb-6 max-w-sm mx-auto leading-relaxed">
                Popular pasta shapes and sauces sell out early, especially on weekends. Call ahead to reserve your order for pickup.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href={`tel:${CONTACT.phone}`} variant="primary">
                  Call to Reserve
                </CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Send a Message
                </CTAButton>
              </div>
              <p className="font-body text-xs text-[var(--color-muted)] mt-5">
                {CONTACT.phone} &mdash; {CONTACT.address}
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Email list CTA */}
      <section className="py-14 bg-[var(--color-secondary)] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-white/60 mb-3">
              Stay in the loop
            </p>
            <h2 className="font-display text-3xl italic font-semibold mb-4">
              Follow us for weekly pasta availability
            </h2>
            <p className="font-body text-sm text-white/70 max-w-md mx-auto mb-6">
              We post fresh pasta availability and market specials on Instagram throughout the week.
            </p>
            <CTAButton href={CONTACT.instagram} external variant="secondary">
              Follow {CONTACT.instagramHandle}
            </CTAButton>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
