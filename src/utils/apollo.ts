import { ApolloClient, HttpLink, NormalizedCacheObject } from '@apollo/client'

import { useMemo } from 'react'
import apolloCache from './apolloCache'

let apolloClient: ApolloClient<NormalizedCacheObject | null>

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({ uri: 'http://localhost:1337/graphql' }),
    cache: apolloCache
  })
}

export function initializeApollo(initialState = null) {
  //Verify if the apolloClient is already created
  const apolloClientGlobal = apolloClient ?? createApolloClient()

  if (initialState) {
    //If the client has already been created, we can restore the cache
    // const existingCache = apolloClientGlobal.extract()
    apolloClientGlobal.cache.restore(initialState)
  }

  //For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return apolloClientGlobal
  apolloClient = apolloClient ?? apolloClientGlobal

  return apolloClient
}

export function useApollo(initialState = null) {
  const store = useMemo(() => initializeApollo(initialState), [initialState])
  return store
}
