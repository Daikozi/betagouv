'use client'

import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'
import { useFetchArticles } from '@/hooks/useFetchArticles'

import Button from '../Button/Button'

const Logout: FC = () => {
  const { push } = useRouter()
  const { isLoggedIn, logout } = useAuthentication()
  const { data } = useFetchArticles()

  console.log({ data })

  if (!isLoggedIn) {
    return null
  }

  const onLogout = () => {
    logout()
    push('/')
  }
  return <Button onClick={onLogout}>Logout</Button>
}

export default Logout
