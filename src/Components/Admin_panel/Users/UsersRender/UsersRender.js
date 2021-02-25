import React from 'react';
import s from './UsersRender.module.scss'
import {Button} from "../Button/Button";
import {NavLink} from "react-router-dom";

export const UsersRender = ({users}) => {

    const usersList = users.map((user, index) => {
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
                            <div  >
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
                        <Button name='Edit'/>
                        <Button name='Delete'/>
                    </div>
                </div>
            </div>


        )
    })

    return (

        <div className={s.wrapper}>
            <div className={s.container}>
                <div>
                    <NavLink className={s.link} to='/addForm' >Add new User </NavLink>
                </div>
                <div>
                    {usersList}
                </div>
            </div>

        </div>
    )
}
