import { configureStore } from '@reduxjs/toolkit'
import userSlice from './features/user/userSlice'
import journalSlice from './features/journal/journalSlice'
import navSlice from './features/nav/navSlice'
import editorSlice from './features/editor/editorSlice'

const store = configureStore({
  reducer: {
    journal: journalSlice,
    nav: navSlice,
    user: userSlice,
    editor: editorSlice,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
