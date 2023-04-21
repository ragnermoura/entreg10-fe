import axios from "axios";
export const http = axios.create({
    baseURL: 'http://18.222.196.140:3000'
})