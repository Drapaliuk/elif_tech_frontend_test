import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, Redirect, Route } from 'react-router-dom'
import { BackBtn } from '../components/back_btn/BackBtn'
import { Login } from './components/login/Login'
import { Registration } from './components/registration/Registration'
import { SelectRole } from './components/select_role/SelectRole'

export function Authorization() {
    const isAuthorization = useSelector(state => state.authorization.isAuthorization)
    return (
        <div className = 'authorization-page'>
            {isAuthorization && <Redirect to = '/banks'/>}
            <BackBtn />
            <Route exact path = '/auth' component = {() => {
                return (
                    <div className="authorization-links-wrapper">
                        <NavLink className = 'authorization-link' to = '/auth/select-role'>Registration</NavLink>
                        <NavLink className = 'authorization-link' to = '/auth/login'>Login</NavLink>
                    </div>
                )
            }} />
            <Route exact path = '/auth/select-role' component = {SelectRole} />
            <Route exact path = '/auth/registration' component = {Registration} />
            <Route exact path = '/auth/login' component = {Login} />
        </div>
    )
}