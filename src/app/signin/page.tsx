/* eslint-disable no-console */

'use client'

import { useRouter } from 'next/navigation'
import type { SyntheticEvent } from 'react'
import React from 'react'

import signIn from '@/firebase/auth/signin'

function Page() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: SyntheticEvent) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password)

    if (error) {
      return console.error(error)
    }

    console.log(result)
    return router.push('/')
  }
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign in</h1>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button type="submit">Sign in</button>
        </form>
      </div>
    </div>
  )
}

export default Page
