import type { Metadata } from 'next'
import Image from 'next/image'
import SectionReveal from '@/components/ui/SectionReveal'
import ClassBookingForm from '@/components/sections/ClassBookingForm'
import TestimonialCarousel from '@/components/ui/TestimonialCarousel'
import { PASTA_CLASS_TYPES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Pasta Classes — Forma Pasta Cafe & Market',
  description:
    'Learn to make fresh pasta from scratch in Sewickley, PA. Hands-on classes for couples, groups, and private events. Book your pasta class today.',
}

const occasions = [
  { label: 'Date night', icon: '♥' },
  { label: 'Birthday', icon: '★' },
  { label: 'Team outing', icon: '◆' },
  { label: 'Private event', icon: '◉' },
  { label: 'Gift experience', icon: '◈' },
  { label: 'Just for fun', icon: '◎' },
]

export default function ClassesPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative h-80 md:h-[500px] flex items-end overflow-hidden">
        <Image
          src="/images/misc/classes-2.jpg"
          alt="Hands pressing fresh pasta dough in a pasta class"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 w-full">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-2">
            Hands-on classes
          </p>
          <h1 className="font-display text-4xl md:text-6xl italic font-semibold text-white leading-tight">
            Learn to make
            <br />
            fresh pasta from scratch
          </h1>
        </div>
      </div>

      {/* Intro */}
      <section className="py-16 md:py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal>
              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
                  What to expect
                </p>
                <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)] mb-5 leading-tight">
                  Make it. Eat it. Take it home.
                </h2>
                <div className="flex flex-col gap-4 text-[var(--color-muted)] font-body text-sm leading-relaxed">
                  <p>
                    Every class starts with dough. You learn to feel when it&apos;s right and why it matters. Then you shape, cut, or fill, depending on the class.
                  </p>
                  <p>
                    We cook what you made. You sit down and eat it. Bring a bottle of wine, invite someone you like, and take your time.
                  </p>
                  <p>
                    You leave with a recipe card and a portion of fresh pasta to make at home. No experience necessary. We teach from scratch.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-4">
                    Perfect for
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {occasions.map((occasion) => (
                      <span
                        key={occasion.label}
                        className="font-body text-xs px-3 py-1.5 bg-[var(--color-accent)]/40 text-[var(--color-foreground)] rounded-full border border-[var(--color-border)]"
                      >
                        {occasion.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionReveal>

            <SectionReveal direction="left" delay={0.15}>
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                  <Image
                    src="/images/misc/classes-3.jpg"
                    alt="Close-up of hands working pasta dough during a class"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[var(--color-primary)] text-white rounded-lg p-4 shadow-lg">
                  <p className="font-display text-lg italic">BYOB encouraged</p>
                  <p className="font-body text-xs text-white/80 mt-0.5">Bring your favorite bottle</p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Class types */}
      <section className="py-16 md:py-20 bg-[var(--color-card)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
                Class options
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)]">
                Pick your class
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PASTA_CLASS_TYPES.map((classType, i) => (
              <SectionReveal key={classType.name} delay={i * 0.1}>
                <article className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg p-7 flex flex-col h-full">
                  <h3 className="font-display text-2xl italic font-semibold text-[var(--color-foreground)] mb-3">
                    {classType.name}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-5 flex-1">
                    {classType.description}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-4 border-t border-[var(--color-border)]">
                    <span className="font-body text-xs px-3 py-1 bg-[var(--color-accent)]/40 rounded-full text-[var(--color-foreground)]">
                      {classType.duration}
                    </span>
                    <span className="font-body text-xs px-3 py-1 bg-[var(--color-accent)]/40 rounded-full text-[var(--color-foreground)]">
                      {classType.groupSize}
                    </span>
                    <span className="font-body text-xs px-3 py-1 bg-[var(--color-primary)] text-white rounded-full font-medium">
                      {classType.price}
                    </span>
                  </div>
                </article>
              </SectionReveal>
            ))}
          </div>

          {/* Policies */}
          <SectionReveal delay={0.2}>
            <div className="mt-10 bg-[var(--color-foreground)] text-[var(--color-accent)] rounded-lg p-7">
              <h3 className="font-display text-xl italic font-semibold mb-4">
                Policies & good-to-knows
              </h3>
              <ul className="font-body text-sm text-[var(--color-accent)]/80 leading-relaxed flex flex-col gap-2">
                <li>Booking requires a deposit; balance due on the day of class</li>
                <li>Cancellations accepted up to 72 hours in advance for a full refund</li>
                <li>BYOB is enthusiastically encouraged. No corkage fee.</li>
                <li>We accommodate dietary restrictions; please note in your inquiry</li>
                <li>Minimum 2 guests per booking; private events may have custom minimums</li>
                <li>All classes held at Forma Pasta, 531 Beaver Street, Sewickley</li>
              </ul>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
                What people say about classes
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)]">
                From past students
              </h2>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <TestimonialCarousel />
          </SectionReveal>
        </div>
      </section>

      {/* Booking form */}
      <section id="book" className="py-16 md:py-20 bg-[var(--color-card)]">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-10">
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
                Get started
              </p>
              <h2 className="font-display text-3xl md:text-4xl italic font-semibold text-[var(--color-foreground)] mb-3">
                Book a class
              </h2>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Fill out the form below and we&apos;ll get back to you within 24 hours to confirm availability and details.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <ClassBookingForm />
          </SectionReveal>
        </div>
      </section>
    </>
  )
}
