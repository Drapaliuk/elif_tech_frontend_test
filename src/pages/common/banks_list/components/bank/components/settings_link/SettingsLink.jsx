import React from 'react'
import { IoSettingsOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export function SettingsLink({selectedBankHandler}) {
    return (
        <NavLink onClick = {selectedBankHandler} to = '/bank/management-services' className = 'bank__settings'>
            <IoSettingsOutline className = 'bank__settings-icon' />
        </NavLink>
    )
}