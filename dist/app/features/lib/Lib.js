"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = __importDefault(require("styled-components"));
const hooks_1 = require("../../hooks");
const CreateJrnl_1 = __importDefault(require("../jrnl/components/CreateJrnl"));
const Jrnl_1 = __importDefault(require("../jrnl/Jrnl"));
const Lib = () => {
    const { jrnls } = (0, hooks_1.useAppSelector)((state) => state.lib);
    const renderJrnls = jrnls?.map((jrnl, index) => <Jrnl_1.default key={`${jrnl._id}-${index}`} jrnl={jrnl}/>);
    return (<LIB>
      {renderJrnls}
      <CreateJrnl_1.default />
    </LIB>);
};
exports.default = Lib;
const LIB = styled_components_1.default.div `
  overflow-y: auto;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  gap: 20px;
  justify-content: space-between;
  justify-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1600px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
