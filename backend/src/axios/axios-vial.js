"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
let baseURL = 'https://stage.ema-api.com/ema-dev/firm/dermpmsandbox277/ema/fhir/v2/Patient/';
const ax = axios_1.default.create({
    headers: {
        'x-api-key': '0bab347f-0caa-4030-b0de-88d5c8a3b1cd',
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmaGlyX2lSSEdZIiwicG9sICAgICAgICAiOiJjaGFuZ2VtZSIsInVybFByZWZpeCI6ImRlcm1wbXNhbmRib3gyNzciLCJ2ZW5kb3IiOiJmaGlyX2lSSEdZQGRlcm1wbXNhbmRib3gyNzciLCJpc3MiOiJtb2RtZWQiLCJ0b2tlblR5cGUiOiJhY2Nlc3MiLCJqdGkiOiI3YjYzYTllZDUwNTE0OWNkODdhMjIyZWIwZjJjNTZhYyJ9.3efYfPcdkacvWWx6GxA0wRQAtlfw8V1FryDY5sWfLdM'
    }
});
function getPatient() {
    ax.get(baseURL)
        .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
        .catch(function (error) {
        console.log(error);
    });
}
exports.default = getPatient;
