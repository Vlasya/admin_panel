import axios from "axios";

const ALBUMS_API = 'https://jsonplaceholder.typicode.com/albums';
const ALBUM_API='https://jsonplaceholder.typicode.com/photos'

export const getAlbums = () => {
    return axios.get(`${ALBUMS_API}`)
}

export const getAlbum=(albumId)=>{
    return axios.get (`${ALBUM_API}?albumId=${albumId}`)
}
