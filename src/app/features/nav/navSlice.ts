import { createSlice } from '@reduxjs/toolkit'

const loggedInLinks = [
  { name: 'Home', path: '/' },
  { name: 'Journals', path: '/journals' },
  { name: 'Profile', path: '/profile' },
  { name: 'Logout', path: '/logout' },
]

const loggedOutLinks = [
  { name: 'Home', path: '/' },
  { name: 'Login', path: '/login' },
  { name: 'Register', path: '/register' },
]

const initialState = {
  navOpen: false,
  navLinks: loggedOutLinks,
}

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    openNav: (state) => {
      state.navOpen = true
    },
    closeNav: (state) => {
      state.navOpen = false
    },
    toggleLinks: (state) => {
      state.navLinks = state.navLinks === loggedInLinks ? loggedOutLinks : loggedInLinks
    },
  },
})

export const { openNav, closeNav, toggleLinks } = navSlice.actions

export default navSlice.reducer
