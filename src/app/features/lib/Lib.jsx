import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import Jrnl from '../jrnl/Jrnl'

const Lib = ({ children }) => {
  const { theme, jrnls } = useSelector((state) => state.lib)
  const renderJrnls = jrnls.map((jrnl) => <Jrnl key={jrnl.jrnlID} jrnl={jrnl} />)
  return <LIB tm={theme} children={renderJrnls} />
}

export default Lib

const LIB = styled.div`
  ${({ tm }) => tm}
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  justify-content: space-between;
  justify-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`
