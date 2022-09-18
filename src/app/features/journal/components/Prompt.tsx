import { MouseEventHandler } from 'react'
import styled from 'styled-components'

const Prompt = ({
  text,
  handleYes,
  handleNo,
}: {
  text: string
  handleYes: MouseEventHandler
  handleNo: MouseEventHandler
}) => {
  return (
    <BACKDROP>
      <PROMPT>
        <PROMPT_TEXT>{text}</PROMPT_TEXT>
        <PROMPT_YES id='yes' onClick={handleYes}>
          YES
        </PROMPT_YES>
        <PROMPT_NO onClick={handleNo}>NO</PROMPT_NO>
      </PROMPT>
    </BACKDROP>
  )
}

export default Prompt

const BACKDROP = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  position: relative;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  z-index: 1000;
`
const PROMPT = styled.div`
  max-width: 350px;
  background-color: silver;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`

const PROMPT_TEXT = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: black;
  margin: 0;
  text-align: center;
`

const PROMPT_YES = styled.button``

const PROMPT_NO = styled.button``
