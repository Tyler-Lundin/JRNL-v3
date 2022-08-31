import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import TM from './themes'

export const getLib = createAsyncThunk('lib/getLib', async (_, thunkAPI) => {
  const res = await axios.get('/jrnl/', { data: { authToken: '123' } })
  if (res.status === 200) return res.data
  else thunkAPI.rejectWithValue(res.status)
})

const initialState = {
  scale: 1,
  theme: TM.light,
  jrnls: [],
}

const libSlice = createSlice({
  name: 'lib',
  initialState,
  reducers: {
    setScale: (state, action) => {
      state.scale = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLib.fulfilled, (state, action) => {
        state.jrnls = action.payload
      })
      .addCase(getLib.rejected, (state, action) => {
        state.jrnls = []
      })
  },
})

export const { setScale } = libSlice.actions

export default libSlice.reducer
