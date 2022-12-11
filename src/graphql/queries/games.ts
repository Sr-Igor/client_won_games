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
export const QUERY_GAME_BY_SLUG = gql`
  query QueryGameBySlug($slug: String!) {
    games(where: { slug: $slug }) {
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
