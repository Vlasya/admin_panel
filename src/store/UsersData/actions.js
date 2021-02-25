import { getUsers,addUser} from "../../api/api";

//render user
export const USER_DATA_FETCH_START='USER_DATA_FETCH_START';
export const USER_DATA_FETCH_SUCCESS='USER_DATA_FETCH_SUCCESS';
export const USER_DATA_FETCH_ERROR='USER_DATA_FETCH_ERROR';

export const userDataFetch=()=>dispatch=>{
    dispatch(userDataFetchStart());
    getUsers()
        .then((response)=> dispatch( userDataFetchSuccess(response.data)))
        .catch(()=> dispatch(userDataFetchError()))
}
export const userDataFetchStart=()=>({type:USER_DATA_FETCH_START});
export const userDataFetchSuccess=(users)=>({type:USER_DATA_FETCH_SUCCESS,payload:users});
export const userDataFetchError=()=>({type:USER_DATA_FETCH_ERROR})


//add new user
export const ADD_NEW_USER_FETCH='ADD_NEW_USER_FETCH';
export const ADD_NEW_USER_FETCH_SUCCESS='ADD_NEW_USER_FETCH_SUCCESS';
export const ADD_NEW_USER_FETCH_FAILED='ADD_NEW_USER_FETCH_FAILED'

export const addNewUserFetch=(user)=> dispatch=>{
            addUser(user)
                .then(() => dispatch(addNewUserSuccess()))
                .catch(()=>addNewUserFailed())

}

export const addNewUserSuccess=()=>({type:ADD_NEW_USER_FETCH_SUCCESS});
export const addNewUserFailed=()=>({type:ADD_NEW_USER_FETCH_FAILED})
