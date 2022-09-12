import styled from 'styled-components'
import { useJrnlPackage } from '../../hooks'

const Jrnl = ({ jrnl, index }: { jrnl: any; index: any }) => {
  const { id, title, handleJrnlClick } = useJrnlPackage(jrnl)
  return (
    <JRNL id={`${id}-jrnl`} onClick={handleJrnlClick}>
      <TITLE>{title}</TITLE>
      <BINDING />
    </JRNL>
  )
}

export default Jrnl

const JRNL = styled.div`
  background-color: rgb(40, 40, 50);
  box-shadow: 0 0 5px 2px black;
  color: white;
  border: 1px solid black;
  width: 33vw;
  max-width: 300px;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  padding: 15px 30px;
  transition: 200ms;
  position: relative;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 0 8px 3px black;
  }
`

const TITLE = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: inherit;
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
