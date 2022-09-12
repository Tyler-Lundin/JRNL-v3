"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Signature = () => {
    return (<SIGNATURE>
      <TITLE>by Tyler Lundin</TITLE>
    </SIGNATURE>);
};
exports.default = Signature;
const SIGNATURE = styled_components_1.default.div `
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 50px;
  place-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  align-self: center;
`;
const TITLE = styled_components_1.default.p `
  font-family: 'Komet', sans-serif;
  margin: 0;
  color: white;
`;
