export interface NavLink {
  label: string
  href: string
}

export interface HoursEntry {
  days: string
  times: string
  label: string
}

export interface Testimonial {
  quote: string
  author: string
  source: string
}

export interface PastaClassType {
  name: string
  description: string
  duration: string
  groupSize: string
  price: string
}

export interface MarketItem {
  name: string
  description: string
  price: string
}

export interface MarketCategory {
  category: string
  items: MarketItem[]
}

export interface MenuItem {
  name: string
  description?: string
  price?: string
}

export interface MenuSection {
  title: string
  items: MenuItem[]
}

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
}

export interface ClassBookingFormData {
  name: string
  email: string
  phone: string
  classInterest: string
  datePreference: string
  groupSize: string
  message?: string
}
