import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from 'react-toastify'

const registerUser = createAsyncThunk(
  'user/register',
  async (payload: { email: string; password: string }) => {
    const response = await axios.post('/auth/register', payload)
    if (response.status === 200) toast('Registration successful!', { type: 'success' })
    return response.data
  }
)

export default registerUser
