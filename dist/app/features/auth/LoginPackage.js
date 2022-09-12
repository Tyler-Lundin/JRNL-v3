"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const authLogin_1 = require("../../api/auth/authLogin");
const hooks_1 = require("../../hooks");
const LoginPackage = () => {
    const navTo = (0, react_router_dom_1.useNavigate)();
    const dispatch = (0, hooks_1.useAppDispatch)();
    const [email, setEmail] = (0, react_1.useState)('');
    const [password, setPassword] = (0, react_1.useState)('');
    const submitLogin = (e) => {
        e.preventDefault();
        const payload = { email, password };
        dispatch((0, authLogin_1.loginUser)(payload));
    };
    return {
        navTo,
        email,
        setEmail,
        password,
        setPassword,
        submitLogin,
    };
};
exports.default = LoginPackage;
