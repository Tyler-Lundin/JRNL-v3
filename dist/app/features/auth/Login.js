"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Logo_1 = __importDefault(require("../../common/Logo"));
const LoginPackage_1 = __importDefault(require("./LoginPackage"));
const Login = () => {
    const { email, password, submitLogin, navTo, setEmail, setPassword } = (0, LoginPackage_1.default)();
    return (<LOGIN>
      <FORM>
        <LOGO_CONTAINER children={<Logo_1.default />}/>
        <INPUT type='text' placeholder='Username' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <INPUT type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        <BUTTON onClick={submitLogin}>Login</BUTTON>
        <SUBTITLE>or</SUBTITLE>
        <BUTTON onClick={() => navTo('/register')}>Register</BUTTON>
        <GITHUB_CONTAINER>
          <A href='https://github.com/Tyler-Lundin/JRNL-v3' target='_blank'>
            VIEW ON GITHUB
          </A>
        </GITHUB_CONTAINER>
      </FORM>
    </LOGIN>);
};
exports.default = Login;
const LOGIN = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 9999;
  background-color: rgba(220, 220, 220, 0.8);
`;
const FORM = styled_components_1.default.form `
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
`;
const INPUT = styled_components_1.default.input `
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
`;
const BUTTON = styled_components_1.default.button `
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
`;
const LOGO_CONTAINER = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 5%;
`;
const SUBTITLE = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  font-family: 'Komet', sans-serif;
  display: grid;
  place-items: center;
  padding: 10px;
  box-sizing: border-box;
`;
const GITHUB_CONTAINER = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  position: absolute;
  bottom: 5%;
  display: grid;
  place-items: center;
`;
const A = styled_components_1.default.a `
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
`;
