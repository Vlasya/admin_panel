import React from "react";
import s from './HeaderAdminPanel.module.scss'

export const HeaderAdminPanel=()=>{
    return(
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.headerInfo}>
                    <p>ADMIN_Panel</p>
                </div>

            </div>
        </div>
    )
}