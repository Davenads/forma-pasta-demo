import SectionReveal from '@/components/ui/SectionReveal'
import TestimonialCarousel from '@/components/ui/TestimonialCarousel'

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-card)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
              What guests say
            </p>
            <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-[var(--color-foreground)]">
              From the regulars
            </h2>
          </div>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <TestimonialCarousel />
        </SectionReveal>
      </div>
    </section>
  )
}
