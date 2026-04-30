export const SITE_NAME = 'Forma Pasta Cafe & Market'
export const SITE_TAGLINE = 'Fresh pasta. Handmade in Sewickley.'

export const CONTACT = {
  address: '531 Beaver Street, Sewickley, PA 15143',
  phone: '(412) 586-7195',
  email: 'hello@formapgh.com',
  website: 'https://formapgh.com',
  instagram: 'https://www.instagram.com/formapastapgh',
  instagramHandle: '@formapastapgh',
}

export const HOURS = [
  { days: 'Tuesday – Friday', times: '8am – 4pm', label: 'Cafe & Lunch' },
  { days: 'Saturday – Sunday', times: '8am – 2pm', label: 'Brunch' },
  { days: 'Friday – Saturday', times: '5pm – 9pm', label: 'Dinner' },
  { days: 'Monday', times: 'Closed', label: '' },
]

export const HOURS_COMPACT = {
  tueFri: 'Tue–Fri 8am–4pm',
  satSun: 'Sat–Sun 8am–2pm',
  dinner: 'Fri–Sat 5–9pm',
  closed: 'Closed Monday',
}

export const NAV_LINKS = [
  { label: 'Menu', href: '/menu' },
  { label: 'Pasta Classes', href: '/classes' },
  { label: 'Market', href: '/market' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export const BYOB_NOTE = 'BYOB welcome — bring your favorite bottle, we\'ll provide the glasses.'

export const TOAST_ORDER_URL = 'https://www.toasttab.com/forma-pasta'
export const OPENTABLE_URL = 'https://www.opentable.com/forma-pasta-sewickley'

export const GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.9!2d-80.1867!3d40.5371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s531+Beaver+St%2C+Sewickley%2C+PA+15143!5e0!3m2!1sen!2sus!4v1'

export const TESTIMONIALS = [
  {
    quote:
      'The cacio e pepe here is unlike anything I\'ve had outside of Rome. Fresh pasta makes all the difference.',
    author: 'Sarah M.',
    source: 'Yelp',
  },
  {
    quote:
      'Took a pasta class with my husband for our anniversary — we\'ve made fresh pasta at home ever since. Incredible experience.',
    author: 'Jennifer K.',
    source: 'Google',
  },
  {
    quote:
      'The market sauces are outstanding. I always grab a few jars on my way out. The rigatoni alla norma is a staple in our house now.',
    author: 'Michael R.',
    source: 'Yelp',
  },
  {
    quote:
      'BYOB and housemade pasta? Friday dinner here is our go-to date night. Book ahead — it fills fast.',
    author: 'Amanda T.',
    source: 'Google',
  },
]

export const PASTA_CLASS_TYPES = [
  {
    name: 'Fresh Pasta Foundations',
    description:
      'Learn to make egg pasta dough from scratch, then hand-roll and cut tagliatelle and pappardelle. Take home your pasta and the recipe.',
    duration: '2.5 hours',
    groupSize: '2–8 guests',
    price: '$95 per person',
  },
  {
    name: 'Filled Pasta Workshop',
    description:
      'Dive into ravioli and tortellini — the art of filling, folding, and finishing. Includes a classic butter-sage sauce and dinner portion to enjoy.',
    duration: '3 hours',
    groupSize: '2–6 guests',
    price: '$115 per person',
  },
  {
    name: 'Date Night Pasta',
    description:
      'A guided two-person experience: make fresh pasta together, then sit down to enjoy your creation with wine you\'ve brought. Romantic and delicious.',
    duration: '3 hours',
    groupSize: '2 guests',
    price: '$195 per couple',
  },
  {
    name: 'Private Group Event',
    description:
      'Birthday, team outing, or celebration? We\'ll customize a class menu for your group. Inquire for availability and pricing.',
    duration: 'Custom',
    groupSize: 'Up to 12 guests',
    price: 'Custom pricing',
  },
]

export const MARKET_ITEMS = [
  {
    category: 'Fresh Pasta',
    items: [
      { name: 'Tagliatelle', description: 'Egg pasta, hand-rolled', price: '$9' },
      { name: 'Pappardelle', description: 'Wide ribbon, egg pasta', price: '$9' },
      { name: 'Rigatoni', description: 'Bronze-die extruded', price: '$10' },
      { name: 'Orecchiette', description: 'Hand-formed, semolina', price: '$10' },
      { name: 'Spinach Tagliatelle', description: 'Fresh spinach pasta', price: '$10' },
      { name: 'Seasonal Shape', description: 'Ask what\'s in today', price: 'Market' },
    ],
  },
  {
    category: 'House Sauces',
    items: [
      { name: 'Sunday Bolognese', description: 'Slow-cooked meat ragu, pork and veal', price: '$14' },
      { name: 'Norma Sauce', description: 'Roasted eggplant, San Marzano tomato, basil', price: '$12' },
      { name: 'Cacio e Pepe Base', description: 'Pecorino-forward, cracked black pepper', price: '$11' },
      { name: 'Roasted Garlic Pomodoro', description: 'Simple, pure, seasonal tomato', price: '$11' },
      { name: 'Pesto Genovese', description: 'Basil, pine nut, Parmigiano', price: '$13' },
    ],
  },
  {
    category: 'Market Extras',
    items: [
      { name: 'Fresh Ricotta', description: 'Made in-house, rotating flavors', price: '$8' },
      { name: 'Compound Butter', description: 'Herbs, garlic, seasonal', price: '$7' },
      { name: 'Pasta Flour Mix', description: '00 flour blend for home pasta making', price: '$6' },
    ],
  },
]
