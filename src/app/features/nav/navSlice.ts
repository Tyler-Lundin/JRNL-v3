import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  navOpen: false,
  navLinks: [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Login',
      path: '/login',
    },
    {
      name: 'Register',
      path: '/register',
    },
  ],
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.navOpen = !state.navOpen
    },
  },
})

export const { toggleNav } = navSlice.actions

export default navSlice.reducer
