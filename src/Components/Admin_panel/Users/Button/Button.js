import React from "react";
import s from './Button.module.scss'


export const Button=({name})=>{

    return(
        <div>
            <button className={s.btn}>{name}</button>
        </div>
    )
}