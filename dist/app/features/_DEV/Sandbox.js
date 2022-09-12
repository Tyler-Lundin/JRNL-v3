"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const NewLib_1 = __importDefault(require("../lib/NewLib"));
const Sandbox = () => {
    return (<SANDBOX>
      <NewLib_1.default />
    </SANDBOX>);
};
exports.default = Sandbox;
const SANDBOX = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: silver;
`;
