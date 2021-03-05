import React from "react";
import s from './Button.module.scss';
import { useDispatch } from 'react-redux';
import {deleteUser} from "../../../../store/UsersData";


export const Button=({name,id})=>{
    const dispatch=useDispatch()

    function clickBtn(){
        dispatch(deleteUser(id))

    }
    return(
        <div>
            {/*{btn}*/}
            <button onClick={()=> clickBtn()} className={s.btn}>{name}</button>
            {/*{name==='Delete'?<button onClick={dispatch(deleteUser(id))}  className={s.btn}>{name}</button> : null}*/}

        </div>
    )
}