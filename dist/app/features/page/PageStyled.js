"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.S = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const selectEditTitle = () => exports.S.EDIT_TITLE;
const selectTitle = () => exports.S.TITLE;
exports.S = {
    PAGE: styled_components_1.default.div `
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: min-content 1fr;
    position: relative;
  `,
    TITLE: styled_components_1.default.p `
    margin: 0;
    text-align: center;
  `,
    PAGE_CONTROLS: styled_components_1.default.div `
    width: fit-content;
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    position: absolute;
    bottom: 0px;
    place-items: center;
    width: 100%;
    box-sizing: border-box;
  `,
    EDIT_TITLE: styled_components_1.default.input `
    border: none;
    color: gray;
    text-align: center;
    width: 100%;
    :focus {
      outline: none;
    }
  `,
    HEADER: styled_components_1.default.div `
    ${selectEditTitle}, ${selectTitle} {
      ${({ fontSize }) => fontSize}
      ${({ fontPack }) => fontPack}
  margin: none;
    }
    height: 50px;
    padding: 10px;
    width: 100%;
    transition: 250ms;
    display: grid;
    align-items: center;
    position: relative;
    border-bottom: 1px solid silver;
    background-color: ${({ dm }) => (dm ? 'black' : 'white')};
    ${selectTitle} {
      color: ${({ dm }) => (!dm ? 'black' : 'white')};
    }
  `,
    PAGE_INDEX: styled_components_1.default.p `
    align-self: end;
    margin: 0;
  `,
    CONTENT: styled_components_1.default.textarea `
    ${({ fontSize }) => fontSize}
    ${({ fontPack }) => fontPack}
padding: 10px;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    border: none;
    :focus {
      outline: none;
    }
  `,
    BODY: styled_components_1.default.div `
    height: 100%;
    position: relative;
    width: 100%;
  `,
    NEXT_PAGE: styled_components_1.default.div `
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
  `,
    PREV_PAGE: styled_components_1.default.div `
    width: 45px;
    height: 45px;
    display: grid;
    place-items: center;
  `,
    TITLE_CONTAINER: styled_components_1.default.div `
    position: absolute;
    width: 100%;
    top: 10px;
    display: grid;
    place-items: center;
  `,
};
