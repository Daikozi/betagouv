import { useCallback } from 'react'

import { useAppDispatch, useAppSelector } from '@/lib/hooks'

import { login as loginAction, logout as logoutAction } from '../lib/features/authentication/authenticationSlice'

type UseAuthenticationReturn = {
  isLoggedIn: boolean
  userName: string | null
  login: (displayName: string | null) => void
  logout: VoidFunction
}

export const useAuthentication = (): UseAuthenticationReturn => {
  const { isLoggedIn, userName } = useAppSelector((state) => state.authentication)
  const dispatch = useAppDispatch()

  console.log({ isLoggedIn, userName })

  const login = useCallback(
    (displayName: string | null) => {
      dispatch(loginAction(displayName || 'Anonymous'))
    },
    [dispatch],
  )

  const logout = useCallback(() => {
    dispatch(logoutAction())
  }, [dispatch])

  return { isLoggedIn, userName, login, logout }
}
