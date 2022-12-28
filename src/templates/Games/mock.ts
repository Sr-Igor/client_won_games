import { GET_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, sort: 'id:desc', where: {} }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Game 1',
          slug: 'game-1',
          cover: { url: '/img/img1.jpg' },
          developers: [{ name: 'Developer 1' }],
          price: 215,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, sort: 'id:desc', where: {}, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          id: '2',
          name: 'Fetch More Game',
          slug: 'fetch-more',
          price: 518.39,
          developers: [{ name: 'sample developer' }],
          cover: {
            url: 'sample-game.jpg'
          },
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GameConnection'
      }
    }
  }
}

export const noGamesMock = {
  request: {
    query: GET_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}
