import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oacm4j1jlk01xmhr0xgq0j/master',
  cache: new InMemoryCache()
})