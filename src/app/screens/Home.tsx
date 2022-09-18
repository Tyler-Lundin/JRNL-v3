import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import Journals from '../features/journal/components/Journals'

const Home = () => {
  return (
    <HOME>
      <Journals />
    </HOME>
  )
}

export default Home

const HOME = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(28, 28, 28);
`

const TITLE = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: white;
  margin: 0;
`
