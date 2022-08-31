import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setPg } from '../pg/pgSlice'

export const setJrnl = createAsyncThunk('jrnl/setJrnl', async (jrnl, thunkAPI) => {
  console.log('setJrnl:', jrnl)
  const { jrnlPages } = jrnl
  thunkAPI.dispatch(setPg(jrnlPages[0]))
  return jrnl
})

export const nextPg = createAsyncThunk('jrnl/nextPg', async (_, thunkAPI) => {
  const { jrnlPages, pgIndex } = thunkAPI.getState().jrnl
  if (pgIndex < jrnlPages.length - 1) {
    // save page before going to next page
    thunkAPI.dispatch(setPgIndex(pgIndex + 1))
    thunkAPI.dispatch(setPg(jrnlPages[pgIndex + 1]))
  }
})

export const prevPg = createAsyncThunk('jrnl/prevPg', async (_, thunkAPI) => {
  const { jrnlPages, pgIndex } = thunkAPI.getState().jrnl
  if (pgIndex > 0) {
    // save page before going to previous page
    thunkAPI.dispatch(setPgIndex(pgIndex - 1))
    thunkAPI.dispatch(setPg(jrnlPages[pgIndex - 1]))
  }
})

const initialState = {
  jrnlID: '',
  jrnlTitle: '',
  jrnlTheme: [],
  jrnlPages: [],
  jrnlHovered: false,
  pgIndex: 0,
}

const jrnlSlice = createSlice({
  name: 'jrnl',
  initialState,
  reducers: {
    setPgIndex: (state, action) => {
      state.pgIndex = action.payload
    },
    setJrnlHovered: (state, action) => {
      state.jrnlHovered = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setJrnl.fulfilled, (state, action) => {
      state.jrnlID = action.payload.jrnlID
      state.jrnlTitle = action.payload.jrnlTitle
      state.jrnlTheme = action.payload.jrnlTheme
      state.jrnlPages = action.payload.jrnlPages
    })
  },
})

export const { setPgIndex, setJrnlHovered } = jrnlSlice.actions

export default jrnlSlice.reducer
