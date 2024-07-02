'use client'

import { useCart } from '@/context/CartContext'

export interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddProdutoToCart() {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      onClick={handleAddProdutoToCart}
      className="mt-8 flex h-12 items-center justify-center bg-emerald-600 rounded-full font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
