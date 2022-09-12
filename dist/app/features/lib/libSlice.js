"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    libs: [],
    jrnls: [],
    lib: {
        _id: '',
        name: '',
        description: '',
        jrnls: [],
        user: {},
        theme: '',
    },
};
const libSlice = (0, toolkit_1.createSlice)({
    name: 'lib',
    initialState,
    reducers: {},
});
_a = libSlice.actions;
exports.default = libSlice.reducer;
