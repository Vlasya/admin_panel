import axios from "axios";

const API = 'https://603799685435040017722cf8.mockapi.io';

//get users
export const getUsers = () => {
    return axios.get(`${API}/users`)
}
//add user
export const addUser = (user) => {
    return axios.post(`${API}/users`, user)
}

//delete user
export const deleteUserApi= (id)=>{

    return axios.delete(`${API}/users/${id}`)
}

// update user

export const updateUserApi =(user)=>{
    const {id,name, surname, email, address, phone, website, company}=user
    return axios.put (`${API}/users/${id}`,{name, surname, email, address, phone, website, company})
}