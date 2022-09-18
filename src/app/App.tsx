import axios from 'axios'
import { useRoutes } from 'react-router-dom'
import styled from 'styled-components'
import Login from './features/user/Login'
import Nav from './features/nav/Nav'
import { useAppPackage } from './hooks'
import Register from './features/user/Register'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Home from './screens/Home'
import Editor from './features/editor/Editor'

const AppRoutes = () =>
  useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/editor', element: <Editor /> },
  ])

function App() {
  axios.defaults.baseURL = 'http://localhost:3500'
  axios.defaults.withCredentials = true
  useAppPackage()

  return (
    <APP>
      <Nav />
      <AppRoutes />
      <ToastContainer />
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
