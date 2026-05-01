import type { Metadata } from 'next'
import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'
import { CONTACT } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About',
  description:
    "The story behind Forma Pasta — fresh pasta made from scratch every morning at 531 Beaver Street in Sewickley, PA.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-72 md:h-[450px] flex items-end overflow-hidden">
        <Image
          src="/images/hero/hero-2.jpg"
          alt="Pasta kitchen — fresh dough being worked on a wooden board"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-2">
            Our story
          </p>
          <h1 className="font-display text-4xl md:text-6xl italic font-semibold text-white leading-tight">
            Made in Sewickley.
            <br />
            Every morning.
          </h1>
        </div>
      </div>

      {/* Story section */}
      <section className="py-16 md:py-24 bg-[var(--color-background)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="flex flex-col gap-8 font-body text-base text-[var(--color-muted)] leading-relaxed">
              <p className="font-display text-2xl md:text-3xl italic text-[var(--color-foreground)] leading-snug">
                Before the doors open each morning, the kitchen is already at work. Dough is being mixed. Pasta is being cut. Sauce is on the stove.
              </p>

              <p>
                Forma Pasta started with a simple idea: that fresh pasta doesn&apos;t have to be a special-occasion thing. It can be what you eat on a Tuesday. It can be what you pick up on the way home. It can be what you learn to make with your hands on a Saturday afternoon.
              </p>

              <p>
                Every shape, every sauce, every jar in the market case is made in our kitchen at 531 Beaver Street in Sewickley. Not a central commissary, not a distributor. This kitchen. That morning.
              </p>

              <p>
                We are a small place on purpose. The dining room holds a few tables. The menu is focused. The pasta-making classes happen in the same space where we cook every day, because we wanted it to feel real, not theatrical.
              </p>

              <p>
                BYOB was never a marketing decision. We just think people should be able to bring wine they love without paying a markup for the privilege. The food is better when the table is relaxed.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Kitchen philosophy */}
      <section className="py-16 md:py-20 bg-[var(--color-foreground)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-accent)]">
                What we believe about food
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Fresh is not a marketing term',
                body: 'Every pasta shape you eat here or take home was made this morning. Not yesterday. Not from frozen. The difference is in the texture and the taste. You notice it immediately.',
              },
              {
                title: 'Simple done well beats complex done sloppily',
                body: 'Cacio e pepe is four ingredients. Pasta al burro is three. The discipline is in the execution. We don\'t add complexity to make food seem more serious.',
              },
              {
                title: 'The neighborhood matters',
                body: 'We are on Beaver Street in Sewickley because this community supports independent food businesses. We want to be the place people walk to on a weeknight and feel glad they did.',
              },
            ].map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.1}>
                <div className="border-t-2 border-[var(--color-primary)] pt-6">
                  <h3 className="font-display text-xl italic font-semibold text-[var(--color-accent)] mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-accent)]/70 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="py-16 md:py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  src: '/images/food/food-7.png',
                  alt: 'Fresh pasta dough ball on a wooden board',
                },
                {
                  src: '/images/food/food-8.jpg',
                  alt: 'Hand-rolling fresh tagliatelle',
                },
                {
                  src: '/images/food/food-9.png',
                  alt: 'Pasta class in the Forma kitchen',
                },
                {
                  src: '/images/hero/hero-3.jpg',
                  alt: 'Plated pasta dish at Forma Pasta',
                },
              ].map((photo) => (
                <div key={photo.src} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl italic font-semibold text-[var(--color-foreground)] mb-4">
              Come see us
            </h2>
            <p className="font-body text-sm text-[var(--color-muted)] mb-8 max-w-sm mx-auto">
              {CONTACT.address}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/menu" variant="primary">
                View the Menu
              </CTAButton>
              <CTAButton href="/contact" variant="secondary">
                Get Directions
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
