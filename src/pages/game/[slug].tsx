import Game, { GameTemplateProps } from 'templates/Game'
import { items as GameMock } from 'components/GameCardSlider/mock'
import { item as HighlightMock } from 'components/Highlight/mock'
import { useRouter } from 'next/router'
import { initializeApollo } from 'utils/apollo'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { GET_GAMES, QUERY_GAME_BY_SLUG } from 'graphql/queries/games'
import {
  QueryGameBySlug,
  QueryGameBySlugVariables
} from 'graphql/generated/QueryGamesBySlug'
import { GetStaticProps } from 'next'

const apolloClient = initializeApollo()

export default function Index(props: GameTemplateProps) {
  const router = useRouter()

  // If the page is not generated yet, this will be displayed
  if (router.isFallback) return null

  return <Game {...props} />
}

// Get existing props from the template
export async function getStaticPaths() {
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GET_GAMES,
    variables: {
      limit: 9,
      start: 0,
      sort: 'id:desc'
    }
  })

  const paths = data.games.map(({ slug }) => ({
    params: { slug }
  }))

  return {
    paths,
    fallback: true
  }
}

// Generate in build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { data } = await apolloClient.query<
    QueryGameBySlug,
    QueryGameBySlugVariables
  >({
    query: QUERY_GAME_BY_SLUG,
    variables: { slug: `${params?.slug}` }
  })

  // if (!data.games.length) {
  //   return { notFound: true }
  // }

  const game = data.games[0]

  return {
    props: {
      // revalidate: 60,
      cover: game.cover?.src ? `http://localhost:1337${game.cover.src}` : '',
      gameInfo: {
        title: game.name,
        price: game.price,
        description: game.short_description
      },
      gallery: game.gallery.map((image) => ({
        src: `http://localhost:1337${image.src}`,
        label: image.label
      })),
      description: game.description,
      details: {
        developer: game.developers[0].name,
        releaseDate: game.release_date,
        platforms: game.platforms.map((platform) => platform.name),
        publisher: game.publisher?.name,
        rating: game.rating,
        genres: game.categories.map((category) => category.name)
      },
      upcomingGames: GameMock,
      upcomingHighlight: HighlightMock,
      recommendedGames: GameMock
    }
  }
}
