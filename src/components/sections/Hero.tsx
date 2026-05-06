'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  return (
    <section className="relative min-h-[600px] h-screen max-h-[900px] flex items-center justify-center overflow-hidden bg-[var(--color-navy)]">
      {/* Background image */}
      <Image
        src="/images/hero/hero-1.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        aria-hidden="true"
      />
      {/* Navy overlay */}
      <div className="absolute inset-0 bg-black/72 z-[1]" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-2xl mx-auto">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden ring-1 ring-white/10"
        >
          <Image
            src="/images/hero/forma-logo.png"
            alt="Forma Pasta"
            width={900}
            height={300}
            priority
            className="w-[260px] md:w-[400px] h-auto"
          />
        </motion.div>

        {/* Red rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
          style={{ originX: '50%' }}
          className="h-1 w-16 bg-[var(--color-primary)] mt-8 mb-6"
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="font-body font-bold text-white text-lg md:text-xl tracking-tight uppercase mb-8"
        >
          Fresh pasta. Handmade in Sewickley.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CTAButton href="/menu" variant="primary">
            View the Menu
          </CTAButton>
          <CTAButton
            href="/classes"
            variant="secondary"
            className="border-white text-white hover:bg-white hover:text-[var(--color-navy)]"
          >
            Book a Pasta Class
          </CTAButton>
        </motion.div>

        {/* BYOB badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
          className="mt-10 inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
          <span className="font-body text-xs text-white/80 tracking-wide">
            BYOB welcome. Bring your favorite bottle.
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/60 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
