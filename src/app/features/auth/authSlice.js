import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const loginUser = createAsyncThunk('auth/loginUser', async (payload, thunkAPI) => {
  const { email, password } = payload
  const response = await axios.post('/auth/login', { email, password })
  console.log(response)
  return response.data
})

const initialState = {
  authToken: '',
  refreshToken: '',
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isAuthenticated = false
      })
  },
})

export const { setAuthToken } = authSlice.actions

export default authSlice.reducer
