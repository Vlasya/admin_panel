import React from "react";
import s from './FormAddEditUser.module.scss'
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {
    addNewUserFailed,
    addNewUserFetch,
    addNewUserSuccess,
    updateUser, updateUserFailed, updateUserSuccess,
    userDataFetch
} from "../../../../store/UsersData";
import {Modal} from "../../../Modal/Modal";


export class _FormAddEditUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: "",
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
            },
            isNewUser: false
        }


        if (this.props.location.state) {
            const user = this.props.location.state.user
            this.state = {
                user: {
                    id: user.id,
                    name: user.name,
                    username: user.surname,
                    email: user.email,
                    street: user.address.street,
                    suite: user.address.suite,
                    city: user.address.city,
                    zipcode: user.address.zipcode,
                    lat: user.address.geo.lat,
                    lng: user.address.geo.lng,
                    phone: user.phone,
                    website: user.website,
                    companyName: user.company.name,
                    catchPhrase: user.company.catchPhrase,
                    bs: user.company.bs
                },
                isNewUser: true
            }
        }
    }


    // clear state after submit
    clearState() {
        this.setState({
            user: {
                id: "",
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
        })
    }

    //
    getInputsValue(name) {
        return event => {
            this.setState({
                user: {
                    ...this.state.user,
                    [name]: event.target.value
                }
            })
        }
    }

    handlerFormSubmit = (event) => {
        event.preventDefault()
        this.clearState()
    }


    render() {
        const {
            addNewUser,
            addFailed,
            addSuccess,
            isAddedSuccess,
            isAddFailed,
            isUpdateSuccess,
            isUpdateFailed,
            updateUser,
            updateUserSuccess,
            updateUserFailed


        } = this.props
        const newUser = {
            id: this.state.user.id,
            name: this.state.user.name,
            username: this.state.user.username,
            email: this.state.user.email,
            address: {
                street: this.state.user.street,
                suite: this.state.user.suite,
                city: this.state.user.city,
                zipcode: this.state.user.zipcode,
                geo: {
                    lat: this.state.user.lat,
                    lng: this.state.user.lng,
                }
            },
            phone: this.state.user.phone,
            website: this.state.user.website,
            company: {
                name: this.state.user.companyName,
                catchPhrase: this.state.user.catchPhrase,
                bs: this.state.user.bs
            }
        }
        return (

            <div className={s.wrapper}>
                <div>
                    {isAddedSuccess ? <Modal changeStatus={addSuccess} status={true}/> : null}
                    {isAddFailed ? <Modal changeStatus={addFailed} status={false}/> : null}
                    {isUpdateSuccess ? <Modal changeStatus={updateUserSuccess} status={true}/> : null}
                    {isUpdateFailed ? <Modal changeStatus={updateUserFailed} status={false}/> : null}
                </div>

                <form className={s.users} onSubmit={this.handlerFormSubmit}>
                    <div className={s.users__data}>
                        <div className={s.userPart}>
                            <div className={s.user__title}>User Info</div>
                            <label>
                                <p>Name:</p>
                                <input onChange={this.getInputsValue('name')} value={this.state.user.name} type="text"/>
                            </label>
                            <label>
                                <p>Username:</p>
                                <input onChange={this.getInputsValue('username')} value={this.state.user.username}
                                       type="text"/>
                            </label>
                            <label>
                                <p>Email:</p>
                                <input onChange={this.getInputsValue('email')} value={this.state.user.email}
                                       type="text"/>
                            </label>
                            <label>
                                <p>Phone:</p>
                                <input onChange={this.getInputsValue('phone')} value={this.state.user.phone}
                                       type="text"/>
                            </label>
                            <label>
                                <p>Website:</p>
                                <input onChange={this.getInputsValue('website')} value={this.state.user.website}
                                       type="text"/>
                            </label>
                        </div>
                        <div className={s.userPart}>
                            <div className={s.user__title}>Address</div>
                            <label>
                                <p>Street:</p>
                                <input onChange={this.getInputsValue('street')} value={this.state.user.street}
                                       type="text"/>
                            </label>
                            <label>
                                <p>Suite:</p>
                                <input onChange={this.getInputsValue('suite')} value={this.state.user.suite}
                                       type="text"/>
                            </label>
                            <label>
                                <p>City:</p>
                                <input onChange={this.getInputsValue('city')} value={this.state.user.city} type="text"/>
                            </label>
                            <label>
                                <p>Zipcode:</p>
                                <input onChange={this.getInputsValue('zipcode')} value={this.state.user.zipcode}
                                       type="text"/>
                            </label>


                        </div>
                        <div className={s.userPart}>
                            <div className={s.user__title}>Company</div>
                            <label>
                                <p>Name:</p>
                                <input onChange={this.getInputsValue('companyName')} value={this.state.user.companyName}
                                       type="text"/>
                            </label>
                            <label>
                                <p>CatchPhrase:</p>
                                <input onChange={this.getInputsValue('catchPhrase')} value={this.state.user.catchPhrase}
                                       type="text"/>
                            </label>
                            <label>
                                <p>Bs:</p>
                                <input onChange={this.getInputsValue('bs')} value={this.state.user.bs} type="text"/>
                            </label>
                            <div className={s.geo}>
                                <div className={s.geo_title}>Geo</div>
                                <label>
                                    <p>lat :</p>
                                    <input onChange={this.getInputsValue('lat')} value={this.state.user.lat}
                                           type="text"/>
                                </label>
                                <label>
                                    <p>lng :</p>
                                    <input onChange={this.getInputsValue('lng')} value={this.state.user.lng}
                                           type="text"/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className={s.link}>
                        {!this.state.isNewUser ?
                            <button onClick={() => {
                                addNewUser(newUser)

                            }}>Add</button>
                            : <button onClick={() => {
                                updateUser(newUser)
                            }}>Update</button>
                        }

                        <NavLink to='/users'> Cancel</NavLink>
                    </div>
                </form>
            </div>
        )
    }
}

function MapStateToProps(state) {
    return {
        isAddedSuccess: state.userData.isAddedSuccess,
        isAddFailed: state.userData.isAddFailed,
        isUpdateSuccess: state.userData.isUserUpdateSuccess,
        isUpdateFailed: state.userData.isUpdateFailed
    }

}

export const FormAddEditUser = connect(MapStateToProps, {
        addNewUser: addNewUserFetch,
        addFailed: addNewUserFailed,
        addSuccess: addNewUserSuccess,
        userFetch: userDataFetch,
        updateUser: updateUser,
        updateUserSuccess: updateUserSuccess,
        updateUserFailed: updateUserFailed


    }
)(_FormAddEditUser)


