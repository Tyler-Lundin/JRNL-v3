import { MouseEventHandler, SyntheticEvent, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { useAppDispatch } from '../../../hooks'
import createJournal from '../api/createJournal'
import ThemeSelector from './ThemeSelector'

const CreateJournal = ({ toggleCreateOpen }: { toggleCreateOpen: () => void }) => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState('Untitled')
  const [theme, setTheme] = useState('none')
  const handleCreate = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(createJournal({ title, theme }))
    toggleCreateOpen()
  }

  return (
    <CONTAINER>
      <CREATE_JOURNAL $bg={theme}>
        <BINDING />
        <COVER>
          <TITLE_INPUT
            name='title'
            value={title}
            maxLength={13}
            onChange={(e) => setTitle(e.target.value.replace(/[^a-zA-Z0-9 ]/gi, ''))}
          />
        </COVER>
        <SAVE onClick={handleCreate} onTouchEnd={handleCreate}>
          Create '{title}'
        </SAVE>
      </CREATE_JOURNAL>
      <ThemeSelector setTheme={setTheme} theme={theme} />
      <EXIT_BUTTON onClick={toggleCreateOpen}>X</EXIT_BUTTON>
    </CONTAINER>
  )
}

export default CreateJournal

const HOVER = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`

const CONTAINER = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: silver;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`

const CREATE_JOURNAL = styled.form<{ $bg: string }>`
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.$bg};
  color: white;
  width: 69vw;
  max-height: 80vh;
  max-width: calc(80vh * 0.7);
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  box-shadow: 20px 20px 200px ${(props) => props.$bg}, -20px -20px 200px ${(props) => props.$bg};
  animation: ${HOVER} 2s infinite ease-in-out;
`

const BINDING = styled.div`
  width: 40px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 3px 0 0 3px;
`

const COVER = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 20%;
  box-sizing: border-box;
  border-radius: 0 6px 6px 0;
`

const TITLE_INPUT = styled.input`
  font-family: 'Roboto', monospace;
  color: inherit;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  padding: 0 20px;
  width: 80%;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (min-width: 600px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
  transition: 200ms;
  outline: 2px solid transparent;
  :focus {
    outline: 4px solid white;
  }
`

const SAVE = styled.button`
  font-family: 'Roboto', monospace;
  color: black;
  background-color: rgb(67, 218, 67);
  border: none;
  padding: 20px;
  width: 110%;
  margin: auto;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transition: 200ms;
  transform: translate(-50%, 50%);
  @media (max-width: 600px) {
    font-size: 2rem;
  }
  @media (min-width: 600px) {
    font-size: 3.5rem;
  }
  @media (min-width: 1200px) {
    font-size: 4rem;
  }
  outline: 2px solid transparent;
  :hover {
    outline: 4px solid white;
  }
`

const EXIT_BUTTON = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  top: 4px;
  left: 10px;
  background-color: transparent;
  border: none;
  border-radius: 6px;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  transition: 200ms;
  :hover {
    color: black;
    background-color: white;
  }
`
