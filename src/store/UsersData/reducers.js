import {USER_DATA_FETCH_START,USER_DATA_FETCH_SUCCESS,USER_DATA_FETCH_ERROR,
ADD_NEW_USER_FETCH_SUCCESS,ADD_NEW_USER_FETCH_FAILED} from './actions';


const defaultState={
    users:[],
    isFetching:false,
    isAddedSuccess:false,
    isAddFailed:false

}

export const reducer=(state=defaultState,action)=>{
    switch (action.type){
        case USER_DATA_FETCH_START:
            return{
                ...state,
                isFetching: true
            };
        case USER_DATA_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                users: action.payload
            }
        case USER_DATA_FETCH_ERROR:
            return {
                ...state,
                isFetching: false
            };
        case ADD_NEW_USER_FETCH_SUCCESS:
            const isAddedNew=state.isAddedSuccess
            return {
                ...state,
                isAdded:!isAddedNew
            }
        case ADD_NEW_USER_FETCH_FAILED:
                const isAddFailedNew=state.isAddFailed
                return{
                ...state,
                    isAdded: !isAddFailedNew
                }
        default:
            return  state
    }
}