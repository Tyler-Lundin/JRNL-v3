import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const registerUser = createAsyncThunk(
  'user/register',
  async (payload: { email: string; username: string; password: string }) => {
    const response = await axios.post('/auth/register', payload)
    return response.data
  }
)

export default registerUser
