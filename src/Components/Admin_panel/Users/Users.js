import React from 'react';
import s from './Users.module.scss'
import {UsersRender} from "./UsersRender/UsersRender";
import {connect} from "react-redux";
import {userDataFetch} from "../../../store/UsersData";
import { Switch,Route} from 'react-router-dom'
import {FormAddEditUser} from "./FormAddEditUser/FormAddEditUser";


 class _Users extends React.Component{
    componentDidMount() {
        this.props.usersData()
    }

    render(){
        console.log('render')
        const users=this.props.users.users
        console.log(users)
        return(
            <div className={s.wrapper}>
                <div className={s.container}>

                    <Switch>
                        <Route path='/users'> <UsersRender users={users}/></Route>
                        <Route path='/addForm'> <FormAddEditUser/></Route>
                    </Switch>

                </div>

            </div>
        )
    }
}

function MapStateToProps(state){
     return{
         users:state.userData
     }

}
export const Users=connect(MapStateToProps,{
    usersData:userDataFetch
})(_Users)