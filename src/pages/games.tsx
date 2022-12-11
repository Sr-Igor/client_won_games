import GamesTemplate, { GameTemplateProps } from '../templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { initializeApollo } from 'utils/apollo'
import { GET_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()
  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GET_GAMES,
    variables: {
      limit: 9,
      start: 0,
      sort: 'id:desc'
    }
  })

  return {
    props: {
      // revalidate: 60,
      games: data.games.map((game) => ({
        title: game.name,
        developer: game.developers[0]?.name ? game.developers[0].name : '',
        img: game.cover?.url ? `http://localhost:1337${game.cover.url}` : '',
        price: game.price,
        slug: game.slug
      })),
      filterItems: filterItemsMock
    }
  }
}
