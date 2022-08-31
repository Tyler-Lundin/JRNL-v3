import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setPgContent, setPgTitle, toggleEditTitle } from './pgSlice'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { nextPg, prevPg, setJrnl } from '../jrnl/jrnlSlice'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Pg = () => {
  const { pgTitle, pgContent, pgLoading, pgSaved, editTitle } = useSelector((state) => state.pg)
  const { pgIndex, jrnlID, jrnlPages } = useSelector((state) => state.jrnl)
  const dispatch = useDispatch()
  const navTo = useNavigate()
  const { darkmode, fontSize, fontPack } = useSelector((state) => state.settings)
  const handleContent = (e) => dispatch(setPgContent(e.target.value))
  const handleTitle = (e) => dispatch(setPgTitle(e.target.value))
  useEffect(() => {
    if (jrnlID === '' && !pgLoading) navTo('/')
  })
  return (
    <PG>
      <HEADER fontPack={fontPack.title} fontSize={fontSize.xxl} dm={darkmode}>
        <TITLE_CONTAINER>
          {!editTitle && <TITLE onClick={() => dispatch(toggleEditTitle())} children={pgTitle} />}
          {editTitle && (
            <EDIT_TITLE
              onBlur={() => dispatch(toggleEditTitle())}
              onChange={handleTitle}
              defaultValue={pgTitle}
            />
          )}
        </TITLE_CONTAINER>
        <PG_CONTROLS>
          <PREV_PAGE onClick={() => dispatch(prevPg())} children={<AiOutlineLeft size='100%' />} />
          <PG_INDEX>
            {pgIndex + 1} / {jrnlPages.length}
          </PG_INDEX>
          <NEXT_PAGE onClick={() => dispatch(nextPg())} children={<AiOutlineRight size='100%' />} />
        </PG_CONTROLS>
      </HEADER>
      <BODY>
        <CONTENT
          onClick={() => dispatch(toggleEditTitle())}
          fontPack={fontPack.content}
          fontSize={fontSize.l}
          type='text'
          onChange={handleContent}
          value={pgContent}
          name={`${pgIndex}-${pgTitle}`}
        />
      </BODY>
    </PG>
  )
}

export default Pg

const PG = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: min-content 1fr;
  position: relative;
`
const TITLE = styled.p`
  margin: 0;
  text-align: center;
`

const PG_CONTROLS = styled.div`
  width: fit-content;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: absolute;
  bottom: 0px;
  place-items: center;
  width: 100%;
  box-sizing: border-box;
`

const EDIT_TITLE = styled.input`
  border: none;
  color: gray;
  text-align: center;
  width: 100%;
  :focus {
    outline: none;
  }
`

const HEADER = styled.div`
  ${EDIT_TITLE}, ${TITLE} {
    ${({ fontSize }) => fontSize}
    ${({ fontPack }) => fontPack}
    margin: none;
  }
  height: 50px;
  padding: 10px;
  width: 100%;
  transition: 250ms;
  display: grid;
  align-items: center;
  position: relative;
  border-bottom: 1px solid silver;
  background-color: ${({ dm }) => (dm ? 'black' : 'white')};
  ${TITLE} {
    color: ${({ dm }) => (!dm ? 'black' : 'white')};
  }
`

const PG_INDEX = styled.p`
  align-self: end;
  margin: 0;
`

const CONTENT = styled.textarea`
  ${({ fontSize }) => fontSize}
  ${({ fontPack }) => fontPack}
  padding: 10px;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  border: none;
  :focus {
    outline: none;
  }
`

const BODY = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`

const NEXT_PAGE = styled.div`
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
`

const PREV_PAGE = styled.div`
  width: 45px;
  height: 45px;
  display: grid;
  place-items: center;
`

const TITLE_CONTAINER = styled.div`
  position: absolute;
  width: 100%;
  top: 10px;
  display: grid;
  place-items: center;
`
