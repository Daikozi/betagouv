import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

type AuthenticationState = {
  isLoggedIn: boolean
  userName: string | null
}

const initialState: AuthenticationState = {
  isLoggedIn: false,
  userName: null,
}

const authenticationSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isLoggedIn = true
      state.userName = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.userName = null
    },
  },
})

export const { login, logout } = authenticationSlice.actions
export default authenticationSlice.reducer
