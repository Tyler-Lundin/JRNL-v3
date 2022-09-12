"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const ai_1 = require("react-icons/ai");
const react_1 = require("react");
const NewJrnlPrompt_1 = __importDefault(require("./NewJrnlPrompt"));
const CreateJrnl = () => {
    const [promptOpen, setPromptOpen] = (0, react_1.useState)(false);
    const handlePromptOpen = () => setPromptOpen(true);
    const handlePromptClose = () => setPromptOpen(false);
    return (<>
      {promptOpen && <NewJrnlPrompt_1.default close={handlePromptClose}/>}
      <CREATEJRNL onClick={handlePromptOpen}>
        <TITLE>Create New</TITLE>
        <ICON_CONTAINER children={<ai_1.AiOutlinePlus size={100} color='white'/>}/>
      </CREATEJRNL>
    </>);
};
exports.default = CreateJrnl;
const CREATEJRNL = styled_components_1.default.div `
  width: 33vw;
  max-width: 300px;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  padding: 15px 30px;
  transition: 200ms;
  box-shadow: 0 0 5px 2px black;
  position: relative;
  background-color: rgb(40, 40, 50);
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 0 8px 3px black;
  }
`;
const TITLE = styled_components_1.default.h1 `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: white;
  width: 100%;
  text-align: center;
`;
const ICON_CONTAINER = styled_components_1.default.div `
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
`;
