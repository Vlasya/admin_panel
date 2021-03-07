import {getUsers, addUser, deleteUserApi, updateUserApi} from "../../api/api";

//render user
export const USER_DATA_FETCH_START = 'USER_DATA_FETCH_START';
export const USER_DATA_FETCH_SUCCESS = 'USER_DATA_FETCH_SUCCESS';
export const USER_DATA_FETCH_ERROR = 'USER_DATA_FETCH_ERROR';

export const userDataFetch = () => dispatch => {
    dispatch(userDataFetchStart());
    getUsers()
        .then((response) => dispatch(userDataFetchSuccess(response.data)))
        .catch(() => dispatch(userDataFetchError()))
}
export const userDataFetchStart = () => ({type: USER_DATA_FETCH_START});
export const userDataFetchSuccess = (users) => ({type: USER_DATA_FETCH_SUCCESS, payload: users});
export const userDataFetchError = () => ({type: USER_DATA_FETCH_ERROR})


//add new user
export const ADD_NEW_USER_FETCH_SUCCESS = 'ADD_NEW_USER_FETCH_SUCCESS';
export const ADD_NEW_USER_FETCH_FAILED = 'ADD_NEW_USER_FETCH_FAILED'

export const addNewUserFetch = (user) => dispatch => {
    addUser(user)
        .then(() => dispatch(addNewUserSuccess()))
        .catch(() => dispatch(addNewUserFailed()))

}

export const addNewUserSuccess = () => ({type: ADD_NEW_USER_FETCH_SUCCESS});
export const addNewUserFailed = () => ({type: ADD_NEW_USER_FETCH_FAILED})


// delete user

export const deleteUser = (id) => dispatch => {
    console.log(id)
    deleteUserApi(id)

        .then(() => dispatch(deleteUserSuccess()))
        .then(() => dispatch(userDataFetch()))
        .catch(() => dispatch(deleteUserFailed()))
}

export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILED = 'DELETE_USER_FAILED';

export const deleteUserSuccess = () => ({type: DELETE_USER_SUCCESS});
export const deleteUserFailed = () => ({type: DELETE_USER_FAILED})

//update user

export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILED = 'UPDATE_USER_FAILED';

export const updateUser = (user) => dispatch => {
    updateUserApi(user)
        .then(() => dispatch(updateUserSuccess()))
        .catch(() =>dispatch(updateUserFailed()))
}

export const updateUserSuccess = () => ({type: UPDATE_USER_SUCCESS});
export const updateUserFailed = () => ({type: UPDATE_USER_FAILED})