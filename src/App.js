import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Route, Routes, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Login from './app/features/auth/Login'
import Lib from './app/features/lib/Lib'
import Nav from './app/features/nav/Nav'
import Pg from './app/features/pg/Pg'

function App() {
  axios.defaults.baseURL = 'http://localhost:3500'
  const { authToken, isAuthenticated } = useSelector((state) => state.auth)
  const navTo = useNavigate()
  useEffect(() => {
    if (authToken === '') navTo('/login')
    if (isAuthenticated) navTo('/')
  }, [authToken, isAuthenticated])
  return (
    <APP>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Lib />} />
        <Route path='/:jrnlID' element={<Pg />} />
      </Routes>
    </APP>
  )
}

export default App

const APP = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`
