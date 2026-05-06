'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { sendContactEmail } from '@/app/actions/contact'
import CTAButton from '@/components/ui/CTAButton'

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type FormValues = z.infer<typeof schema>

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  const onSubmit = async (data: FormValues) => {
    setStatus('loading')
    const result = await sendContactEmail(data)
    if (result.success) {
      setStatus('success')
      reset()
    } else {
      setStatus('error')
      setErrorMessage(result.error ?? 'Something went wrong.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-[var(--color-card)] border border-[var(--color-border)] rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl italic font-semibold text-[var(--color-foreground)] mb-3">
          Message sent!
        </h3>
        <p className="font-body text-sm text-[var(--color-muted)]">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  const inputClass =
    'w-full font-body text-sm bg-[var(--color-background)] border border-[var(--color-border)] rounded px-4 py-3 text-[var(--color-foreground)] placeholder:text-[var(--color-muted)]/50 focus:outline-none focus:border-[var(--color-primary)] transition-colors'
  const labelClass = 'block font-body text-xs tracking-wide text-[var(--color-foreground)] mb-1.5'
  const errorClass = 'font-body text-xs text-red-600 mt-1'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-5"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className={labelClass}>
            Name <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="contact-name-error" className={errorClass} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClass}>
            Email <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="contact-email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className={labelClass}>
          Phone <span className="text-[var(--color-muted)]">(optional)</span>
        </label>
        <input
          id="contact-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(412) 555-0000"
          className={inputClass}
          {...register('phone')}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message <span className="text-[var(--color-primary)]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="How can we help?"
          className={inputClass}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          {...register('message')}
        />
        {errors.message && (
          <p id="contact-message-error" className={errorClass} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <p className="font-body text-sm text-red-600 bg-red-50 border border-red-200 rounded px-4 py-3" role="alert">
          {errorMessage}
        </p>
      )}

      <CTAButton
        type="submit"
        disabled={status === 'loading'}
        className="w-full"
      >
        {status === 'loading' ? 'Sending...' : 'Send message'}
      </CTAButton>
    </form>
  )
}
