import React from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setRoleForAuthorization } from '../../../../../redux/actions'

export function SelectRole() {
    const dispatch = useDispatch()
    const setRoleHandler = role => () => dispatch(setRoleForAuthorization(role)) 

    return (
        <div className = 'introduction__link-wrapper'>
            <NavLink onClick = {setRoleHandler('user')} className = 'introduction__link' to = '/auth/registration'>User</NavLink>
            <NavLink onClick = {setRoleHandler('admin')} className = 'introduction__link' to = '/auth/registration'>Admin</NavLink>
        </div>
    )
}



