import Home, { HomeTemplateProps } from 'templates/Home'

import { item as highlightMock } from 'components/Highlight/mock'
import { initializeApollo } from 'utils/apollo'
import { QUERY_HOME } from 'graphql/queries/home'
import { QueryHome } from 'graphql/generated/QueryHome'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome>({
    query: QUERY_HOME,
    variables: {
      limit: 15
    }
  })

  return {
    props: {
      revalidate: 60,

      banners: banners.map((banner) => ({
        img: `http://localhost:1337${banner.image?.url}`,
        title: banner.title,
        subtitle: banner.subtitle,
        buttonLabel: banner.button?.label ?? '',
        buttonLink: banner.button?.links ?? '',
        ribbon: banner.ribbon?.text ?? '',
        ribbonColor: banner.ribbon?.color ?? '',
        ribbonSize: banner.ribbon?.sizes ?? ''
      })),

      newGames: newGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name ? game.developers[0].name : '',
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),

      mostPopularHighlight: highlightMock,

      mostPopularGames: sections!.popularGames!.games.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name ? game.developers[0].name : '',
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),

      upcomingGames: upcomingGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name ? game.developers[0].name : '',
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),

      upcommingHighligth: highlightMock,

      freeGames: freeGames.map((game) => ({
        title: game.name,
        slug: game.slug,
        developer: game.developers[0]?.name ? game.developers[0].name : '',
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      })),

      freeHighligth: highlightMock
    }
  }
}
