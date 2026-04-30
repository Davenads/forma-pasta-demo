'use server'

import { Resend } from 'resend'
import { z } from 'zod'

const resend = new Resend(process.env.RESEND_API_KEY)

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string().min(10),
})

const classBookingSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  classInterest: z.string().min(1),
  datePreference: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
export type ClassBookingFormData = z.infer<typeof classBookingSchema>

export interface ActionResult {
  success: boolean
  error?: string
}

export async function sendContactEmail(data: ContactFormData): Promise<ActionResult> {
  const parsed = contactSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries.' }
  }

  try {
    await resend.emails.send({
      from: 'Forma Pasta Website <noreply@formapgh.com>',
      to: 'hello@formapgh.com',
      subject: `New contact inquiry from ${parsed.data.name}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        ${parsed.data.phone ? `<p><strong>Phone:</strong> ${parsed.data.phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${parsed.data.message.replace(/\n/g, '<br>')}</p>
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send message. Please try again or call us directly.' }
  }
}

export async function sendClassBookingEmail(data: ClassBookingFormData): Promise<ActionResult> {
  const parsed = classBookingSchema.safeParse(data)
  if (!parsed.success) {
    return { success: false, error: 'Invalid form data. Please check your entries.' }
  }

  try {
    await resend.emails.send({
      from: 'Forma Pasta Website <noreply@formapgh.com>',
      to: 'hello@formapgh.com',
      subject: `New pasta class inquiry from ${parsed.data.name}`,
      html: `
        <h2>New Pasta Class Booking Inquiry</h2>
        <p><strong>Name:</strong> ${parsed.data.name}</p>
        <p><strong>Email:</strong> ${parsed.data.email}</p>
        <p><strong>Phone:</strong> ${parsed.data.phone}</p>
        <p><strong>Class Interest:</strong> ${parsed.data.classInterest}</p>
        <p><strong>Preferred Date:</strong> ${parsed.data.datePreference}</p>
        <p><strong>Group Size:</strong> ${parsed.data.groupSize}</p>
        ${parsed.data.message ? `<p><strong>Additional Notes:</strong> ${parsed.data.message}</p>` : ''}
      `,
    })
    return { success: true }
  } catch {
    return { success: false, error: 'Failed to send booking request. Please try again or call us directly.' }
  }
}
