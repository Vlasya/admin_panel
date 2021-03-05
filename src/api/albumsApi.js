import axios from "axios";

const ALBUMS_API = 'https://jsonplaceholder.typicode.com/albums'

export const getAlbums = () => {
    return axios.get(`${ALBUMS_API}`)
}
