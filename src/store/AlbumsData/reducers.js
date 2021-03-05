import { ALBUM_DATA_FETCH_FAILED, ALBUM_DATA_FETCH_START, ALBUM_DATA_FETCH_SUCCESS} from './actions'


const defaultState = {
    albums: [],
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
                isAddFailed:true
            }
        default:
            return state
    }
}