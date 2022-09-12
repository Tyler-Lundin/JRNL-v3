"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJrnl = exports.updateJrnl = exports.createJrnl = exports.getJrnl = exports.getAllJrnls = void 0;
const axios_1 = __importDefault(require("axios"));
const getAllJrnls = async ({ authToken }) => {
    const response = await axios_1.default.get('/jrnl/all', {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
    });
    return response.data;
};
exports.getAllJrnls = getAllJrnls;
const getJrnl = async ({ jrnlID, authToken }) => {
    const response = await axios_1.default.get(`/jrnl/${jrnlID}`, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
    });
    return response.data;
};
exports.getJrnl = getJrnl;
const createJrnl = async ({ title, theme, pages, authToken }) => {
    const response = await axios_1.default.post('/jrnl', { title, theme, pages }, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
    });
    return response.data;
};
exports.createJrnl = createJrnl;
const updateJrnl = async ({ jrnlID, title, theme, pages, authToken }) => {
    const response = await axios_1.default.put(`/jrnl/${jrnlID}`, { title, theme, pages }, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
    });
    return response.data;
};
exports.updateJrnl = updateJrnl;
const deleteJrnl = async ({ jrnlID, authToken }) => {
    const response = await axios_1.default.delete(`/jrnl/${jrnlID}`, {
        withCredentials: true,
        headers: { 'Content-Type': 'application/json', Authorization: authToken },
    });
    return response.data;
};
exports.deleteJrnl = deleteJrnl;
