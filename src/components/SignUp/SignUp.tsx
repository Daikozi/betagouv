'use client'

import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'

import Button from '../Button/Button'

const SignUp: FC = () => {
  const { push } = useRouter()
  const { isLoggedIn } = useAuthentication()

  if (isLoggedIn) {
    return null
  }

  const onSignUp = () => {
    push('/signup/')
  }
  return <Button onClick={onSignUp}>Sign Up</Button>
}

export default SignUp
