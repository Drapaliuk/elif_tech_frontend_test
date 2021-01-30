import React from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { IoChevronBackSharp } from 'react-icons/io5';
export function BackBtn() {
    const {goBack} = useHistory()
    return (
        <button onClick = {() => goBack()} className = 'back-btn'>
            <IoChevronBackSharp className = 'back-btn__icon' />
        </button>
    )
}