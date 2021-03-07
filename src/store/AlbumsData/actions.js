// get albums data

import {getAlbums,getAlbum} from "../../api/albumsApi";

//get albums of users
export const ALBUM_DATA_FETCH_START = 'ALBUM_DATA_FETCH_START';
export const ALBUM_DATA_FETCH_SUCCESS = 'ALBUM_DATA_FETCH_SUCCESS';
export const ALBUM_DATA_FETCH_FAILED = 'ALBUM_DATA_FETCH_FAILED';


export const albumFetchData = () => dispatch => {
    dispatch(albumFetchStart())
    getAlbums()
        .then((res)=> {
            // console.log(res)
            dispatch(albumFetchSuccess(res.data))
        })
        .catch(()=>dispatch(albumFetchFailed()))

}

export const albumFetchStart = () => ({type: ALBUM_DATA_FETCH_START})
export const albumFetchSuccess = (albums) => ({type: ALBUM_DATA_FETCH_SUCCESS, payload: albums})
export const albumFetchFailed = () => ({type: ALBUM_DATA_FETCH_FAILED});


//get selected album

export const SELECTED_ALBUM_FETCH_START='SELECTED_ALBUM_FETCH_START';
export const SELECTED_ALBUM_FETCH_SUCCESS='SELECTED_ALBUM_FETCH_SUCCESS';
export const SELECTED_ALBUM_FETCH_FAILED='SELECTED_ALBUM_FETCH_FAILED'


export const selectedAlbumFetch=(albumId)=>(dispatch)=>{
    dispatch(selectedAlbumFetchStart());
    getAlbum(albumId)
        .then((res)=> {
            dispatch(selectedAlbumFetchSuccess(res.data))
        })
        .catch(()=>dispatch(selectedAlbumFetchFailed))
}

export const selectedAlbumFetchStart=()=>({type:SELECTED_ALBUM_FETCH_START});
export const selectedAlbumFetchSuccess=(album)=>({type:SELECTED_ALBUM_FETCH_SUCCESS,payload:album});
export const selectedAlbumFetchFailed=()=>({type:SELECTED_ALBUM_FETCH_FAILED})