'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type SizeKey = 'sm' | 'md' | 'lg'
type VariantKey = 'primary' | 'secondary' | 'ghost'

interface CTAButtonBaseProps {
  variant?: VariantKey
  size?: SizeKey
  children: React.ReactNode
  className?: string
}

interface CTAButtonLinkProps extends CTAButtonBaseProps {
  href: string
  external?: boolean
  type?: never
  disabled?: never
  onClick?: never
}

interface CTAButtonButtonProps extends CTAButtonBaseProps {
  href?: never
  external?: never
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: () => void
}

type CTAButtonProps = CTAButtonLinkProps | CTAButtonButtonProps

const sizeClasses: Record<SizeKey, string> = {
  sm: 'px-5 py-2 text-xs',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
}

const variantClasses: Record<VariantKey, string> = {
  primary:
    'bg-[var(--color-secondary)] text-white disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-transparent border-2 border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-white disabled:opacity-50',
  ghost:
    'bg-transparent text-[var(--color-text)] hover:text-[var(--color-secondary)] underline-offset-4 hover:underline disabled:opacity-50',
}

const base =
  'inline-flex items-center justify-center font-body tracking-wide rounded transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-secondary)]'

export default function CTAButton({
  variant = 'primary',
  size = 'md',
  href,
  external,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: CTAButtonProps) {
  const classes = cn(base, sizeClasses[size], variantClasses[variant], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
    >
      {children}
    </motion.button>
  )
}
