'use client'

import { useRouter } from 'next/navigation'
import type { FC } from 'react'
import React from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'

import Button from '../Button/Button'

const Admin: FC = () => {
  const { push } = useRouter()
  const { isLoggedIn } = useAuthentication()

  if (!isLoggedIn) {
    return null
  }

  const onAdmin = () => {
    push('/admin')
  }
  return (
    <Button onClick={onAdmin} variant="secondary">
      Admin
    </Button>
  )
}

export default Admin
