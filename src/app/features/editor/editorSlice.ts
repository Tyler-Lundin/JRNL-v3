import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Journal: null,
  PageIndex: 0,
  Page: null,
  JournalPages: [],
  JournalTitle: '',
  JournalContent: '',
  unsavedChanges: false,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export const {} = editorSlice.actions
export default editorSlice.reducer
