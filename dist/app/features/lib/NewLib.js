"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const THEMES_1 = __importDefault(require("../jrnl/THEMES"));
const NewLib = () => {
    const [newLibName, setNewLibName] = (0, react_1.useState)('');
    return (<NEWLIB>
      <HEADER>{/* SWAP OUT ON CLICK TO INPUT A NEW TITLE */}</HEADER>
      <TABLE>
        <LIB_LABEL>
          <LABEL>Library Name</LABEL>
        </LIB_LABEL>
        <FAKE_JRNL theme={THEMES_1.default.atlas}>
          <TITLE>GYM</TITLE>
          <BINDING />
        </FAKE_JRNL>
        <FAKE_JRNL theme={THEMES_1.default.fire}>
          <TITLE>FOOD</TITLE>
          <BINDING />
        </FAKE_JRNL>
        <FAKE_JRNL theme={THEMES_1.default.grass}>
          <TITLE>IDEAS</TITLE>
          <BINDING />
        </FAKE_JRNL>
        <FAKE_JRNL theme={THEMES_1.default.purpleBliss}>
          <TITLE>MONEY</TITLE>
          <BINDING />
        </FAKE_JRNL>
      </TABLE>
    </NEWLIB>);
};
exports.default = NewLib;
const NEWLIB = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  background-color: black;
  box-sizing: border-box;
  #spacer {
    height: 75px;
    width: 100%;
  }
`;
const TABLE = styled_components_1.default.div `
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  background-color: goldenrod;
  padding-left: 45px;
  padding-right: 45px;
  padding-bottom: 20px;
  box-sizing: border-box;
`;
const FAKE_JRNL = styled_components_1.default.div `
  ${(props) => props.theme}
  box-shadow: -5px 5px 0px 2px black;
  color: white;
  border: 1px solid black;
  text-align: center;
  width: 16.5vw;
  max-width: 150px;
  max-height: 210px;
  aspect-ratio: 8.25 / 11.75;
  border-radius: 6px;
  padding: 15px 30px;
  transition: 200ms;
  position: relative;
  h1 {
    transform: translateX(10px);
  }
  :hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 0 0 8px 3px white;
  }
`;
const TITLE = styled_components_1.default.h1 `
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  color: inherit;
  transition: 250ms;
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
  :hover {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;
const BINDING = styled_components_1.default.div `
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  border-right: 1px solid rgba(0, 0, 0, 0.5);
  /* box-shadow: 3px 0 6px 0 rgba(0, 0, 0, 0.5); */
  background-color: rgba(0, 0, 0, 0.5);
`;
const HEADER = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  padding: 20px;
  display: flex;
  color: white;
  background-color: black;
  h1 {
    margin: 0;
  }
`;
const LIB_LABEL = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-top: 10px;
`;
const LABEL = styled_components_1.default.h1 `
  font-size: 4rem;
  font-weight: 700;
  color: white;
  transition: 100ms;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  :hover {
    color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }
`;
