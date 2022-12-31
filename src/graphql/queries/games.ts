import { gql, QueryHookOptions } from '@apollo/client'
import { GameFragment } from 'graphql/fragments/game'
import { useQuery } from '@apollo/client'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

export const GET_GAMES = gql`
  query QueryGames($limit: Int, $start: Int, $sort: String, $where: JSON) {
    games(limit: $limit, start: $start, sort: $sort, where: $where) {
      ...GameFragment
    }

    gamesConnection(where: $where) {
      values {
        id
      }
    }
  }
  ${GameFragment}
`
export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
      id
      name
      short_description
      description
      price
      rating
      release_date
      gallery {
        src: url
        label: alternativeText
      }
      cover {
        src: url
      }
      developers {
        name
      }
      publisher {
        name
      }
      categories {
        name
      }
      platforms {
        name
      }
    }
  }
`

export function useQueryGames(
  options?: QueryHookOptions<QueryGames, QueryGamesVariables>
) {
  return useQuery<QueryGames, QueryGamesVariables>(GET_GAMES, options)
}
