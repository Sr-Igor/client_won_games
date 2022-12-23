import { GET_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, sort: 'id:desc' }
  },
  result: {
    data: {
      games: [
        {
          name: 'Game 1',
          slug: 'game-1',
          cover: { url: '/img/img1.jpg' },
          developers: [{ name: 'Developer 1' }],
          price: 215,
          __typename: 'Game'
        }
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, sort: 'id:desc', start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ]
    }
  }
}
