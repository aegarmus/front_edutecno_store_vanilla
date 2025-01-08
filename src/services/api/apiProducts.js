import { axiosClient } from './apiClient.js';



export const getAllProducts = async() => {
    try {
        const { data } = await axiosClient.get('/producto/');
        return  data.data
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}

export const getProductById = async(id) => {
    try {
        const { data } = await axiosClient.get(`/producto/${id}`)
        return data.data
    } catch (error) {
        console.error(error)
        throw new Error(error)
    }
}
