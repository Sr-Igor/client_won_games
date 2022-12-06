// import Cart, { CartProps } from 'templates/Cart'

// import itemsMock from 'components/CartList/mock'
// import { items as gamesMock } from 'components/GameCardSlider/mock'
// import { item as higlightMock } from 'components/Highlight/mock'
// import cardsMock from 'components/PaymentOptions/mock'
import GamesTemplate, { GameTemplateProps } from '../templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { items as gamesMock } from 'components/GameCardSlider/mock'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesMock,
      filterItems: filterItemsMock
    }
  }
}
