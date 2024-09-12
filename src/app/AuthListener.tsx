import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'

import { useAuthentication } from '@/hooks/useAuthentication'

import firebase_app from '../firebase/config'

export const AuthListener = () => {
  const { login, logout } = useAuthentication()

  useEffect(() => {
    const auth = getAuth(firebase_app)

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        login(user.displayName || 'Anonymous')
      } else {
        logout()
      }
    })

    return () => unsubscribe()
  }, [login, logout])

  return null
}
