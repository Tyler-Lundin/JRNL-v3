"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLibs = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const axios_1 = __importDefault(require("axios"));
exports.getLibs = (0, toolkit_1.createAsyncThunk)('lib/getLibs', async (_, { getState }) => {
    const { auth } = getState();
    const response = await axios_1.default.get('/lib/', {
        headers: {
            Authorization: `${auth.user.authToken}`,
        },
    });
    return response.data;
});
