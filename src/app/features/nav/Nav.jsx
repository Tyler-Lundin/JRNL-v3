import { useDispatch, useSelector } from 'react-redux'
import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { toggleNav } from './navSlice'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Nav = () => {
  const { navOpen, navLinks } = useSelector((state) => state.nav)
  const { darkmode } = useSelector((state) => state.settings)
  const dispatch = useDispatch()

  const renderNavLinks = navLinks.map((l, i) => (
    <NAV_LINK onClick={() => dispatch(toggleNav())} key={i} to={l.path} children={l.name} />
  ))

  return (
    <>
      {navOpen && <BACKDROP onClick={() => dispatch(toggleNav())} />}
      <NAV_TOGGLE
        open={navOpen}
        onClick={() => dispatch(toggleNav())}
        children={navOpen ? <AiOutlineClose size='90%' /> : <AiOutlineMenu size='90%' />}
      />
      <NAV open={navOpen} DM={darkmode} children={renderNavLinks} />
    </>
  )
}

export default Nav

const NAV = styled.nav`
  width: 300px;
  height: 100vh;
  background-color: ${({ DM }) => (DM ? 'black' : 'white')};
  position: absolute;
  transition: 250ms;
  right: -100%;
  display: grid;
  place-content: center;
  gap: 30px;
  ${({ open }) =>
    open &&
    css`
      right: 0;
    `}
  z-index: 3;
`

const NAV_LINK = styled(Link)`
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  transition: 250ms;
  color: black;
  padding: 10px;
  width: 100%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const NAV_TOGGLE = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: ${({ DM }) => (DM ? 'black' : 'white')};
  ${({ open }) =>
    open &&
    css`
      background-color: rgba(220, 80, 80, 0.5);
    `}
  border-radius: 10px;
  cursor: pointer;
  z-index: 4;
  display: grid;
  place-items: center;
  box-shadow: 0px 2px 0 1px black;
  transition: 250ms;
  :hover {
    box-shadow: 0px 1px 0 1px gray;
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const BACKDROP = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  backdrop-filter: blur(2px);
  animation: ${fadeIn} 250ms ease-in-out;
`
