import { createContext, useContext, useEffect, useState } from 'react'
import { getStorageItem } from 'utils/localStorage'

export type CartContextData = {
  items: string[]
  // quantity: number
  // total: string
  // isInCart: (id: string) => boolean
  // addToCart: (item: GameItem) => void
  // removeFromCart: (id: string) => void
  // clearCart: () => void
}

export const CartContextDefaultValues = {
  items: []
  // quantity: 0,
  // total: '$0.00',
  // isInCart: () => false,
  // addToCart: () => null,
  // removeFromCart: () => null,
  // clearCart: () => null
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>(
    CartContextDefaultValues.items
  )

  const CART_KEY = 'cartItems'

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) {
      setCartItems(data)
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        items: cartItems
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
