import React from 'react';
import { NavLink } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';
import { FaPiggyBank } from 'react-icons/fa';
import { logOut } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
 
export function Header() {
    const dispatch = useDispatch()
    const logOutHandler = () => dispatch(logOut())
    return (
        <header className = 'header'>
            <NavLink to = '#' className = 'header__app-logo'>
                <FaPiggyBank className = 'header__app-logo-icon' />
            </NavLink>
            <button onClick = {logOutHandler} className = 'header__logout-btn'>
                <FiLogOut className = 'header__logout-icon' />
            </button>
        </header>
    )
}