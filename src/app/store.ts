import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import journalSlice from './features/journal/journalSlice'
import navSlice from './features/nav/navSlice'

const store = configureStore({
  reducer: {
    journal: journalSlice,
    nav: navSlice,
    user: userSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
