import axios from "../utils/axios";
import {baseURL} from "../config/api";

const getAllProducts = async () => {
    const response = await axios.get(`${baseURL}/products`)
    return response.data
}

const getProductById = async (productId) => {
    const response = await axios.get(`${baseURL}/products/${productId}`)
    return response.data.data
}

const getProductByName = async (name) => {
    const response = await axios.get(`${baseURL}/products/search/${name}`)
    return response.data.data
}


export default {
    getAllProducts,
    getProductById,
    getProductByName
}
