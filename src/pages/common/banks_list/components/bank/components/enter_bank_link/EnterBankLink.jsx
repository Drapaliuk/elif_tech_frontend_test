import React from 'react'
import { IoArrowBackSharp } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

export function EnterBankLink({selectedBankHandler}) {
    return (
        <NavLink onClick = {selectedBankHandler} to = '/bank/services' className = 'bank__settings'>
            <IoArrowBackSharp className = 'bank__settings-icon' />
        </NavLink>
    )
}
