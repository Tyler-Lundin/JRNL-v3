import styled from 'styled-components'
// import { useEditorPackage } from '../../hooks'
import useEditor from './useEditor'

const Editor = () => {
  const { swiping, handleTitle, handleContent, journal, pageIndex } = useEditor()

  return (
    <EDITOR {...swiping}>
      <HEADER>
        <TITLE value={journal.pages[pageIndex]?.title || ''} onChange={handleTitle} />
        <PAGE_INDEX>{pageIndex + 1}/99</PAGE_INDEX>
      </HEADER>
      <BODY>
        <TEXTAREA value={journal.pages[pageIndex]?.content || ''} onChange={handleContent} />
      </BODY>
    </EDITOR>
  )
}

export default Editor

const EDITOR = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(28, 28, 28);
`

const HEADER = styled.div`
  height: 50px;
  border-bottom: 1px solid silver;
  padding: 0 10px;
  box-sizing: border-box;
`

const TITLE = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  border-radius: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 1.8rem;
  color: white;
  :focus {
    outline: none;
  }
`

const BODY = styled.div`
  height: calc(100% - 50px);
  padding: 10px;
  box-sizing: border-box;
`

const TEXTAREA = styled.textarea`
  min-width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  resize: none;
  background: none;
  border: none;
  border-radius: 0;
  outline: none;
  color: white;
`

const PAGE_INDEX = styled.h5`
  position: absolute;
  left: 50%;
  top: 50px;
  margin: 0;
  transform: translateX(-50%) translateY(-50%);
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  background-color: rgb(28, 28, 28);
  padding: 0 10px;
  color: white;
`
