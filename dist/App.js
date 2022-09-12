"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const styled_components_1 = __importDefault(require("styled-components"));
const Login_1 = __importDefault(require("./app/features/auth/Login"));
const Lib_1 = __importDefault(require("./app/features/lib/Lib"));
const getLibs_1 = require("./app/features/lib/thunks/getLibs");
const Nav_1 = __importDefault(require("./app/features/nav/Nav"));
const Page_1 = __importDefault(require("./app/features/page/Page"));
const Sandbox_1 = __importDefault(require("./app/features/_DEV/Sandbox"));
const hooks_1 = require("./app/hooks");
function App() {
    axios_1.default.defaults.baseURL = 'http://localhost:3500';
    const { user, isAuthenticated } = (0, hooks_1.useAppSelector)((state) => state.auth);
    const { authToken } = user;
    const navTo = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    (0, react_1.useEffect)(() => {
        if (authToken === '')
            navTo('/login');
        if (isAuthenticated) {
            dispatch((0, getLibs_1.getLibs)());
            navTo('/libs');
        }
    }, [authToken, isAuthenticated]);
    return (<APP>
      <Nav_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/login' element={<Login_1.default />}/>
        <react_router_dom_1.Route path='/' element={<Lib_1.default />}/>
        <react_router_dom_1.Route path='/jrnls' element={<Page_1.default />}/>
        <react_router_dom_1.Route path='/sandbox' element={<Sandbox_1.default />}/>
      </react_router_dom_1.Routes>
    </APP>);
}
exports.default = App;
const APP = styled_components_1.default.div `
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
`;
