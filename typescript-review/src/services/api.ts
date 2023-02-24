import axios from "axios";

export const api = axios.create({
    baseURL: "https://lx-todo-api.onrender.com",
    timeout: 12000,
})