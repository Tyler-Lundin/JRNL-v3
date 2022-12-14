import styled, { css, keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
import { toggleLinks, openNav, closeNav } from './navSlice'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { useEffect, useState } from 'react'

const Nav = () => {
  const { navOpen, navLinks } = useAppSelector((state) => state.nav)
  const { loggedIn } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const renderNavLinks = navLinks.map((l, i) => (
    <NAV_LINK onClick={() => dispatch(closeNav())} key={i} to={l.path} children={l.name} />
  ))
  useEffect(() => {
    if (loggedIn) {
      dispatch(toggleLinks())
    }
  }, [loggedIn])

  return (
    <NAV_CONTAINER>
      {navOpen && <BACKDROP onClick={() => dispatch(closeNav())} />}
      <NAV_TOGGLE
        onClick={() => dispatch(navOpen ? closeNav() : openNav())}
        children={navOpen ? <AiOutlineClose size='90%' /> : <AiOutlineMenu size='80%' />}
      />
      <NAV open={navOpen} children={renderNavLinks} />
    </NAV_CONTAINER>
  )
}

export default Nav

const NAV_CONTAINER = styled.div`
  position: relative;
  z-index: 9999;
`

const NAV = styled.nav<{ open: boolean }>`
  width: 100%;
  height: 100vh;
  background-color: rgb(48, 48, 48);
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
  color: white;
  padding: 10px;
  width: 100%;
  outline: 2px solid transparent;
  border-radius: 10px;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

const NAV_TOGGLE = styled.button`
  position: absolute;
  background: none;
  border: none;
  top: 4px;
  right: 10px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 4;
  border-radius: 6px;
  display: grid;
  place-items: center;
  transition: 250ms;
  outline: 2px solid transparent;

  :hover {
    background-color: white;
  }
  svg {
    color: white;
    transition: 250ms;
  }
  :hover > svg {
    color: black;
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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  animation: ${fadeIn} 250ms ease-in-out;
`
