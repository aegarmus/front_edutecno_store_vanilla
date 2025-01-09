import { axiosClient } from "./apiClient.js"


export const registerUser = async(userData) => {
    try {
        const { data } = await axiosClient.post('/usuario/', userData);
        console.log(data)
        return data;
    } catch (error) {
        console.error('No pudimos registrar al usuario', error)
        alert('No pudimos registrar al usuario')
        throw new Error(error)
    }
}

