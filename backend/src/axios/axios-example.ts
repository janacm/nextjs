// const axios = require('axios').default;
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


const ax = axios.create({
    baseURL: "http://localhost:8080"
})

function doAxios() {
    ax.get('/ping')
        .then((response) => {
            console.log("response: " + response)
        })
        .catch((error: any) => {
            console.error(error)
        })
        .then(() => {
            console.log("Axios finished")
        })
}
export default doAxios;