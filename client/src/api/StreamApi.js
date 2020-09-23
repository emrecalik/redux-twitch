import axios from "axios";

export const StreamApi = () => {
    return axios.create({
        baseURL: "http://localhost:3001"
    })
}