import React from "react";
import s from './FormAddEditUser.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {addNewUserFailed, addNewUserFetch, addNewUserSuccess, userDataFetch} from "../../../../store/UsersData";


export class _FormAddEditUser extends React.Component {

    state = {
        name: "",
        username: "",
        email: "",
        street: " ",
        suite: "",
        city: "",
        zipcode: "",
        lat: "",
        lng: "",
        phone: "",
        website: "",
        companyName: "",
        catchPhrase: "",
        bs: ""
    }

    getInputsValue(name) {
        return event => {
            this.setState({
                [name]: event.target.value
            })
        }
    }

    render() {
        console.log(this.props)
        const {addNewUser, addFailed, addSuccess,userFetch} = this.props
        const newUser = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            address: {
                street: this.state.street,
                suite: this.state.suite,
                city: this.state.city,
                zipcode: this.state.zipcode,
                geo: {
                    lat: this.state.lat,
                    lng: this.state.lng,
                }
            },
            phone: this.state.phone,
            website: this.state.website,
            company: {
                name: this.state.companyName,
                catchPhrase: this.state.catchPhrase,
                bs: this.state.bs
            }
        }
        return (
            <div className={s.wrapper}>
                <form className={s.users} action="">
                    <div className={s.users__data}>
                        <div className={s.userPart}>
                            <div className={s.user__title}>User Info</div>
                            <label>
                                <p>Name:</p>
                                <input onChange={this.getInputsValue('name')} required type="text"/>
                            </label>
                            <label>
                                <p>Username:</p>
                                <input onChange={this.getInputsValue('username')} required type="text"/>
                            </label>
                            <label>
                                <p>Email:</p>
                                <input onChange={this.getInputsValue('email')} required type="email"/>
                            </label>
                            <label>
                                <p>Phone:</p>
                                <input onChange={this.getInputsValue('phone')} required type="number"/>
                            </label>
                            <label>
                                <p>Website:</p>
                                <input onChange={this.getInputsValue('website')} required type="text"/>
                            </label>
                        </div>
                        <div className={s.userPart}>
                            <div className={s.user__title}>Address</div>
                            <label>
                                <p>Street:</p>
                                <input onChange={this.getInputsValue('street')} required type="text"/>
                            </label>
                            <label>
                                <p>Suite:</p>
                                <input onChange={this.getInputsValue('suite')} required type="text"/>
                            </label>
                            <label>
                                <p>City:</p>
                                <input onChange={this.getInputsValue('city')} required type="text"/>
                            </label>
                            <label>
                                <p>Zipcode:</p>
                                <input onChange={this.getInputsValue('zipcode')} required type="text"/>
                            </label>
                            <label>
                                <p>Website:</p>
                                <input onChange={this.getInputsValue('website')} required type="text"/>
                            </label>

                        </div>
                        <div className={s.userPart}>
                            <div className={s.user__title}>Company</div>
                            <label>
                                <p>Name:</p>
                                <input onChange={this.getInputsValue('companyName')} required type="text"/>
                            </label>
                            <label>
                                <p>CatchPhrase:</p>
                                <input onChange={this.getInputsValue('catchPhrase')} required type="text"/>
                            </label>
                            <label>
                                <p>Bs:</p>
                                <input onChange={this.getInputsValue('bs')} required type="email"/>
                            </label>
                            <div className={s.geo}>
                                <div className={s.geo_title}>Geo</div>
                                <label>
                                    <p>lat :</p>
                                    <input onChange={this.getInputsValue('lat')} required type="text"/>
                                </label>
                                <label>
                                    <p>lng :</p>
                                    <input onChange={this.getInputsValue('lng')} required type="text"/>
                                </label>
                            </div>
                        </div>
                    </div>
                </form>

                <div className={s.link}>
                    <button onClick={() => {
                        addNewUser(newUser)
                        userFetch()

                    }}>Add
                    </button>
                    <NavLink to='/users'> Cancel</NavLink>
                </div>
            </div>
        )
    }
}


export const FormAddEditUser = connect(null, {
        addNewUser: addNewUserFetch,
        addFailed: addNewUserFailed,
        addSuccess: addNewUserSuccess,
        userFetch: userDataFetch
    }
)(_FormAddEditUser)


