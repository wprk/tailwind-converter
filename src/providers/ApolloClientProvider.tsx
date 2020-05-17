import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { makeClient } from '../Apollo'

const ApolloClientProvider = ({ children }: any) => {

  const getClient = () => {
    return makeClient()
  }

  return (
    <ApolloProvider client={getClient()}>
      { children }
    </ApolloProvider>
  )
}

export default ApolloClientProvider
