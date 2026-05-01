import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'

export default function ClassesCallout() {
  return (
    <section className="relative py-24 md:py-36 overflow-hidden">
      {/* Background */}
      <Image
        src="/images/misc/classes-1.png"
        alt="Pasta class in session — hands pressing pasta dough"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <SectionReveal>
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-4">
              Pasta classes
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-white leading-tight mb-6">
              Learn to make fresh pasta from scratch
            </h2>
            <p className="font-body text-base text-white/75 leading-relaxed mb-8">
              Hands-on classes for couples, friends, and private groups. You learn the dough, the shapes, and the sauces. Then you sit down to eat what you made. BYOB encouraged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton href="/classes" variant="primary">
                See Class Options
              </CTAButton>
              <CTAButton href="/classes#book" variant="secondary">
                Book Now
              </CTAButton>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-3 gap-6 mt-12 border-t border-white/20 pt-8">
              {[
                { value: '2.5–3hrs', label: 'Per class' },
                { value: 'Up to 12', label: 'Group size' },
                { value: 'BYOB', label: 'Encouraged' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-2xl md:text-3xl italic font-semibold text-[var(--color-primary)]">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-white/60 mt-1 tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
