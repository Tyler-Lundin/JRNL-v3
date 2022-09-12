import styled from 'styled-components'
import Logo from '../../common/Logo'
import useLoginPackage from './useLoginPackage'

const Login = () => {
  const { email, password, submitLogin, navTo, setEmail, setPassword } = useLoginPackage()
  return (
    <LOGIN>
      <FORM>
        <LOGO_CONTAINER children={<Logo />} />
        <INPUT
          type='text'
          placeholder='Username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <INPUT
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <BUTTON onClick={submitLogin}>Login</BUTTON>
        <SUBTITLE>or</SUBTITLE>
        <BUTTON onClick={() => navTo('/register')}>Register</BUTTON>
        <GITHUB_CONTAINER>
          <A href='https://github.com/Tyler-Lundin/JRNL-v3' target='_blank'>
            VIEW ON GITHUB
          </A>
        </GITHUB_CONTAINER>
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
  background-color: rgba(220, 220, 220, 0.8);
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
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  display: grid;
  align-content: center;
`

const INPUT = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 10px;
  font-size: 16px;
  &:focus {
    outline: none;
    border: 1px solid #000;
  }
`

const BUTTON = styled.button`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0 10px;
  font-size: 16px;
  font-family: 'Komet', sans-serif;
  font-weight: 700;
  &:focus {
    outline: none;
    border: 1px solid #000;
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
  font-family: 'Komet', sans-serif;
  display: grid;
  place-items: center;
  padding: 10px;
  box-sizing: border-box;
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
  font-family: 'Komet', sans-serif;
  text-decoration: none;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  box-sizing: border-box;
  transition: 250ms;

  :visited {
    color: black;
  }
  :hover {
    background-color: black;
    color: white;
  }
`
