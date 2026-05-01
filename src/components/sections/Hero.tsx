'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import CTAButton from '@/components/ui/CTAButton'

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero/hero-1.jpg"
        alt="Fresh pasta being hand-rolled on a flour-dusted surface"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-body text-xs md:text-sm tracking-[0.3em] uppercase text-white/70 mb-4"
        >
          Sewickley, PA
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display font-semibold text-5xl md:text-7xl italic leading-tight mb-6"
        >
          Fresh pasta.
          <br />
          <span className="text-[var(--color-primary)]">Handmade</span> in Sewickley.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="font-body text-base md:text-lg text-white/80 mb-8 max-w-md mx-auto leading-relaxed"
        >
          Every pasta shape, every sauce — made from scratch in our kitchen before the doors open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <CTAButton href="/menu" variant="primary">
            View the Menu
          </CTAButton>
          <CTAButton href="/classes" variant="secondary">
            Book a Pasta Class
          </CTAButton>
        </motion.div>

        {/* BYOB badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.1 }}
          className="mt-10 inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-primary)]" aria-hidden="true" />
          <span className="font-body text-xs text-white/80 tracking-wide">
            BYOB welcome — bring your favorite bottle
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.7 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-5 h-8 border-2 border-white/40 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
