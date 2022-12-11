import { gql } from '@apollo/client'

export const GET_GAMES = gql`
  query Query($limit: Int!, $start: Int!, $sort: String) {
    games(limit: $limit, start: $start, sort: $sort) {
      name
      slug
      developers {
        name
      }
      cover {
        url
      }
      price
    }
  }
`
