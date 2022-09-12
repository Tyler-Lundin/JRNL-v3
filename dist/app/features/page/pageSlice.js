"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.toggleEditTitle = exports.setPageContent = exports.setPageTitle = exports.setPage = exports.pageSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    jrnlID: '',
    pageTitle: '',
    pageContent: '',
    pageLoading: false,
    pageSaved: false,
    editTitle: false,
};
exports.pageSlice = (0, toolkit_1.createSlice)({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action) => {
            console.log('setpage:', action.payload);
            state.jrnlID = action.payload.jrnlID;
            state.pageTitle = action.payload.pageTitle;
            state.pageContent = action.payload.pageContent;
        },
        setPageTitle: (state, action) => {
            state.pageTitle = action.payload;
        },
        setPageContent: (state, action) => {
            state.pageContent = action.payload;
        },
        toggleEditTitle: (state) => {
            state.editTitle = !state.editTitle;
        },
    },
});
_a = exports.pageSlice.actions, exports.setPage = _a.setPage, exports.setPageTitle = _a.setPageTitle, exports.setPageContent = _a.setPageContent, exports.toggleEditTitle = _a.toggleEditTitle;
exports.default = exports.pageSlice.reducer;
