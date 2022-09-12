import { createSlice } from '@reduxjs/toolkit'

interface IUserState {
  id: string
  email: string
  jrnlIDs: string[]
  authToken: string | null
  loggedIn: boolean
  loading: boolean
  error: string | null
}

const initialState: IUserState = {
  id: '',
  email: '',
  jrnlIDs: [],
  authToken: '',
  loggedIn: false,
  loading: false,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    },
  },
  extraReducers: (builder) => {},
})

export const { setAuthToken } = userSlice.actions

export default userSlice.reducer
