'use client'

import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  ReactNode,
} from 'react'
import { DELIVERY_FEE, DELIVERY_MINIMUM } from '@/lib/menu-data'

export type OrderType = 'delivery' | 'pickup'

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
}

interface CartState {
  items: CartItem[]
  orderType: OrderType
}

type CartAction =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: string }
  | { type: 'UPDATE_QTY'; id: string; quantity: number }
  | { type: 'SET_ORDER_TYPE'; orderType: OrderType }
  | { type: 'CLEAR_CART' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.id === action.item.id)
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + 1 } : i
          ),
        }
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      }
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((i) => i.id !== action.id),
      }
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.id !== action.id),
        }
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i
        ),
      }
    case 'SET_ORDER_TYPE':
      return { ...state, orderType: action.orderType }
    case 'CLEAR_CART':
      return { ...state, items: [] }
    default:
      return state
  }
}

interface CartContextValue {
  items: CartItem[]
  orderType: OrderType
  itemCount: number
  subtotal: number
  deliveryFee: number
  total: number
  meetsMinimum: boolean
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string) => void
  updateQty: (id: string, quantity: number) => void
  setOrderType: (orderType: OrderType) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    orderType: 'delivery',
  })

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0)
  const subtotal  = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0)
  const deliveryFee = state.orderType === 'delivery' ? DELIVERY_FEE : 0
  const total = subtotal + deliveryFee
  const meetsMinimum =
    state.orderType === 'pickup' || subtotal >= DELIVERY_MINIMUM

  const addItem = useCallback(
    (item: Omit<CartItem, 'quantity'>) => dispatch({ type: 'ADD_ITEM', item }),
    []
  )
  const removeItem = useCallback(
    (id: string) => dispatch({ type: 'REMOVE_ITEM', id }),
    []
  )
  const updateQty = useCallback(
    (id: string, quantity: number) => dispatch({ type: 'UPDATE_QTY', id, quantity }),
    []
  )
  const setOrderType = useCallback(
    (orderType: OrderType) => dispatch({ type: 'SET_ORDER_TYPE', orderType }),
    []
  )
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), [])

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        orderType: state.orderType,
        itemCount,
        subtotal,
        deliveryFee,
        total,
        meetsMinimum,
        addItem,
        removeItem,
        updateQty,
        setOrderType,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within a CartProvider')
  return ctx
}
