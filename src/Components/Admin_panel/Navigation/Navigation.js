import React from "react";
import s from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

export const Navigation=()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.nav}>
                    <NavLink className={s.link} to='/users' activeClassName={s.active}>Users </NavLink>
                    <NavLink className={s.link} to='/albums' activeClassName={s.active}> Albums</NavLink>
                </div>

            </div>

        </div>
    )
}