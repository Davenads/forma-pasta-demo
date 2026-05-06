'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { sendClassBookingEmail } from '@/app/actions/contact'
import CTAButton from '@/components/ui/CTAButton'
import { PASTA_CLASS_TYPES } from '@/lib/constants'

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(7, 'Please enter a valid phone number'),
  classInterest: z.string().min(1, 'Please select a class type'),
  datePreference: z.string().min(1, 'Please provide a preferred date or timeframe'),
  groupSize: z.string().min(1, 'Please indicate your group size'),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function ClassBookingForm() {
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
    const result = await sendClassBookingEmail(data)
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
      <div className="bg-[var(--color-secondary)] border border-[var(--color-border)] rounded-lg p-10 text-center">
        <div className="w-12 h-12 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl italic font-semibold text-[var(--color-foreground)] mb-3">
          Inquiry received!
        </h3>
        <p className="font-body text-sm text-[var(--color-muted)] leading-relaxed">
          We&apos;ll be in touch within 24 hours to confirm availability and details. In the meantime, feel free to call us at (412) 586-7195.
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
      className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-lg p-7 md:p-10 flex flex-col gap-6"
      noValidate
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label htmlFor="booking-name" className={labelClass}>
            Full name <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            className={inputClass}
            aria-describedby={errors.name ? 'booking-name-error' : undefined}
            {...register('name')}
          />
          {errors.name && (
            <p id="booking-name-error" className={errorClass} role="alert">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="booking-email" className={labelClass}>
            Email <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="booking-email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={inputClass}
            aria-describedby={errors.email ? 'booking-email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p id="booking-email-error" className={errorClass} role="alert">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="booking-phone" className={labelClass}>
          Phone <span className="text-[var(--color-primary)]">*</span>
        </label>
        <input
          id="booking-phone"
          type="tel"
          autoComplete="tel"
          placeholder="(412) 555-0000"
          className={inputClass}
          aria-describedby={errors.phone ? 'booking-phone-error' : undefined}
          {...register('phone')}
        />
        {errors.phone && (
          <p id="booking-phone-error" className={errorClass} role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Class interest */}
      <div>
        <label htmlFor="booking-class" className={labelClass}>
          Class interest <span className="text-[var(--color-primary)]">*</span>
        </label>
        <select
          id="booking-class"
          className={inputClass}
          aria-describedby={errors.classInterest ? 'booking-class-error' : undefined}
          {...register('classInterest')}
        >
          <option value="">Select a class type...</option>
          {PASTA_CLASS_TYPES.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name} | {c.price}
            </option>
          ))}
        </select>
        {errors.classInterest && (
          <p id="booking-class-error" className={errorClass} role="alert">
            {errors.classInterest.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Date preference */}
        <div>
          <label htmlFor="booking-date" className={labelClass}>
            Preferred date or timeframe <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="booking-date"
            type="text"
            placeholder="e.g. Saturdays in June, June 14th"
            className={inputClass}
            aria-describedby={errors.datePreference ? 'booking-date-error' : undefined}
            {...register('datePreference')}
          />
          {errors.datePreference && (
            <p id="booking-date-error" className={errorClass} role="alert">
              {errors.datePreference.message}
            </p>
          )}
        </div>

        {/* Group size */}
        <div>
          <label htmlFor="booking-group" className={labelClass}>
            Group size <span className="text-[var(--color-primary)]">*</span>
          </label>
          <select
            id="booking-group"
            className={inputClass}
            aria-describedby={errors.groupSize ? 'booking-group-error' : undefined}
            {...register('groupSize')}
          >
            <option value="">Select group size...</option>
            <option value="2">2 people</option>
            <option value="3-4">3–4 people</option>
            <option value="5-6">5–6 people</option>
            <option value="7-8">7–8 people</option>
            <option value="9-12">9–12 people</option>
            <option value="12+">12+ (private event)</option>
          </select>
          {errors.groupSize && (
            <p id="booking-group-error" className={errorClass} role="alert">
              {errors.groupSize.message}
            </p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="booking-message" className={labelClass}>
          Additional notes <span className="text-[var(--color-muted)]">(optional)</span>
        </label>
        <textarea
          id="booking-message"
          rows={4}
          placeholder="Dietary restrictions, occasion, any questions..."
          className={inputClass}
          {...register('message')}
        />
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
        {status === 'loading' ? 'Sending inquiry...' : 'Send booking inquiry'}
      </CTAButton>

      <p className="font-body text-xs text-[var(--color-muted)] text-center">
        We&apos;ll respond within 24 hours. Or call us at{' '}
        <a href="tel:+14125867195" className="text-[var(--color-primary)] hover:underline">
          (412) 586-7195
        </a>
        .
      </p>
    </form>
  )
}
