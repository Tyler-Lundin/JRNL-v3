import { createSlice } from '@reduxjs/toolkit'
import loginUser from './api/loginUser'
import registerUser from './api/registerUser'

export interface IUser {
  id: string
  email: string
  journalIDs: Array<string>
}

interface IUserState {
  id: string
  email: string
  journalIDs: string[]
  // authToken: string | null
  loggedIn: boolean
  loading: boolean
  error: string | undefined | null
}

const initialState: IUserState = {
  id: '',
  email: '',
  journalIDs: [],
  // authToken: '',
  loggedIn: false,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loggedIn = true
        state.loading = false
        state.id = action.payload.user.id
        state.email = action.payload.user.email
        state.journalIDs = action.payload.user.journalIDs
      })

      .addCase(loginUser.pending, (state, action) => {
        state.loading = true
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  },
})

export const {} = userSlice.actions

export default userSlice.reducer
