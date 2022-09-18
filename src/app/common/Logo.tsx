import styled from 'styled-components'
import Signature from './Signature'

const Logo = () => {
  return (
    <LOGO>
      <TITLE>Journal</TITLE>
      <Signature />
    </LOGO>
  )
}

export default Logo

const LOGO = styled.div`
  width: 100%;
  height: fit-content;
  /* background-color: black; */
  display: flex;
  justify-content: center;
`

const TITLE = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 4.5rem;
  color: gold;
  margin: 0;
  padding: 5px 30px;
`
