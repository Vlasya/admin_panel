import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import s from './Albums.module.scss'
import {Container} from "@material-ui/core";
import {AlbumList} from "./AlbumList/AlbumList";
import {albumFetchData} from "../../../store/AlbumsData";
import {Switch, Route} from 'react-router-dom'
import {Album} from "./AlbumList/Album/Album";
import {selectedAlbumFetch} from "../../../store/AlbumsData/actions";


export const Albums = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(albumFetchData())
    }, [])

    const getPhotos = (albumId) => {
        dispatch(selectedAlbumFetch(albumId))
    }
    const userList = useSelector(state => state.userData.users)

    const albumList = useSelector(state => state.albumData.albums)

    const [newAlbum, setNewAlbum] = useState([{
        id: '',
        userName: '',
        userId: '',
        title: ''

    }])
    useEffect(() => {

        albumList.forEach(album => {
            userList.forEach(user => {
                if (album.userId === user.id) {
                    setNewAlbum([
                        ...newAlbum, {
                            id: album.id,
                            userName: user.name,
                            userId: album.userId,
                            title: album.title
                        }])
                } else {
                    setNewAlbum([
                        ...newAlbum, {
                            id: album.id,
                            userName: "User not Found",
                            userId: album.userId,
                            title: album.title
                        }])
                }
            })
        })


    }, [])


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