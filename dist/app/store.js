"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const authSlice_1 = __importDefault(require("./features/auth/authSlice"));
const jrnlSlice_1 = __importDefault(require("./features/jrnl/jrnlSlice"));
const libSlice_1 = __importDefault(require("./features/lib/libSlice"));
const navSlice_1 = __importDefault(require("./features/nav/navSlice"));
const pageSlice_1 = __importDefault(require("./features/page/pageSlice"));
const store = (0, toolkit_1.configureStore)({
    reducer: {
        jrnl: jrnlSlice_1.default,
        lib: libSlice_1.default,
        nav: navSlice_1.default,
        page: pageSlice_1.default,
        auth: authSlice_1.default,
    },
});
exports.default = store;
