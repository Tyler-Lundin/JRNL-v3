import styled from 'styled-components'

const EditJournal = () => {
  return (
    <CREATE_JOURNAL>
      <BINDING />
      <COVER>
        <TITLE>CREATE JOURNAL</TITLE>
      </COVER>
    </CREATE_JOURNAL>
  )
}

export default EditJournal

const CREATE_JOURNAL = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: rgb(50, 50, 80);
  color: white;
  width: 69vw;
  max-height: 80vh;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  transition: 200ms;
  position: relative;
  text-align: center;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  outline: 2px solid transparent;
  :hover {
    outline: 4px solid white;
  }
`

const BINDING = styled.div`
  width: 40px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`

const COVER = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 20%;
`

const TITLE = styled.h1`
  font-family: 'Roboto', monospace;
  color: inherit;
  font-size: 3.5rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: fit-content;
  height: fit-content;
  padding: 0 20px;
  border-radius: 10px;
  margin: auto;
`
