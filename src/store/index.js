import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import { userDataReducer} from "./UsersData";
import { albumsReducer } from "./AlbumsData";

import thunk from 'redux-thunk'


export const rootReducer= combineReducers({
    userData:userDataReducer,
    albumData: albumsReducer
})

export const store= createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ))