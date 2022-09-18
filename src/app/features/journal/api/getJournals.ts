import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../../store'
import { IJournal } from '../journalSlice'

const getJournals = createAsyncThunk<{ journals: Array<IJournal> }, void, { state: RootState }>(
  'journal/getJournals',
  async (_: void, thunkAPI) => {
    console.log('getJournals thunk')
    const response = await axios.get('/journal/all')
    return response.data
  }
)

export default getJournals
