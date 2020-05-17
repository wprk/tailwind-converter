import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { GRAPHQL_ENDPOINT } from './config/index'

export const makeClient = () => {
  const link = new HttpLink({
    uri: `${GRAPHQL_ENDPOINT}`,
  })

  const cache = new InMemoryCache()

  const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache,
    link
  });

  return client
}
