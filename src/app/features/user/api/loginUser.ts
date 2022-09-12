import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const loginUser = createAsyncThunk(
  'user/login',
  async (payload: { email: string; password: string }) => {
    const response = await axios.post('/auth/login', payload)
    return response.data
  }
)

export default loginUser
