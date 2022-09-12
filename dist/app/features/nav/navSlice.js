"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleNav = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    navOpen: false,
    navLinks: [
        {
            name: 'Home',
            path: '/',
        },
        {
            name: 'Login',
            path: '/login',
        },
        {
            name: 'Register',
            path: '/register',
        },
    ],
};
const navSlice = (0, toolkit_1.createSlice)({
    name: 'nav',
    initialState,
    reducers: {
        toggleNav: (state) => {
            state.navOpen = !state.navOpen;
        },
    },
});
exports.toggleNav = navSlice.actions.toggleNav;
exports.default = navSlice.reducer;
