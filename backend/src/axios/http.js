"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Unauthorized"] = 401] = "Unauthorized";
    StatusCode[StatusCode["Forbidden"] = 403] = "Forbidden";
    StatusCode[StatusCode["TooManyRequests"] = 429] = "TooManyRequests";
    StatusCode[StatusCode["InternalServerError"] = 500] = "InternalServerError";
})(StatusCode || (StatusCode = {}));
// Common headers
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Credentials": true,
    "X-Requested-With": "XMLHttpRequest",
};
// // Not used yet
// // We can use the following function to inject the JWT token through an interceptor
// // We get the `accessToken` from the localStorage that we set when we authenticate
// const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
//     try {
//         const token = localStorage.getItem("accessToken");
//
//         if (token != null) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     } catch (error) {
//         throw new Error(error);
//     }
// };
