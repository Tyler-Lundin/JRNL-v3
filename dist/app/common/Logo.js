"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const Signature_1 = __importDefault(require("./Signature"));
const Logo = () => {
    return (<LOGO>
      <TITLE>JRNL</TITLE>
      <Signature_1.default />
    </LOGO>);
};
exports.default = Logo;
const LOGO = styled_components_1.default.div `
  width: 100%;
  height: fit-content;
  background-color: black;
  display: flex;
`;
const TITLE = styled_components_1.default.h1 `
  font-family: 'Komet', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  font-style: italic;
  margin: 0;
  padding: 5px 30px;
  box-shadow: 0 0 0 100vmax black;
  /* clip everything above and below the rectangle */
  clip-path: inset(0 -100vmax);
`;
