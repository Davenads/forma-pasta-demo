import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'

const thisWeeksPasta = {
  name: 'Rigatoni alla Norma',
  description:
    'Bronze-die rigatoni tossed with roasted eggplant, San Marzano tomato, fresh basil, and house-made ricotta salata. A Sicilian classic — in the shop now.',
  pairing: 'Pairs beautifully with a light Sicilian red.',
  image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=1200&q=80',
  imageAlt: 'Rigatoni alla Norma with eggplant and ricotta salata in a rustic bowl',
}

export default function WeeklyPasta() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-foreground)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <SectionReveal direction="right">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-3">
                This week&apos;s pasta
              </p>
              <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-[var(--color-accent)] leading-tight mb-5">
                {thisWeeksPasta.name}
              </h2>
              <p className="font-body text-base text-[var(--color-accent)]/70 leading-relaxed mb-4">
                {thisWeeksPasta.description}
              </p>
              <p className="font-body text-sm text-[var(--color-primary)] italic mb-8">
                {thisWeeksPasta.pairing}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton href="/menu" variant="primary">
                  Full Menu
                </CTAButton>
                <CTAButton href="/market" variant="secondary">
                  Take It Home
                </CTAButton>
              </div>
            </div>
          </SectionReveal>

          {/* Image */}
          <SectionReveal direction="left" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src={thisWeeksPasta.image}
                alt={thisWeeksPasta.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
