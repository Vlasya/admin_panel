import React from "react";
import s from './Admin_panel.module.scss'
import { Switch, Route} from "react-router-dom";
import {Users} from "./Users/Users";
import {Albums} from "./Albums/Albums";
import {HeaderAdminPanel} from "./HeaderAdminPanel/HeaderAdminPanel";
import {Navigation} from "./Navigation/Navigation";


export const Admin_Panel = () => {
    return (
        <div className={s.wrapper}>
            <HeaderAdminPanel/>
            <Navigation/>
            <div className={s.content}>
                <Switch>

                    <Route path='/albums' component={Albums}/>
                    <Route  path='/' component={Users}/>




                </Switch>
            </div>
        </div>

    )
}