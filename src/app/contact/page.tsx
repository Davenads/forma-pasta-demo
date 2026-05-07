import type { Metadata } from 'next'
import SectionReveal from '@/components/ui/SectionReveal'
import CTAButton from '@/components/ui/CTAButton'
import ContactForm from '@/components/sections/ContactForm'
import JsonLd from '@/components/JsonLd'
import { CONTACT, HOURS, OPENTABLE_URL, BYOB_NOTE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact & Hours',
  description:
    'Find Forma Pasta at 531 Beaver Street in Sewickley, PA. Hours, directions, and contact information.',
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://forma-pasta.vercel.app' },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://forma-pasta.vercel.app/contact' },
        ],
      }} />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Where is Forma Pasta located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: '531 Beaver Street, Sewickley, PA 15143.',
            },
          },
          {
            '@type': 'Question',
            name: "What are Forma Pasta's hours?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Tuesday through Friday 8am to 4pm (cafe and lunch), Saturday and Sunday 8am to 2pm (brunch), Friday and Saturday 5pm to 9pm (dinner). Closed Monday.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact Forma Pasta?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Call us at (412) 586-7195 or send a message using the contact form on this page.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does Forma Pasta take reservations?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, reservations are available online. Walk-ins are welcome based on availability.',
            },
          },
        ],
      }} />
      {/* Page header */}
      <div className="pt-32 pb-12 bg-[var(--color-foreground)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-body text-xs tracking-[0.25em] uppercase text-[var(--color-primary)] mb-2">
            Get in touch
          </p>
          <h1 className="font-display text-4xl md:text-6xl italic font-semibold text-[var(--color-accent)]">
            Contact & Find Us
          </h1>
        </div>
      </div>

      <section className="py-16 md:py-20 bg-[var(--color-background)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: info */}
            <div className="flex flex-col gap-8">
              {/* Address */}
              <SectionReveal>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-3">
                    Address
                  </p>
                  <address className="not-italic">
                    <p className="font-body text-lg font-medium text-[var(--color-foreground)] mb-1">
                      {CONTACT.address}
                    </p>
                    <p className="font-body text-sm text-[var(--color-muted)] mb-3">
                      On Beaver Street in Sewickley Village. Street parking available.
                    </p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-sm text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
                    >
                      Get directions
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </address>
                </div>
              </SectionReveal>

              {/* Phone */}
              <SectionReveal delay={0.05}>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-2">
                    Phone
                  </p>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="font-body text-lg font-medium text-[var(--color-foreground)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </SectionReveal>

              {/* Hours */}
              <SectionReveal delay={0.1}>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-3">
                    Hours
                  </p>
                  <div className="flex flex-col divide-y divide-[var(--color-border)]">
                    {HOURS.map((entry) => (
                      <div key={entry.days} className="flex justify-between py-3">
                        <div>
                          <p className="font-body text-sm font-medium text-[var(--color-foreground)]">
                            {entry.days}
                          </p>
                          {entry.label && (
                            <p className="font-body text-xs text-[var(--color-muted)]">{entry.label}</p>
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
                </div>
              </SectionReveal>

              {/* Reservations */}
              <SectionReveal delay={0.15}>
                <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-6">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-3">
                    Reservations
                  </p>
                  <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed mb-4">
                    Reservations are recommended for Friday and Saturday dinner. Call us directly or use OpenTable.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <CTAButton href={OPENTABLE_URL} external variant="primary">
                      Reserve on OpenTable
                    </CTAButton>
                    <CTAButton href={`tel:${CONTACT.phone}`} variant="secondary">
                      Call Us
                    </CTAButton>
                  </div>
                </div>
              </SectionReveal>

              {/* BYOB */}
              <SectionReveal delay={0.2}>
                <div className="bg-[var(--color-primary)] text-white rounded-lg p-5">
                  <p className="font-display text-xl italic font-semibold mb-2">BYOB welcome</p>
                  <p className="font-body text-sm text-white/80">{BYOB_NOTE}</p>
                </div>
              </SectionReveal>
            </div>

            {/* Right: map + form */}
            <div className="flex flex-col gap-10">
              {/* Map */}
              <SectionReveal direction="left">
                <div className="rounded-lg overflow-hidden border border-[var(--color-border)] aspect-video">
                  <iframe
                    title="Forma Pasta location on Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.857899406849!2d-80.18692!3d40.5370599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883441d14e0c0001%3A0x5c7e1b3d9b8df42b!2s531+Beaver+St%2C+Sewickley%2C+PA+15143!5e0!3m2!1sen!2sus!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </SectionReveal>

              {/* Contact form */}
              <SectionReveal direction="left" delay={0.1}>
                <div>
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-muted)] mb-3">
                    Send a message
                  </p>
                  <h2 className="font-display text-2xl italic font-semibold text-[var(--color-foreground)] mb-6">
                    Questions? We&apos;d love to hear from you.
                  </h2>
                  <ContactForm />
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
