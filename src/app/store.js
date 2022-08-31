import { configureStore } from '@reduxjs/toolkit'
import authSlice from './features/auth/authSlice'
import jrnlSlice from './features/jrnl/jrnlSlice'
import libSlice from './features/lib/libSlice'
import navSlice from './features/nav/navSlice'
import pgSlice from './features/pg/pgSlice'
import settingsSlice from './features/settings/settingsSlice'

const store = configureStore({
  reducer: {
    jrnl: jrnlSlice,
    lib: libSlice,
    nav: navSlice,
    settings: settingsSlice,
    pg: pgSlice,
    auth: authSlice,
  },
})

export default store
