// get albums data

import {getAlbums} from "../../api/albumsApi";

export const ALBUM_DATA_FETCH = 'ALBUM_DATA_FETCH';
export const ALBUM_DATA_FETCH_START = 'ALBUM_DATA_FETCH_START';
export const ALBUM_DATA_FETCH_SUCCESS = 'ALBUM_DATA_FETCH_SUCCESS';
export const ALBUM_DATA_FETCH_FAILED = 'ALBUM_DATA_FETCH_FAILED';


export const albumFetchData = () => dispatch => {
    dispatch(albumFetchStart())
    getAlbums()
        .then((res)=> {
            console.log(res)
            dispatch(albumFetchSuccess(res.data))
        })
        .catch(()=>dispatch(albumFetchFailed()))

}

export const albumFetchStart = () => ({type: ALBUM_DATA_FETCH_START})
export const albumFetchSuccess = (albums) => ({type: ALBUM_DATA_FETCH_SUCCESS, payload: albums})
export const albumFetchFailed = () => ({type: ALBUM_DATA_FETCH_FAILED})