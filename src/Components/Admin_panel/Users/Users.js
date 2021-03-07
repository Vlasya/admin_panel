import React from 'react';
import s from './Users.module.scss'
import {UsersRender} from "./UsersRender/UsersRender";
import {connect} from "react-redux";
import {userDataFetch} from "../../../store/UsersData";
import { Switch,Route,Redirect} from 'react-router-dom'
import {FormAddEditUser} from "./FormAddEditUser/FormAddEditUser";


 class _Users extends React.Component{
     componentDidMount() {
         this.props.usersData()
     }


    render(){
        return(
            <div className={s.wrapper}>
                <div className={s.container}>

                    <Switch>
                        <Route  path='/users' component={UsersRender}/>
                        <Route path='/add-form' component={FormAddEditUser}/>
                        <Route path='/' ><Redirect to='/users'/></Route>
                    </Switch>

                </div>

            </div>
        )
    }
}

function MapStateToProps(state){

     return{
         users:state.userData.users
     }

}
export const Users=connect(MapStateToProps,{
    usersData:userDataFetch
})(_Users)