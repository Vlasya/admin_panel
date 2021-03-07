import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import s from './Albums.module.scss'
import {Container} from "@material-ui/core";
import {AlbumList} from "./AlbumList/AlbumList";
import {albumFetchData} from "../../../store/AlbumsData";
import {Switch, Route} from 'react-router-dom'
import {Album} from "./AlbumList/Album/Album";
import {selectedAlbumFetch} from "../../../store/AlbumsData/actions";
import { userDataFetch} from "../../../store/UsersData";


export const Albums = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(albumFetchData())
        dispatch(userDataFetch())
    }, [])

    const getPhotos = (albumId) => {
        dispatch(selectedAlbumFetch(albumId))
    }
    const userList = useSelector(state => state.userData.usersMap)

    const albumList = useSelector(state => state.albumData.albums)

    return (

        <Container>
            <Switch>
                <Route exact path='/albums'>
                    <AlbumList albumList={albumList} getPhotos={getPhotos} userList={userList}/>
                </Route>
                <Route path='/albums/album'>
                    <Album/>
                </Route>
            </Switch>

        </Container>

    )
}