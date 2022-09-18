import styled from 'styled-components'
import Logo from '../../common/Logo'
import { useRegisterPackage } from '../../hooks'

const Register = () => {
  const { submitRegister, handleLogin, email, password, verifyPassword, handleFormChange } =
    useRegisterPackage()
  return (
    <LOGIN>
      <FORM>
        <LOGO_CONTAINER children={<Logo />} />
        <INPUT
          type='text'
          placeholder='Email'
          name='email'
          value={email}
          onChange={handleFormChange}
        />
        <INPUT
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={handleFormChange}
        />
        <INPUT
          type='password'
          placeholder='Verify Password'
          name='verifyPassword'
          value={verifyPassword}
          onChange={handleFormChange}
        />
        <BUTTON onClick={submitRegister}>Register</BUTTON>
        <SUBTITLE>or</SUBTITLE>
        <BUTTON onClick={handleLogin}>Login</BUTTON>
        <GITHUB_CONTAINER>
          <A href='https://github.com/Tyler-Lundin/JRNL-v3' target='_blank'>
            VIEW ON GITHUB
          </A>
        </GITHUB_CONTAINER>
      </FORM>
    </LOGIN>
  )
}

export default Register

const LOGIN = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  background-color: rgb(28, 28, 28);
`

const FORM = styled.form`
  overflow: hidden;
  width: 500px;
  height: 500px;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 20px;
  display: grid;
  align-content: center;
`

const INPUT = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  border: none;
  background: transparent;
  color: white;
  &:focus {
    outline: none;
    background: none;
  }
`

const BUTTON = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid white;
  background: none;
  border-radius: 5px;
  color: white;
  margin: auto;
  padding: 0 10px;
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  transition: 250ms;
  font-weight: 700;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    color: black;
    background-color: white;
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
    color: skyblue;
  }
  :hover {
    background-color: skyblue;
    color: black;
  }
`
