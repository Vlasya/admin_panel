import {
    ALBUM_DATA_FETCH_FAILED, ALBUM_DATA_FETCH_START, ALBUM_DATA_FETCH_SUCCESS,
    SELECTED_ALBUM_FETCH_FAILED, SELECTED_ALBUM_FETCH_START, SELECTED_ALBUM_FETCH_SUCCESS
} from './actions'


const defaultState = {
    albums: [],
    selectedAlbum:[],
    isFetchingSelectedAlbum:false,
    isFetchingSelectedAlbumSuccess:false,
    isFetchingSelectedAlbumFailed:false,
    isFetching: false,
    isAddedSuccess: false,
    isAddFailed: false

}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case ALBUM_DATA_FETCH_START:
            return {
                ...state,
                isFetching: true,
                isAddFailed: false
            }
        case ALBUM_DATA_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                albums: action.payload
            }
        case ALBUM_DATA_FETCH_FAILED:
            return {
                ...state,
                isAddFailed: true
            }
        case SELECTED_ALBUM_FETCH_START:
            return {
                ...state,
                isFetchingSelectedAlbum:true,
                isFetchingSelectedAlbumFailed:false
            }
        case SELECTED_ALBUM_FETCH_SUCCESS:
            return {
                ...state,
                isFetchingSelectedAlbum:false,
                selectedAlbum:action.payload
            }
        case SELECTED_ALBUM_FETCH_FAILED:
            return {
                ...state,
                isFetchingSelectedAlbumFailed:true
            }
        default:
            return state
    }
}