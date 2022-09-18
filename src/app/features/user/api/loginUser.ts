import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { AppDispatch } from '../../../store'
import getJournals from '../../journal/api/getJournals'
import { IUser } from '../userSlice'

const loginUser = createAsyncThunk<
  { user: IUser },
  { email: string; password: string },
  { dispatch: AppDispatch }
>('user/login', async (payload: { email: string; password: string }, thunkAPI) => {
  const response = await axios.post('/auth/login', payload)
  if (response.data.user.journalIDs.length > 0) await thunkAPI.dispatch(getJournals())
  return response.data
})

export default loginUser
