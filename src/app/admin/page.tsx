'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'

const Page = () => {
  const { userName } = useAuthentication()
  const { push } = useRouter()

  useEffect(() => {
    if (!userName) push('/')
  }, [userName, push])

  return <h1>Only logged in users can view this page</h1>
}

export default Page
