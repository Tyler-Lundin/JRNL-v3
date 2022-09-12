import axios from 'axios'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Login from './features/user/Login'
import Nav from './features/nav/Nav'
import { useAppPackage } from './hooks'

function App() {
  axios.defaults.baseURL = 'http://localhost:3500'
  useAppPackage()
  return (
    <APP>
      <Nav />
      <Routes>
        <Route path='/login' element={<Login />} />
        {/* <Route path='/' element={<Home />} /> */}
      </Routes>
    </APP>
  )
}

export default App

const APP = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`
