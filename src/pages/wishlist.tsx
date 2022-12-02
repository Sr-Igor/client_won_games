import WishlistTemplate, { WishlistTemplateProps } from '../templates/Wishlist'

import { items as gamesMock } from '../components/GameCardSlider/mock'
import { item as highlightMock } from '../components/Highlight/mock'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
