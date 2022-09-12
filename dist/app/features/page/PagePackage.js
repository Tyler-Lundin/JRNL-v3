"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const react_router_dom_1 = require("react-router-dom");
const pageSlice_1 = require("./pageSlice");
const PagePackage = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const navTo = (0, react_router_dom_1.useNavigate)();
    const { pageIndex, jrnlID, jrnlPages } = (0, react_redux_1.useSelector)((state) => state.jrnl);
    const { pageTitle, pageContent, pageLoading, pageSaved, editTitle } = (0, react_redux_1.useSelector)((state) => state.page);
    const handleContent = (e) => dispatch((0, pageSlice_1.setPageContent)(e.target.value));
    const handleTitle = (e) => dispatch((0, pageSlice_1.setPageTitle)(e.target.value));
    (0, react_1.useEffect)(() => {
        if (jrnlID === '' && !pageLoading)
            navTo('/');
    });
    const PageData = {
        pageTitle,
        pageContent,
        pageLoading,
        pageSaved,
        editTitle,
        pageIndex,
        jrnlID,
        jrnlPages,
        dispatch,
        navTo,
        handleContent,
        handleTitle,
    };
    return PageData;
};
exports.default = PagePackage;
