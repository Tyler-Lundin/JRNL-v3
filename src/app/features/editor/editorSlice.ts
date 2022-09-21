import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { IJournal, updateActiveJournal } from '../journal/journalSlice'

export interface IEditor {
  journal: IJournal
  pageIndex: number
  unsavedChanges: boolean
  saving: boolean
}

const initialState: IEditor = {
  journal: {
    _id: '',
    title: '',
    theme: 'default',
    userID: '',
    pages: [
      {
        title: '',
        content: '',
      },
    ],
  },
  pageIndex: 0,
  unsavedChanges: false,
  saving: false,
}

export const editorSlice = createSlice({
  name: 'editor',
  initialState,
  reducers: {
    startEditor: (state, action) => {
      state.journal = action.payload
    },
    nextPage: (state) => {
      state.pageIndex < 99 && state.pageIndex++
    },
    prevPage: (state) => {
      state.pageIndex > 0 && state.pageIndex--
    },
    setPageTitle: (state, action) => {
      console.log('action.payload', action.payload)
      state.unsavedChanges = true
      state.journal.pages[state.pageIndex].title = action.payload
    },
    setPageContent: (state, action) => {
      console.log('action.payload', action.payload)
      state.unsavedChanges = true
      state.journal.pages[state.pageIndex].content = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJournal.fulfilled, (state, action) => {
        state.unsavedChanges = false
        state.saving = false
      })

      .addCase(saveJournal.pending, (state) => {
        state.saving = true
      })

      .addCase(saveJournal.rejected, (state) => {
        state.saving = false
        state.unsavedChanges = true
      })
  },
})

export const { startEditor, nextPage, prevPage, setPageTitle, setPageContent } = editorSlice.actions
export default editorSlice.reducer

export const saveJournal = createAsyncThunk('editor/saveJournal', async (_, thunkAPI) => {
  const { editor } = thunkAPI.getState() as { editor: IEditor }
  const { journal } = editor
  const response = await axios.post('/journal/save', { journal })

  if (response.status === 200) {
    thunkAPI.dispatch(updateActiveJournal(response.data))
  }
  return response.data
})
