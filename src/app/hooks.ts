import { ChangeEvent, useEffect, useState } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { IJournal, setActiveJournal } from './features/journal/journalSlice'
import loginUser from './features/user/api/loginUser'
import registerUser from './features/user/api/registerUser'
import type { RootState, AppDispatch } from './store'
import getJournals from './features/journal/api/getJournals'
import { useSwipeable } from 'react-swipeable'
import { startEditor } from './features/editor/editorSlice'

export const DEBUG_MODE = true // set to true to see console logs

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/**
 * App.tsx PACKAGE
 */
export const useAppPackage = () => {
  const loggedIn = useAppSelector((state) => state.user.loggedIn)
  const navTo = useNavigate()
  const dispatch = useAppDispatch()
  useEffect(() => (loggedIn ? navTo('/') : navTo('/login')), [loggedIn])
}

/**
 * Register.tsx PACKAGE
 */
export const useRegisterPackage = () => {
  if (DEBUG_MODE) console.log('useRegisterPackage')
  const navTo = useNavigate()
  const dispatch = useAppDispatch()
  const [form, setForm] = useState({ email: '', password: '', verifyPassword: '' })
  const { email, password, verifyPassword } = form
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (DEBUG_MODE) console.log('handleFormChange', e.target.name, ' / ', e.target.value)
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const submitRegister = (e: any) => {
    if (DEBUG_MODE) console.log('submitRegister')
    e.preventDefault()
    const payload = { email, password }
    dispatch(registerUser(payload))
    navTo('/login')
  }
  const handleLogin = (e: any) => {
    if (DEBUG_MODE) console.log('handleLogin')
    e.preventDefault()
    navTo('/login')
  }
  return {
    navTo,
    email,
    password,
    verifyPassword,
    handleFormChange,
    handleLogin,
    submitRegister,
  }
}

/**
 * Login.tsx PACKAGE
 */
export const useLoginPackage = () => {
  const navTo = useNavigate()
  const dispatch = useAppDispatch()
  const { loggedIn, loading, error } = useAppSelector((state) => state.user)
  const [form, setForm] = useState({ email: '', password: '' })
  const { email, password } = form
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const submitLogin = (e: any) => {
    e.preventDefault()
    const payload = { email, password }
    dispatch(loginUser(payload))
  }
  useEffect(() => {
    if (loggedIn) navTo('/')
  }, [loggedIn])
  return {
    navTo,
    email,
    password,
    loading,
    error,
    handleFormChange,
    submitLogin,
  }
}

/**
 * Journals.tsx PACKAGE
 */
export const useJournalsPackage = () => {
  const { loggedIn } = useAppSelector((state) => state.user)
  const { activeJournal } = useAppSelector((state) => state.journal)
  const navTo = useNavigate()
  const { title } = activeJournal
  const [promptOpen, setPromptOpen] = useState(false)
  const [createOpen, setCreateOpen] = useState(false)
  const dispatch = useAppDispatch()
  const journals = useAppSelector((state) => state.journal.journals)
  const handleJournalClick = (id: string) => {
    dispatch(setActiveJournal(id))
    setPromptOpen(true)
  }
  const handleYes = () => {
    console.log('open editor for journal')
    setPromptOpen(false)
    navTo('/editor')
  }
  const handleNo = () => {
    setPromptOpen(false)
  }
  const toggleCreateOpen = () => {
    setCreateOpen((pS) => !pS)
  }

  const renderJournals = () => console.log('renderJournals')

  useEffect(() => {
    if (loggedIn) dispatch(getJournals())
  }, [loggedIn])

  useEffect(() => {
    if (journals.length === 0) setCreateOpen(true)
  }, [])

  return {
    journals,
    promptOpen,
    title,
    setPromptOpen,
    handleJournalClick,
    handleYes,
    handleNo,
    createOpen,
    toggleCreateOpen,
    renderJournals,
  }
}
