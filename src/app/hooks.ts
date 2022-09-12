import { useEffect } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IJrnl } from './features/jrnl/jrnlSlice'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppPackage = () => {
  const { authToken, loggedIn } = useAppSelector((state) => state.user)
  const navTo = useNavigate()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (authToken === '') navTo('/login')
    if (loggedIn) {
      navTo('/home')
    }
  }, [authToken, loggedIn])
}

export const useJrnlPackage = (jrnl: IJrnl) => {
  const { id, title, theme } = jrnl
  const navTo = useNavigate()
  const dispatch = useDispatch()
  const handleJrnlClick = () => {
    console.log('jrnl clicked')
  }
  return {
    id,
    title,
    theme,
    handleJrnlClick,
  }
}
