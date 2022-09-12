"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const hooks_1 = require("../../../hooks");
const createJrnl_1 = require("../thunks/createJrnl");
const NewJrnlPrompt = ({ close }) => {
    const [jrnlTitle, setJrnlTitle] = (0, react_1.useState)('');
    // const [jrnlTheme, setJrnlTheme] = useState('')
    const dispatch = (0, hooks_1.useAppDispatch)();
    const handleCreate = () => {
        const payload = { title: jrnlTitle, theme: 'dark' };
        dispatch((0, createJrnl_1.createJrnl)(payload));
        close(); // close the prompt function
    };
    return (<>
      <BACKDROP onClick={close}/>
      <PROMPT>
        <INPUT placeholder='NEW TITLE' value={jrnlTitle} onChange={(e) => setJrnlTitle(e.target.value)}/>
        <BUTTON onClick={handleCreate}>CREATE</BUTTON>
      </PROMPT>
    </>);
};
exports.default = NewJrnlPrompt;
const INPUT = styled_components_1.default.input `
  background: none;
  border: none;
  text-align: center;
  border-bottom: 1px solid silver;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: white;
  }
`;
const TITLE = styled_components_1.default.h1 ``;
const BUTTON = styled_components_1.default.button `
  background: none;
  background-color: white;
  border-radius: 5px;
  color: black;
  font-size: 2rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  transition: 250ms;
  font-weight: bold;
  :hover {
    cursor: pointer;
    background-color: white;
    color: black;
  }
`;
const PROMPT = styled_components_1.default.div `
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.9);
  padding: 40px;
  border-radius: 5px;
  display: grid;
  place-content: center;
  grid-gap: 30px;
  z-index: 1;
  ${TITLE}, ${INPUT} {
    color: white;
    font-size: 2rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;
const BACKDROP = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 1;
`;
