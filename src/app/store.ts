import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import jrnlSlice from './features/jrnl/jrnlSlice'
import navSlice from './features/nav/navSlice'

const store = configureStore({
  reducer: {
    jrnl: jrnlSlice,
    nav: navSlice,
    user: userSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
