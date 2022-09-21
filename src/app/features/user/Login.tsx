import styled from 'styled-components'
import { fadeIn, fadeInFromLeft } from '../../common/keyframes'
import Logo from '../../common/Logo'
import Spinner from '../../common/Spinner'
import { useLoginPackage } from '../../hooks'

const Login = () => {
  const { navTo, email, password, loading, error, submitLogin, handleFormChange } =
    useLoginPackage()
  return (
    <LOGIN>
      <FORM>
        {loading ? (
          <SPINNER_CONTAINER>
            <Spinner />
          </SPINNER_CONTAINER>
        ) : (
          <>
            <LOGO_CONTAINER aria-label='logo' children={<Logo />} />
            <INPUTS aria-label='email and password inputs'>
              <GROUP>
                <LABEL htmlFor='email'>EMAIL</LABEL>
                <INPUT
                  type='text'
                  placeholder='Username'
                  name='email'
                  value={email}
                  onChange={handleFormChange}
                />
              </GROUP>
              <GROUP>
                <LABEL htmlFor='password'>PASSWORD</LABEL>
                <INPUT
                  type='password'
                  placeholder='Password'
                  name='password'
                  value={password}
                  onChange={handleFormChange}
                />
              </GROUP>
            </INPUTS>
            <BUTTON onClick={submitLogin}>Login</BUTTON>
            <SUBTITLE>or</SUBTITLE>
            <BUTTON onClick={() => navTo('/register')}>Register</BUTTON>
            <GITHUB_CONTAINER>
              <A href='https://github.com/Tyler-Lundin/JRNL-v3' target='_blank'>
                VIEW ON GITHUB
              </A>
            </GITHUB_CONTAINER>
          </>
        )}
      </FORM>
    </LOGIN>
  )
}

export default Login

const LOGIN = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  background-color: rgb(28, 28, 28);
`

const SPINNER_CONTAINER = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`
const FORM = styled.form`
  overflow: hidden;
  width: 500px;
  height: 700px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  display: grid;
  align-content: center;
  animation: ${fadeIn} 1s ease-in-out;
`

const INPUTS = styled.div`
  padding: 40px 0;
  display: grid;
  grid-gap: 20.5px;
`

const GROUP = styled.div`
  position: relative;
  isolation: isolate;
`
const INPUT = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  background: none;
  background-color: white;
  color: black;
  border: 1px solid white;
  outline: 2px solid transparent;
  outline-offset: 5px;
  transition: 250ms;
`

const LABEL = styled.label`
  font-size: 16px;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  background-color: rgb(28, 28, 28);
  position: relative;
  z-index: 5;
  padding: 0 5px;
  margin-left: 5px;
`

const BUTTON = styled.button`
  width: fit-content;
  border: none;
  background-color: black;
  background: none;
  border-radius: 5px;
  color: white;
  margin: auto;
  padding: 10px;
  font-size: 2rem;
  font-family: 'Roboto', sans-serif;
  transition: 150ms;
  font-weight: 700;
  outline: 2px solid transparent;
  outline-offset: 5px;
  &:focus {
    outline: 2px solid white;
  }
  &:hover {
    cursor: pointer;
    color: black;
    background-color: gold;
  }
`

const LOGO_CONTAINER = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 5%;
`

const SUBTITLE = styled.div`
  width: 100%;
  height: fit-content;
  font-family: 'Roboto', sans-serif;
  display: grid;
  place-items: center;
  padding: 10px;
  box-sizing: border-box;
  color: white;
`

const GITHUB_CONTAINER = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 5%;
  display: grid;
  place-items: center;
`

const A = styled.a`
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  box-sizing: border-box;
  transition: 250ms;

  :visited {
    color: gold;
  }
  :hover {
    background-color: gold;
    color: black;
  }
`
