import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IJournal } from '../journalSlice'

const createJournal = createAsyncThunk<IJournal, { title: string; theme: string }>(
  'journal/createJournal',
  async (payload) => {
    const { title, theme } = payload
    const response = await axios.post('/journal/create', { title, theme })
    return response.data
  }
)

export default createJournal
