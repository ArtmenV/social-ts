import { ApolloClient, InMemoryCache } from '@apollo/client'
import { gql } from '@apollo/client'

// const client = ...

export const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache(),
})

client.query({
  query: gql`
    query GetRates {
      rates(currency: "USD") {
        currency
      }
    }
  `,
})
