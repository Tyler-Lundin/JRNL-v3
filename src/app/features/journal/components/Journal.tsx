import { MouseEventHandler } from 'react'
import styled from 'styled-components'

const Journal = ({
  handleClick,
  journal,
  index,
}: {
  handleClick: (id: string) => void
  journal: any
  index: any
}) => {
  const { _id, title, theme } = journal
  // usejournalPackage(journal)

  return (
    <JOURNAL $thm={theme} id={`${_id}-journal`} onClick={() => handleClick(journal._id)}>
      <BINDING />
      <COVER>
        <TITLE>{title}</TITLE>
      </COVER>
    </JOURNAL>
  )
}

export default Journal

const JOURNAL = styled.div<{ $thm: string }>`
  font-family: 'Roboto', sans-serif;
  background-color: ${(props) => props.$thm || 'gray'};
  border: 1px solid black;
  font-family: 'Roboto', sans-serif;
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
  outline: 2px solid transparent;
  transition: 250ms;
  :hover {
    outline: 4px solid white;
    cursor: pointer;
  }
`

const COVER = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  padding-top: 20%;
  box-sizing: border-box;
`

const TITLE = styled.h1`
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

const BINDING = styled.div`
  width: 40px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`
