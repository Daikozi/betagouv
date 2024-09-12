'use client'

import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'

import Button from '../Button/Button'

const SignIn: FC = () => {
  const { push } = useRouter()
  const { isLoggedIn } = useAuthentication()

  if (isLoggedIn) {
    return null
  }

  const onSignIn = () => {
    push('/signin/')
  }
  return <Button onClick={onSignIn}>Sign In</Button>
}

export default SignIn
