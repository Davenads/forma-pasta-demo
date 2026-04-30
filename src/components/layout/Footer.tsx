import Link from 'next/link'
import { CONTACT, HOURS_COMPACT, NAV_LINKS, SITE_NAME, BYOB_NOTE, TOAST_ORDER_URL, OPENTABLE_URL } from '@/lib/constants'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[var(--color-foreground)] text-[var(--color-accent)] pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-display font-semibold text-2xl italic text-[var(--color-primary)]">
                Forma
              </span>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]/60 mt-0.5">
                Pasta · Cafe · Market
              </p>
            </div>
            <p className="font-body text-sm text-[var(--color-accent)]/70 leading-relaxed mb-4">
              {BYOB_NOTE}
            </p>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm text-[var(--color-primary)] hover:text-[var(--color-primary)]/80 transition-colors"
              aria-label="Forma Pasta on Instagram"
            >
              {CONTACT.instagramHandle}
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]/50 mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-[var(--color-accent)]/80 hover:text-[var(--color-primary)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]/50 mb-4">
              Hours
            </h3>
            <ul className="flex flex-col gap-2">
              <li className="font-body text-sm text-[var(--color-accent)]/80">
                {HOURS_COMPACT.tueFri}
              </li>
              <li className="font-body text-sm text-[var(--color-accent)]/80">
                {HOURS_COMPACT.satSun}
              </li>
              <li className="font-body text-sm text-[var(--color-primary)]">
                {HOURS_COMPACT.dinner}
              </li>
              <li className="font-body text-sm text-[var(--color-accent)]/50">
                {HOURS_COMPACT.closed}
              </li>
            </ul>
            <div className="mt-4 flex flex-col gap-2">
              <a
                href={OPENTABLE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-[var(--color-primary)] hover:underline"
              >
                Reserve via OpenTable
              </a>
              <a
                href={TOAST_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-[var(--color-primary)] hover:underline"
              >
                Order Online (Toast)
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs tracking-[0.2em] uppercase text-[var(--color-accent)]/50 mb-4">
              Find Us
            </h3>
            <address className="not-italic flex flex-col gap-2">
              <p className="font-body text-sm text-[var(--color-accent)]/80 leading-relaxed">
                {CONTACT.address}
              </p>
              <a
                href={`tel:${CONTACT.phone}`}
                className="font-body text-sm text-[var(--color-accent)]/80 hover:text-[var(--color-primary)] transition-colors"
              >
                {CONTACT.phone}
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-body text-sm text-[var(--color-accent)]/80 hover:text-[var(--color-primary)] transition-colors"
              >
                {CONTACT.email}
              </a>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="font-body text-xs text-[var(--color-accent)]/40">
            &copy; {currentYear} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-body text-xs text-[var(--color-accent)]/30">
            531 Beaver Street, Sewickley, PA 15143
          </p>
        </div>
      </div>
    </footer>
  )
}
