import axios from "../utils/axios";
import {baseURL} from "../config/api";

const login = async (loginData) => {
    const response = await axios.post(`${baseURL}/login`, loginData)
    return response.data
}

const register = async (registerData) => {
    const response = await axios.post(`${baseURL}/register`, registerData)
    return response.data
}

const logout = async () => {
    const response = await axios.post(`${baseURL}/logout`)
    return response.data
}

const getUser = async () => {
    const response = await axios.get(`${baseURL}/user`)
    return response.data
}


export default {
    login,
    register,
    logout,
    getUser
}
