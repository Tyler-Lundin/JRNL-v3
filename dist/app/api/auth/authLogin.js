"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
exports.loginUser = (0, toolkit_1.createAsyncThunk)('auth/loginUser', async (payload, thunkAPI) => {
    const { email, password } = payload;
    const response = await axios_1.default.post('/auth/login', { email, password });
    console.log(response);
    return response.data;
});
