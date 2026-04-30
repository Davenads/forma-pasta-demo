'use client'

import { cn } from '@/lib/utils'

interface CTAButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'ghost'
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

const base =
  'inline-flex items-center justify-center font-body text-sm tracking-wide px-7 py-3 rounded transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] hover:scale-[1.02] active:scale-[0.98]'

const variantClasses = {
  primary:
    'bg-[var(--color-primary)] text-white hover:bg-[#b05525] active:bg-[#9a4a20] disabled:opacity-50 disabled:cursor-not-allowed',
  secondary:
    'bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-50',
  ghost:
    'bg-transparent text-[var(--color-foreground)] hover:text-[var(--color-primary)] underline-offset-4 hover:underline disabled:opacity-50',
}

export default function CTAButton({
  variant = 'primary',
  href,
  external,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: CTAButtonProps) {
  const classes = cn(base, variantClasses[variant], className)

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {children}
    </button>
  )
}
