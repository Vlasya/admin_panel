import React,{useEffect,useState} from 'react';
import s from './Modal.module.scss'


export const Modal =({changeStatus,status})=>{


    useEffect(()=>{
      setTimeout(()=>{
           changeStatus()
       },2000)

    },[])

    const success='Successfully !';
    const error= " Failure ! "

    return(
        <div className={s.wrapper}>
            {status ? success :  error}


        </div>
    )
}