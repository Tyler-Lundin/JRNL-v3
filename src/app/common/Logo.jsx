import styled from 'styled-components'
import Signature from './Signature'

const Logo = () => {
  return (
    <LOGO>
      <TITLE>JRNL</TITLE>
      <Signature />
    </LOGO>
  )
}

export default Logo

const LOGO = styled.div`
  width: 100%;
  height: fit-content;
  background-color: black;
  display: flex;
`

const TITLE = styled.h1`
  font-family: 'Komet', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  font-style: italic;
  margin: 0;
  padding: 5px 30px;
  box-shadow: 0 0 0 100vmax black;
  /* clip everything above and below the rectangle */
  clip-path: inset(0 -100vmax);
`
