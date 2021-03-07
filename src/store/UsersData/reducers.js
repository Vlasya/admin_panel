import {
    USER_DATA_FETCH_START,
    USER_DATA_FETCH_SUCCESS,
    USER_DATA_FETCH_ERROR,
    ADD_NEW_USER_FETCH_SUCCESS,
    ADD_NEW_USER_FETCH_FAILED,
    DELETE_USER_FAILED,
    DELETE_USER_SUCCESS,
    UPDATE_USER_FAILED,
    UPDATE_USER_SUCCESS
} from './actions';


const defaultState = {
    users: [],
    usersMap:{},
    isFetching: false,
    isAddedSuccess: false,
    isAddFailed: false,
    isUserDelete: false,
    isUserDeleteFailed: false,
    isUserUpdateSuccess: false,
    isUserUpdateFailed: false

}

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case USER_DATA_FETCH_START:
            return {
                ...state,
                isFetching: true
            };
        case USER_DATA_FETCH_SUCCESS:
            const mapU=action.payload.reduce((map,user)=>{
                map[user.id]=user
                return map
            },{})
            return {
                ...state,
                isFetching: false,
                users: action.payload,
                usersMap:mapU
            }
        case USER_DATA_FETCH_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case ADD_NEW_USER_FETCH_SUCCESS:
            const isAddedNew = state.isAddedSuccess
            return {
                ...state,
                isAddedSuccess: !isAddedNew
            }
        case ADD_NEW_USER_FETCH_FAILED:
            const isAddFailedNew = state.isAddFailed
            return {
                ...state,
                isAddFailed: !isAddFailedNew
            }
        case DELETE_USER_SUCCESS:
            const isUserDeleteNew = state.isUserDelete
            return {
                ...state,
                isUserDelete: !isUserDeleteNew
            }
        case DELETE_USER_FAILED:
            const isUserDeleteFailedNew = state.isUserDeleteFailed;
            return {
                ...state,
                isUserDeleteFailed: !isUserDeleteFailedNew
            }
        case UPDATE_USER_FAILED:
            const isUserUpdateFailedNew=state.isUserUpdateFailed
            return {
                ...state,
                isUserUpdateFailed:!isUserUpdateFailedNew
            }
        case UPDATE_USER_SUCCESS:
            const isUserUpdateSuccessNew=state.isUserUpdateSuccess
            return {
                ...state,
                isUserUpdateSuccess:!isUserUpdateSuccessNew
            }
        default:
            return state
    }
}