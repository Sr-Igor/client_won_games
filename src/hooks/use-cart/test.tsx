import { CartProvider, CartProviderProps, useCart } from '.'
import { renderHook, act } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'

describe('useCart', () => {
  it('should return items and its if there are any in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <CartProvider>{children}</CartProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result } = renderHook(() => useCart(), { wrapper })

    expect(result.current.items).toStrictEqual(['1', '2'])
  })
})
