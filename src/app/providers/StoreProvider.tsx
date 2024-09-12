'use client'

import type { FC, ReactNode } from 'react'
import { useRef } from 'react'
import { Provider } from 'react-redux'

import type { AppStore } from '../../lib/store'
import { makeStore } from '../../lib/store'
import { AuthListener } from './AuthListener'

type StoreProviderType = {
  children: ReactNode
}

const StoreProvider: FC<StoreProviderType> = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <AuthListener />
      {children}
    </Provider>
  )
}

export default StoreProvider
