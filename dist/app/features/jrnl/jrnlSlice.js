"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    jrnlID: 'jrnlID',
    jrnlTitle: 'Untitled',
    jrnlDesc: 'Untitled is my journal about . . .',
    jrnlTheme: 'default',
    userID: '',
    libID: '',
    pageIDs: [''],
};
const jrnlSlice = (0, toolkit_1.createSlice)({
    name: 'jrnl',
    initialState,
    reducers: {},
    extraReducers: (builder) => { },
});
_a = jrnlSlice.actions;
exports.default = jrnlSlice.reducer;
