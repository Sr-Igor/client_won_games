import { CartProvider, CartProviderProps, useCart } from '.'
import { renderHook } from '@testing-library/react-hooks'
import { setStorageItem } from 'utils/localStorage'
import { cartItems, gamesMock } from './mock'
import { MockedProvider } from '@apollo/client/testing'
import { act } from '@testing-library/react'

describe('useCart', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return items and its if there are any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.loading).toBe(true)

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(cartItems)
    expect(result.current.quantity).toBe(2)
    expect(result.current.total).toBe('$21.00')
  })

  it('should return true/false if item is in the cart', () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.isInCart('2')).toBe(false)
  })

  it('should add items in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    act(() => result.current.addToCart('1'))

    expect(result.current.isInCart('1')).toBe(true)
    expect(result.current.quantity).toBe(1)
  })

  it('should remove items in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    act(() => result.current.removeFromCart('1'))

    expect(result.current.isInCart('1')).toBe(false)
    expect(result.current.quantity).toBe(0)
  })

  it('should clear the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cartItems', ['1', '2'])

    const { result } = renderHook(() => useCart(), {
      wrapper
    })

    act(() => result.current.clearCart())

    expect(result.current.isInCart('1')).toBe(false)
    expect(result.current.quantity).toBe(0)
  })
})
