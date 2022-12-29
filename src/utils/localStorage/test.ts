import { getStorageItem, setStorageItem } from '.'

describe('getStorageItems', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should return the item from localstorage', () => {
    window.localStorage.setItem('WONGAMES_cart', JSON.stringify(['1', '2']))

    expect(getStorageItem('cart')).toStrictEqual(['1', '2'])
  })
})

describe('setStorageItems', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('should set the item from localstorage', () => {
    setStorageItem('cart', ['1', '2'])

    expect(window.localStorage.getItem('WONGAMES_cart')).toStrictEqual(
      JSON.stringify(['1', '2'])
    )
  })
})
