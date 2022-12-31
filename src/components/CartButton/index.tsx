import {
  AddShoppingCart,
  RemoveShoppingCart
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import { useCart } from 'hooks/use-cart'

type CartButtonProps = {
  id: string
  size?: 'small' | 'large'
  hasText?: boolean
}

const CartButton = ({ id, size = 'small', hasText }: CartButtonProps) => {
  const { isInCart, addToCart, removeFromCart } = useCart()

  const ButtonText = isInCart(id) ? 'Remove from cart' : 'Add to cart'

  return (
    <Button
      icon={
        isInCart(id) ? (
          <RemoveShoppingCart aria-label="Remove from cart" />
        ) : (
          <AddShoppingCart aria-label="Add to cart" />
        )
      }
      size={size}
      onClick={() => (isInCart(id) ? removeFromCart(id) : addToCart(id))}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default CartButton
