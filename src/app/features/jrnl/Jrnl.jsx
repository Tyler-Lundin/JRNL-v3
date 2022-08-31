import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { setPgList } from '../pg/pgSlice'
import { setJrnl } from './jrnlSlice'

const Jrnl = ({ jrnl }) => {
  const { jrnlID, jrnlTitle, jrnlPages } = jrnl
  const [hovered, setHovered] = useState(false)
  const navTo = useNavigate()
  const dispatch = useDispatch()
  const handleJrnlClick = () => {
    const pgIndex = jrnlPages.length
    dispatch(setJrnl(jrnl))
  }
  return (
    <JRNL
      onClick={handleJrnlClick}
      hovered={hovered}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <TITLE>{jrnlTitle}</TITLE>
      <BINDING />
    </JRNL>
  )
}

export default Jrnl

const JRNL = styled.div`
  width: 33vw;
  max-width: 300px;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  padding: 15px 30px;
  transition: 200ms;
  box-shadow: 0 0 5px 2px black;
  position: relative;
  ${({ hovered }) =>
    hovered &&
    css`
      transform: scale(1.05);
      cursor: pointer;
      box-shadow: 0 0 8px 3px black;
    `}
`

const TITLE = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
`

const BINDING = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.5); */
  background-color: rgba(0, 0, 0, 0.5);
`
