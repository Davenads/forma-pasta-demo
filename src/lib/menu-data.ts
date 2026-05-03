export type MenuAvailability = 'lunch' | 'dinner' | 'both'
export type DietaryFlag = 'V' | 'GF'

export interface MenuAddOn {
  label: string
  price: number
}

export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: string
  availability: MenuAvailability
  bestSeller?: boolean
  dietary?: DietaryFlag[]
  addOns?: MenuAddOn[]
  includesWith?: string
}

export interface MenuCategory {
  id: string
  label: string
  availability: MenuAvailability
}

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'pasta',    label: 'Pasta',    availability: 'both'   },
  { id: 'wraps',    label: 'Wraps',    availability: 'lunch'  },
  { id: 'hoagies',  label: 'Hoagies',  availability: 'lunch'  },
  { id: 'pizzas',   label: 'Pizzas',   availability: 'lunch'  },
  { id: 'salads',   label: 'Salads',   availability: 'dinner' },
  { id: 'sides',    label: 'Sides',    availability: 'both'   },
  { id: 'desserts', label: 'Desserts', availability: 'dinner' },
]

const PROTEIN_ADDONS: MenuAddOn[] = [
  { label: 'Add Chicken', price: 5 },
  { label: 'Add Shrimp',  price: 6 },
]

export const MENU_ITEMS: MenuItem[] = [
  // ─── PASTA — LUNCH ─────────────────────────────────────────────────────────
  {
    id: 'pasta-spaghetti-meatballs-lunch',
    name: 'Spaghetti & Meatballs',
    description: 'Classic house-made spaghetti with our signature meatballs in slow-simmered pomodoro.',
    price: 16.95,
    category: 'pasta',
    availability: 'lunch',
    bestSeller: true,
    includesWith: 'house salad',
  },
  {
    id: 'pasta-fettuccini-alfredo-lunch',
    name: 'Fettuccini Alfredo',
    description: 'House-made fettuccini in a classic butter and Parmigiano cream sauce.',
    price: 15.95,
    category: 'pasta',
    availability: 'lunch',
    bestSeller: true,
    addOns: PROTEIN_ADDONS,
    includesWith: 'house salad',
  },
  {
    id: 'pasta-gnocchi-bolognese-lunch',
    name: 'Gnocchi Bolognese',
    description: 'Pillowy potato gnocchi tossed in our slow-cooked pork and veal bolognese.',
    price: 16.95,
    category: 'pasta',
    availability: 'lunch',
    bestSeller: true,
    includesWith: 'house salad',
  },
  {
    id: 'pasta-pappardelle-lunch',
    name: 'Pappardelle',
    description: 'Wide egg pasta ribbons with rotating seasonal preparation.',
    price: 17.95,
    category: 'pasta',
    availability: 'lunch',
    includesWith: 'house salad',
  },
  {
    id: 'pasta-burrata-vodka-lunch',
    name: 'Burrata alla Vodka',
    description: 'House rigatoni in a classic vodka cream sauce topped with fresh burrata.',
    price: 18.95,
    category: 'pasta',
    availability: 'lunch',
    includesWith: 'house salad',
  },
  {
    id: 'pasta-crab-ravioli-lunch',
    name: 'Crab Ravioli',
    description: 'Hand-made ravioli filled with fresh crab in a light butter cream sauce.',
    price: 18.95,
    category: 'pasta',
    availability: 'lunch',
    includesWith: 'house salad',
  },

  // ─── PASTA — DINNER ────────────────────────────────────────────────────────
  {
    id: 'pasta-spaghetti-meatballs-dinner',
    name: 'Spaghetti & Meatballs',
    description: 'Classic house-made spaghetti with our signature meatballs in slow-simmered pomodoro. Full dinner portion.',
    price: 21.95,
    category: 'pasta',
    availability: 'dinner',
    bestSeller: true,
  },
  {
    id: 'pasta-fettuccini-alfredo-dinner',
    name: 'Fettuccini Alfredo',
    description: 'House-made fettuccini in a classic butter and Parmigiano cream sauce. Full dinner portion.',
    price: 19.95,
    category: 'pasta',
    availability: 'dinner',
    bestSeller: true,
    addOns: PROTEIN_ADDONS,
  },
  {
    id: 'pasta-gnocchi-bolognese-dinner',
    name: 'Gnocchi Bolognese',
    description: 'Pillowy potato gnocchi tossed in our slow-cooked pork and veal bolognese. Full dinner portion.',
    price: 21.95,
    category: 'pasta',
    availability: 'dinner',
    bestSeller: true,
  },
  {
    id: 'pasta-tortellini-pesto-dinner',
    name: 'Tortellini Pesto',
    description: 'Hand-formed tortellini in house-made basil pesto with pine nuts and Parmigiano.',
    price: 19.95,
    category: 'pasta',
    availability: 'dinner',
    dietary: ['V'],
  },
  {
    id: 'pasta-pappardelle-dinner',
    name: 'Pappardelle',
    description: 'Wide egg pasta ribbons with rotating seasonal preparation. Full dinner portion.',
    price: 22.95,
    category: 'pasta',
    availability: 'dinner',
  },
  {
    id: 'pasta-burrata-vodka-dinner',
    name: 'Burrata alla Vodka',
    description: 'House rigatoni in a classic vodka cream sauce topped with fresh burrata. Full dinner portion.',
    price: 24.95,
    category: 'pasta',
    availability: 'dinner',
  },
  {
    id: 'pasta-crab-ravioli-dinner',
    name: 'Crab Ravioli',
    description: 'Hand-made ravioli filled with fresh crab in a light butter cream sauce. Full dinner portion.',
    price: 28.95,
    category: 'pasta',
    availability: 'dinner',
  },

  // ─── WRAPS (lunch only) ────────────────────────────────────────────────────
  {
    id: 'wrap-chicken-caesar',
    name: 'Chicken Caesar Wrap',
    description: 'Grilled chicken, romaine, house Caesar dressing, shaved Parmigiano.',
    price: 15.95,
    category: 'wraps',
    availability: 'lunch',
    includesWith: 'fries',
  },
  {
    id: 'wrap-buffalo-chicken',
    name: 'Buffalo Chicken Wrap',
    description: 'Crispy chicken tossed in buffalo sauce, lettuce, tomato, blue cheese crumble.',
    price: 15.95,
    category: 'wraps',
    availability: 'lunch',
    includesWith: 'fries',
  },
  {
    id: 'wrap-chicken-bacon-ranch',
    name: 'Chicken Bacon Ranch Wrap',
    description: 'Grilled chicken, crispy bacon, lettuce, tomato, house ranch.',
    price: 15.95,
    category: 'wraps',
    availability: 'lunch',
    includesWith: 'fries',
  },

  // ─── HOAGIES (lunch only) ──────────────────────────────────────────────────
  {
    id: 'hoagie-hot-italian-beef',
    name: 'Hot Italian Beef',
    description: 'Slow-roasted Italian beef with sweet or hot peppers on a toasted hoagie roll.',
    price: 16.95,
    category: 'hoagies',
    availability: 'lunch',
    includesWith: 'house salad',
  },
  {
    id: 'hoagie-chicken-cutlet',
    name: 'Chicken Cutlet',
    description: 'Crispy breaded chicken cutlet with house aioli, lettuce, tomato, provolone.',
    price: 15.95,
    category: 'hoagies',
    availability: 'lunch',
    includesWith: 'house salad',
  },
  {
    id: 'hoagie-meatball',
    name: 'Meatball Hoagie',
    description: 'House-made meatballs in pomodoro with melted provolone on a toasted roll.',
    price: 15.95,
    category: 'hoagies',
    availability: 'lunch',
    includesWith: 'house salad',
  },
  {
    id: 'hoagie-hot-sausage',
    name: 'Hot Sausage Hoagie',
    description: 'Italian hot sausage with sautéed peppers and onions, provolone, toasted roll.',
    price: 15.95,
    category: 'hoagies',
    availability: 'lunch',
    includesWith: 'house salad',
  },

  // ─── PIZZAS (lunch only) ───────────────────────────────────────────────────
  {
    id: 'pizza-margherita',
    name: 'Margherita',
    description: 'San Marzano tomato, fresh mozzarella, basil, extra virgin olive oil.',
    price: 15.95,
    category: 'pizzas',
    availability: 'lunch',
    dietary: ['V'],
  },
  {
    id: 'pizza-drunk-pig',
    name: 'The Drunk Pig',
    description: 'Pulled pork, pickled jalapeños, bourbon BBQ sauce, mozzarella, crispy onions.',
    price: 15.95,
    category: 'pizzas',
    availability: 'lunch',
  },
  {
    id: 'pizza-pickle-bacon-ranch',
    name: 'Pickle Bacon Ranch',
    description: 'House ranch base, mozzarella, crispy bacon, dill pickles, fresh dill.',
    price: 15.95,
    category: 'pizzas',
    availability: 'lunch',
  },

  // ─── SALADS (dinner only) ──────────────────────────────────────────────────
  {
    id: 'salad-house',
    name: 'House Salad',
    description: 'Mixed greens, tomato, cucumber, red onion, house Italian vinaigrette.',
    price: 8.95,
    category: 'salads',
    availability: 'dinner',
    addOns: PROTEIN_ADDONS,
    dietary: ['V'],
  },
  {
    id: 'salad-caesar',
    name: 'Caesar Salad',
    description: 'Romaine, house Caesar dressing, shaved Parmigiano, house-made croutons.',
    price: 9.95,
    category: 'salads',
    availability: 'dinner',
    addOns: PROTEIN_ADDONS,
  },

  // ─── SIDES ─────────────────────────────────────────────────────────────────
  {
    id: 'side-chips',
    name: 'Chips',
    description: 'House chips.',
    price: 2.00,
    category: 'sides',
    availability: 'both',
  },

  // ─── DESSERTS (dinner only) ────────────────────────────────────────────────
  {
    id: 'dessert-rotating',
    name: 'Dessert of the Day',
    description: "Ask your server about today's rotating selection — pies, cakes, and seasonal sweets.",
    price: 7.95,
    category: 'desserts',
    availability: 'dinner',
  },
]

export const DELIVERY_FEE     = 4.95
export const DELIVERY_MINIMUM = 15
export const SLICE_ORDER_URL  = 'https://slicelife.com/restaurants/pa/sewickley/15143/forma-pasta-cafe-market/menu'
