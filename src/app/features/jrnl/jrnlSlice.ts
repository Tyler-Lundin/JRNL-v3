import { createSlice } from '@reduxjs/toolkit'
import { TTheme } from '../../common/types/theme.type'

export interface IJrnl {
  id: string
  title: string
  desc: string
  theme: TTheme
  userID: string
  libID: string
  pageIDs: string[]
}

type IJrnlState = {
  jrnl: IJrnl
  loading: boolean
  error: string
}

const initialState: IJrnlState = {
  jrnl: {
    id: '',
    title: '',
    desc: '',
    theme: 'default',
    userID: '',
    libID: '',
    pageIDs: [],
  },
  loading: false,
  error: '',
}

const jrnlSlice = createSlice({
  name: 'jrnl',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export const {} = jrnlSlice.actions

export default jrnlSlice.reducer
