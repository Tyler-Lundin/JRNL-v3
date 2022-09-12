"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importStar(require("styled-components"));
const react_router_dom_1 = require("react-router-dom");
const navSlice_1 = require("./navSlice");
const ai_1 = require("react-icons/ai");
const hooks_1 = require("../../hooks");
const Nav = () => {
    const { navOpen, navLinks } = (0, hooks_1.useAppSelector)((state) => state.nav);
    const dispatch = (0, hooks_1.useAppDispatch)();
    const renderNavLinks = navLinks.map((l, i) => (<NAV_LINK onClick={() => dispatch((0, navSlice_1.toggleNav)())} key={i} to={l.path} children={l.name}/>));
    return (<>
      {navOpen && <BACKDROP onClick={() => dispatch((0, navSlice_1.toggleNav)())}/>}
      <NAV_TOGGLE onClick={() => dispatch((0, navSlice_1.toggleNav)())} children={navOpen ? <ai_1.AiOutlineClose size='90%'/> : <ai_1.AiOutlineMenu size='80%'/>}/>
      <NAV open={navOpen} children={renderNavLinks}/>
    </>);
};
exports.default = Nav;
const NAV = styled_components_1.default.nav `
  width: 300px;
  height: 100vh;
  background-color: skyblue;
  position: absolute;
  transition: 250ms;
  right: -100%;
  display: grid;
  place-content: center;
  gap: 30px;
  ${({ open }) => open &&
    (0, styled_components_1.css) `
      right: 0;
    `}
  z-index: 3;
`;
const NAV_LINK = (0, styled_components_1.default)(react_router_dom_1.Link) `
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
    'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
  transition: 250ms;
  color: black;
  padding: 10px;
  width: 100%;
  :hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
const NAV_TOGGLE = styled_components_1.default.div `
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 20px;
  cursor: pointer;
  z-index: 4;
  display: grid;
  place-items: center;
  transition: 250ms;
  :hover {
    box-shadow: 0px 1px 0 1px gray;
  }
`;
const fadeIn = (0, styled_components_1.keyframes) `
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const BACKDROP = styled_components_1.default.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  backdrop-filter: blur(2px);
  animation: ${fadeIn} 250ms ease-in-out;
`;
