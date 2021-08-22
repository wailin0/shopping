import storage from "./storage";
import axios from 'axios'

// Request interceptor for API calls
axios.interceptors.request.use(
    async config => {
        const token = await storage.loadToken()
        if (token) {
            config.headers.authorization = `Bearer ${token}`
            return config;
        }
        return config;
    },
    error => {
        console.log(error)
        Promise.reject(error)
    });


axios.interceptors.response.use((response) => {
    return response
}, (error) => {
    // if (error.response.status === 401) {
    //     storage.clearToken()
    //     window.location.href = '/signin'
    // }
    // // if(error.response.status === 401) {
    // //     //to do
    // //     //refresh token if expire
    // // }
    return Promise.reject(error);
});

export default axios
