import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Signature = () => {
  return (
    <SIGNATURE>
      <TITLE>by Tyler Lundin</TITLE>
    </SIGNATURE>
  )
}

export default Signature

const SIGNATURE = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
  place-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  align-self: center;
`

const TITLE = styled.p`
  font-family: 'Komet', sans-serif;
  margin: 0;
  color: white;
`
