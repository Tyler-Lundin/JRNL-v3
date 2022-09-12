"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
const getAllJrnls = (0, toolkit_1.createAsyncThunk)('jrnl/getAllJrnls', async (noArgs, { getState }) => {
    const { auth } = getState();
    const response = await axios_1.default.get('/jrnl/all', {
        withCredentials: true,
        headers: {
            'Content-Type': 'application/json',
            Authorization: auth.user.authToken,
        },
    });
    return response.data;
});
