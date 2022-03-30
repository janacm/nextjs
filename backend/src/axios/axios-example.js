"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const axios = require('axios').default;
const axios_1 = __importDefault(require("axios"));
const ax = axios_1.default.create({
    baseURL: "http://localhost:8080"
});
function doAxios() {
    ax.get('/ping')
        .then((response) => {
        console.log("response: " + response);
    })
        .catch((error) => {
        console.error(error);
    })
        .then(() => {
        console.log("Axios finished");
    });
}
exports.default = doAxios;
