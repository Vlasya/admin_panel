import React,{useState,useEffect} from "react";
import {useSelector,useDispatch} from 'react-redux'
import s from './Albums.module.scss'
import {Container} from "@material-ui/core";
import {AlbumList} from "./AlbumList/AlbumList";
import {albumFetchData} from "../../../store/AlbumsData";



export const Albums = () => {

const dispatch=useDispatch()

useEffect(()=>{
    dispatch(albumFetchData())
},[])

const userList= useSelector(state=>state.userData)
    console.log(userList)
const albumList =useSelector(state=>state.albumData.albums)


    return (

        <Container>
         <AlbumList albumList={albumList}/>
        </Container>
    )
}