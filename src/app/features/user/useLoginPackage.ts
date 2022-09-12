import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../hooks'
import loginUser from './api/loginUser'

const useLoginPackage = () => {
  const navTo = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const submitLogin = (e: any) => {
    e.preventDefault()
    const payload = { email, password }
    dispatch(loginUser(payload))
  }
  return {
    navTo,
    email,
    setEmail,
    password,
    setPassword,
    submitLogin,
  }
}

export default useLoginPackage
