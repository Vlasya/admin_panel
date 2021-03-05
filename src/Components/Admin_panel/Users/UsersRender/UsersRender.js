import React from 'react';

import s from './UsersRender.module.scss'
import {Button} from "../Button/Button";
import {NavLink, Link} from "react-router-dom";
import {connect} from "react-redux";
import {deleteUserFailed, deleteUserSuccess, userDataFetch} from "../../../../store/UsersData";
import {Modal} from "../../../Modal/Modal";


class _UsersRender extends React.Component {
    // componentDidMount() {
    //     this.props.usersData()
    // }

    render() {
        const {users, userDeleted, userDeletedFailed, deleteUserSuccess, deleteUserFailed} = this.props
        let usersList;
        if (users.length) {
            usersList = users.map((user, index) => {
                const {
                    id,
                    name,
                    username,
                    email,
                    address: {street, suite, city, zipcode, geo: {lat, lng}},
                    phone,
                    website,
                    company
                } = user
                return (
                    <div key={index} className={s.user}>
                        <div className={s.userInfo}>
                            <div className={s.userPart}>
                                <div className={s.user__title}>User Info</div>
                                <div className={s.user__descr}>Name:</div>
                                <div className={s.user__data}>{name} </div>
                                <div className={s.user__descr}>Username:</div>
                                <div className={s.user__data}>{username} </div>
                                <div className={s.user__descr}>Email:</div>
                                <div className={s.user__data}>{email} </div>
                                <div className={s.user__descr}>Phone:</div>
                                <div className={s.user__data}>{phone} </div>
                                <div className={s.user__descr}>Website:</div>
                                <div className={s.user__data}>{website} </div>
                            </div>
                            <div className={s.userPart}>
                                <div className={s.user__title}>Address</div>
                                <div className={s.user__descr}>Street:</div>
                                <div className={s.user__data}>{street} </div>
                                <div className={s.user__descr}>Suite:</div>
                                <div className={s.user__data}>{suite} </div>
                                <div className={s.user__descr}>City:</div>
                                <div className={s.user__data}>{city} </div>
                                <div className={s.user__descr}>Zipcode:</div>
                                <div className={s.user__data}>{zipcode} </div>
                                <div className={s.geo}>
                                    <div className={s.geo_title}>Geo</div>
                                    <div>
                                        <p><span>lat :</span> {lat} </p>
                                        <p><span>lng :</span> {lng} </p>
                                    </div>
                                </div>

                            </div>
                            <div className={s.userPart}>
                                <div className={s.user__title}>Company</div>
                                <div className={s.user__descr}>Name:</div>
                                <div className={s.user__data}>{company.name} </div>
                                <div className={s.user__descr}>CatchPhrase:</div>
                                <div className={s.user__data}>{company.catchPhrase} </div>
                                <div className={s.user__descr}>Bs:</div>
                                <div className={s.user__data}>{company.bs} </div>
                            </div>
                            <div className={s.buttons}>
                                <Link className={`${s.link} ${s.editLink}`}
                                      to={{
                                          pathname: '/add-form',
                                          state: {user: user}
                                      }}
                                >Edit </Link>
                                <Button name='Delete' id={id}/>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        return (

            <div className={s.wrapper}>
                <div className={s.container}>
                    <div>
                        <NavLink className={s.link} to='/add-form'>Add new User </NavLink>

                    </div>
                    <div>
                        {userDeleted ? <Modal changeStatus={deleteUserSuccess} status={true}/> : null}
                        {userDeletedFailed ? <Modal changeStatus={deleteUserFailed} status={false}/> : null}
                        {usersList}
                    </div>
                </div>

            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        users: state.userData.users,
        userDeleted: state.userData.isUserDelete,
        userDeletedFailed: state.userData.isUserDeleteFailed
    }
}


export const UsersRender = connect(MapStateToProps, {
    usersData: userDataFetch,
    deleteUserSuccess: deleteUserSuccess,
    deleteUserFailed: deleteUserFailed

})(_UsersRender)