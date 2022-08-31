import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  jrnlID: '',
  pgTitle: '',
  pgContent: '',
  pgLoading: false,
  pgSaved: false,
  editTitle: false,
}

export const pgSlice = createSlice({
  name: 'pg',
  initialState,
  reducers: {
    setPg: (state, action) => {
      console.log('setpg:', action.payload)
      state.jrnlID = action.payload.jrnlID
      state.pgTitle = action.payload.pgTitle
      state.pgContent = action.payload.pgContent
    },
    setPgList: (state, action) => {
      state.pgList = action.payload
    },
    setPgTitle: (state, action) => {
      state.pgTitle = action.payload
    },
    setPgContent: (state, action) => {
      state.pgContent = action.payload
    },
    toggleEditTitle: (state) => {
      state.editTitle = !state.editTitle
    },
  },
})

export const { setPg, setPgList, setPgTitle, setPgContent, toggleEditTitle } = pgSlice.actions

export default pgSlice.reducer
