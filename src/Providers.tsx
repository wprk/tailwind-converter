import React from 'react'

import ApolloClientProvider from './providers/ApolloClientProvider'

const Providers = ({ children }: any) => (
  <ApolloClientProvider>
    { children }
  </ApolloClientProvider>
)

export default Providers
