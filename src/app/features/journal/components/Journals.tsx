import styled from 'styled-components'
import { useJournalsPackage } from '../../../hooks'
import CreateJournal from './CreateJournal'
import Journal from './Journal'
import Prompt from './Prompt'

const Journals = () => {
  const {
    journals,
    promptOpen,
    title,
    setPromptOpen,
    handleJournalClick,
    handleYes,
    handleNo,
    createOpen,
    toggleCreateOpen,
  } = useJournalsPackage()

  return (
    <>
      {promptOpen && <Prompt text={`Open ${title}?`} handleYes={handleYes} handleNo={handleNo} />}
      <JOURNALS>
        {!createOpen &&
          journals.map((journal, index) => (
            <Journal
              handleClick={handleJournalClick}
              key={journal._id}
              journal={journal}
              index={index}
            />
          ))}
        {createOpen && <CreateJournal toggleCreateOpen={toggleCreateOpen} />}
        {!createOpen && <CREATE_NEW onClick={toggleCreateOpen}>Create New</CREATE_NEW>}
      </JOURNALS>
    </>
  )
}

export default Journals

const JOURNALS = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: auto(auto-fit, minmax(70vw, 90vw));
  overflow-y: auto;
  place-items: center;
  grid-gap: 100px;
  padding: 30px;
  padding-top: 60px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
`

const CREATE_NEW = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 6px;
  background: none;
  border: none;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: fixed;
  top: 5px;
  left: 5px;
  display: grid;
  place-items: center;
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`
