'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isHome = pathname === '/'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHome || isMenuOpen
          ? 'bg-[var(--color-background)] shadow-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex flex-col leading-tight group"
          aria-label={`${SITE_NAME} — Home`}
        >
          <span
            className={`font-display font-semibold tracking-wide text-xl md:text-2xl italic transition-colors ${
              isScrolled || !isHome || isMenuOpen
                ? 'text-[var(--color-primary)]'
                : 'text-white'
            } group-hover:text-[var(--color-primary)]`}
          >
            Forma
          </span>
          <span
            className={`font-body text-[10px] md:text-xs tracking-[0.2em] uppercase transition-colors ${
              isScrolled || !isHome || isMenuOpen
                ? 'text-[var(--color-foreground)]'
                : 'text-white/80'
            }`}
          >
            Pasta · Cafe · Market
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors hover:text-[var(--color-primary)] ${
                pathname === link.href
                  ? 'text-[var(--color-primary)]'
                  : isScrolled || !isHome
                  ? 'text-[var(--color-foreground)]'
                  : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-[var(--color-primary)] text-white font-body text-sm px-5 py-2 rounded hover:bg-[#a81818] transition-colors"
          >
            Order Online
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-[var(--color-primary)] ${
            isScrolled || !isHome || isMenuOpen
              ? 'text-[var(--color-foreground)]'
              : 'text-white'
          }`}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform duration-300 ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-[var(--color-background)] border-t border-[var(--color-border)] transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-body text-base py-1 border-b border-[var(--color-border)] transition-colors hover:text-[var(--color-primary)] ${
                pathname === link.href
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-foreground)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            className="bg-[var(--color-primary)] text-white font-body text-sm text-center px-5 py-3 rounded hover:bg-[#a81818] transition-colors mt-2"
          >
            Order Online
          </Link>
        </div>
      </div>
    </header>
  )
}
