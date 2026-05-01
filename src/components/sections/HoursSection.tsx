import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'
import { HOURS, CONTACT, BYOB_NOTE, OPENTABLE_URL } from '@/lib/constants'

export default function HoursSection() {
  return (
    <section className="py-20 md:py-28 bg-[var(--color-background)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Hours */}
          <SectionReveal>
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-muted)] mb-3">
                When we&apos;re open
              </p>
              <h2 className="font-display text-4xl md:text-5xl italic font-semibold text-[var(--color-foreground)] mb-8">
                Hours
              </h2>

              <div className="flex flex-col gap-0 divide-y divide-[var(--color-border)]">
                {HOURS.map((entry) => (
                  <div
                    key={entry.days}
                    className="flex justify-between items-baseline py-4"
                  >
                    <div>
                      <p className="font-body text-base font-medium text-[var(--color-foreground)]">
                        {entry.days}
                      </p>
                      {entry.label && (
                        <p className="font-body text-xs text-[var(--color-muted)] mt-0.5">
                          {entry.label}
                        </p>
                      )}
                    </div>
                    <p
                      className={`font-body text-sm ${
                        entry.times === 'Closed'
                          ? 'text-[var(--color-muted)]'
                          : 'text-[var(--color-primary)] font-medium'
                      }`}
                    >
                      {entry.times}
                    </p>
                  </div>
                ))}
              </div>

              <p className="font-body text-xs text-[var(--color-muted)] mt-6">
                Hours may vary on holidays. Call ahead or check Instagram.
              </p>
            </div>
          </SectionReveal>

          {/* Visit info */}
          <SectionReveal delay={0.15}>
            <div className="flex flex-col gap-8">
              {/* BYOB callout */}
              <div className="bg-[var(--color-primary)] text-white rounded-lg p-7">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-white/70 mb-2">
                  Good to know
                </p>
                <p className="font-display text-2xl italic font-semibold leading-snug mb-3">
                  BYOB welcome.
                </p>
                <p className="font-body text-sm text-white/80 leading-relaxed">
                  {BYOB_NOTE}
                </p>
              </div>

              {/* Contact + reservations */}
              <div className="border border-[var(--color-border)] rounded-lg p-7 flex flex-col gap-4">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-1">
                  Find us
                </p>
                <address className="not-italic font-body text-sm text-[var(--color-foreground)] leading-relaxed">
                  {CONTACT.address}
                </address>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="font-body text-sm text-[var(--color-primary)] hover:underline w-fit"
                >
                  {CONTACT.phone}
                </a>
                <p className="font-body text-sm text-[var(--color-muted)]">
                  Reservations recommended for Friday & Saturday dinner.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <CTAButton href={OPENTABLE_URL} external variant="primary">
                    Reserve on OpenTable
                  </CTAButton>
                  <CTAButton href="/contact" variant="secondary">
                    Contact Us
                  </CTAButton>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
