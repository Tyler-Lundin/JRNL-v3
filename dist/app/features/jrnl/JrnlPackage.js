"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const jrnlSlice_1 = require("./jrnlSlice");
const JrnlPackage = (jrnl) => {
    const { jrnlID, jrnlTitle, jrnlTheme } = jrnl;
    const navTo = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleJrnlClick = () => {
        dispatch((0, jrnlSlice_1.setCurrentJrnl)(jrnl));
        navTo('/jrnl');
    };
    return {
        jrnlID,
        jrnlTitle,
        jrnlTheme,
        navTo,
        dispatch,
        handleJrnlClick,
    };
};
exports.default = JrnlPackage;
