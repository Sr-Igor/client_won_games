import WishlistTemplate, { WishlistTemplateProps } from 'templates/Wishlist'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import { items as gamesMock } from 'components/GameCardSlider/mock'
import protectedRoutes from 'utils/protected-routes'
import { GetServerSidePropsContext } from 'next'
// import { item as highlightMock } from 'components/Highlight/mock'

export default function Wishlist(props: WishlistTemplateProps) {
  return <WishlistTemplate {...props} />
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()
  const session = await protectedRoutes(ctx)

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      ),
      session
    }
  }
}
