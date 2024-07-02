/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

interface CartItem {
  productId: number
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItem, setCartItem] = useState<CartItem[]>([])

  function addToCart(productId: number) {
    setCartItem((state) => {
      const productInCart = state.some((item) => item.productId === productId)

      /* Condição para verificar se ja existe o mesmo produto no carrinho aumentando a quantidade do produto ja existente */

      if (productInCart) {
        return state.map((item) => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      } else {
        /* Condição para adicionar o novo item no carrinho */

        return [...state, { productId, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItem, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
