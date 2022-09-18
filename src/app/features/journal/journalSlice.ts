import { createSlice } from '@reduxjs/toolkit'
import { TTheme } from '../../common/types/theme.type'
import createJournal from './api/createJournal'
import getJournals from './api/getJournals'

export interface IJournal {
  _id?: string
  title: string
  theme: TTheme
  userID: string
  pages: TPage[]
}

export interface IJournalPayloads {
  journal?: IJournal
  journals?: IJournal[]
}

export type TPage = {
  title: string
  content: string
}

type IJournalState = {
  activeJournal: IJournal
  journals: IJournal[]
  status: 'idle' | 'loading' | 'failed'
}

const initialState: IJournalState = {
  activeJournal: {
    _id: '',
    title: '',
    theme: 'default',
    userID: '',
    pages: [],
  },
  journals: [],
  status: 'idle',
}

const journalSlice = createSlice({
  name: 'journal',
  initialState,
  reducers: {
    setActiveJournal(state, action) {
      const activeJournal = state.journals.find((journal) => journal._id === action.payload)
      if (activeJournal) {
        state.activeJournal = activeJournal
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getJournals.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.journals = action.payload.journals
        state.journals.reverse()
        state.status = 'idle'
      })
      .addCase(createJournal.fulfilled, (state, action) => {
        console.log('action.payload', action.payload)
        state.journals.unshift(action.payload)
        state.status = 'idle'
      })

      .addCase(getJournals.pending, (state) => {
        state.status = 'loading'
      })

      .addCase(getJournals.rejected, (state) => {
        state.status = 'failed'
      })
  },
})

export const { setActiveJournal } = journalSlice.actions

export default journalSlice.reducer
