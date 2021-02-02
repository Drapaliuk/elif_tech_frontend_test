import React from 'react'
import { NavLink } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { FaPiggyBank } from 'react-icons/fa'
import { logOut } from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserBalance } from '../../redux/selectors'
 
export function Header() {
    const dispatch = useDispatch()
    const currentUserBalance = useSelector(state => getCurrentUserBalance(state))
    const userRole = useSelector(state => state.authorization.userRole)
    const logOutHandler = () => dispatch(logOut())
    return (
        <header className = 'header'>
            <NavLink to = '/banks' className = 'header__app-logo'>
                <FaPiggyBank className = 'header__app-logo-icon' />
            </NavLink>
            {userRole !== 'admin' &&
            <div className = 'balance-display'>
                <span className = 'balance-display__title'>Balance:</span> 
                <span className = 'balance-display__value'>{currentUserBalance} $</span>
            </div>}
            <button onClick = {logOutHandler} className = 'header__logout-btn'>
                <FiLogOut className = 'header__logout-icon' />
            </button>
        </header>
    )
}