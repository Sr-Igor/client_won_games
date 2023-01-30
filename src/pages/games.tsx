import { initializeApollo } from 'utils/apollo'
import { GET_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import { parseQueryStringToWhere } from 'utils/filter'

import GamesTemplate, { GameTemplateProps } from 'templates/Games'
import { GetServerSidePropsContext } from 'next'
import {
  genresFields,
  platformFields,
  priceFields,
  sortFields
} from '../utils/filter/fields'

export default function GamesPage(props: GameTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const apolloClient = initializeApollo()

  const filterPrice = {
    title: 'Price',
    name: 'price_lte',
    type: 'radio',
    fields: priceFields
  }

  const filterPlatforms = {
    title: 'Platforms',
    name: 'platforms',
    type: 'checkbox',
    fields: platformFields
  }

  const filterSort = {
    title: 'Sort by price',
    name: 'sort',
    type: 'radio',
    fields: sortFields
  }

  const filterCategories = {
    title: 'Genres',
    name: 'categories',
    type: 'checkbox',
    fields: genresFields
  }

  const filterItems = [
    filterSort,
    filterPrice,
    filterPlatforms,
    filterCategories
  ]

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: GET_GAMES,
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
      filterItems
    }
  }
}
