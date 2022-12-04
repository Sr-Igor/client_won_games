import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/mock'
import { items as gamesMock } from 'components/GameCardSlider/mock'
import { item as higlightMock } from 'components/Highlight/mock'
import cardsMock from 'components/PaymentOptions/mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      items: itemsMock,
      total: '$ 430,00',
      cards: cardsMock,
      recommendedGames: gamesMock,
      recommendedHighlight: higlightMock
    }
  }
}