import axios from "axios";

const API = 'https://jsonplaceholder.typicode.com';

const API_NEW = 'https://api.npoint.io/d1d3f415c9c863e1e7f9';
const API_SECOND="https://api.npoint.io/9ca84c35d27caeb102ac"

export const getUsers = () => {
    return axios.get(`${API_SECOND}/users`)

}


export const addUser = (user) => {
    console.log(user)
    return axios.post(`${API_SECOND}/users`, {user})
}






