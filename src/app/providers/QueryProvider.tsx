'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { FC, ReactNode } from 'react'
import React from 'react'

const queryClient = new QueryClient()

type QueryProviderType = {
  isAuthenticated?: boolean
  children: ReactNode
}

const QueryProvider: FC<QueryProviderType> = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default QueryProvider
