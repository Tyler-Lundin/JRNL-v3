"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setAuthToken = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const authLogin_1 = require("../../api/auth/authLogin");
const initialState = {
    refreshToken: '',
    isAuthenticated: false,
    user: {
        id: '',
        email: '',
        username: '',
        libs: [],
        authToken: '',
    },
};
const authSlice = (0, toolkit_1.createSlice)({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.user.authToken = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(authLogin_1.loginUser.fulfilled, (state, action) => {
            state.isAuthenticated = true;
            state.user.authToken = action.payload.authToken;
            state.user.email = action.payload.email;
            state.user.username = action.payload.username;
            state.user.libs = action.payload.libs;
        })
            .addCase(authLogin_1.loginUser.rejected, (state, action) => {
            state.isAuthenticated = false;
        });
    },
});
exports.setAuthToken = authSlice.actions.setAuthToken;
exports.default = authSlice.reducer;
