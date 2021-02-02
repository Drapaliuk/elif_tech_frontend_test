import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthForm } from '../auth_form/AuthForm'
import { AiOutlineClose, AiOutlineUserAdd } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import { getAuthData, getAuthError, getInitialUserBalance } from '../../../../../redux/selectors'
import { authorization, setAuthError } from '../../../../../redux/actions'
import { serverErrorsMessages } from '../../../../../service_resources'

export function Registration() {
    const dispatch = useDispatch();
    const authData = useSelector(state => getAuthData(state));
    const authorizationRole = useSelector(state => state.authorization.authorizationRole)
    const userBalance = useSelector(state => getInitialUserBalance(state));

    const serverError = useSelector(state => getAuthError(state));
    const onSubmit = () => dispatch(authorization(authData, 'registration', userBalance))
    const onClearAuthError = () => dispatch(setAuthError(''))
    return (
            <div class="registration">
                <div class="registration__icon-background">
                    <AiOutlineUserAdd className = 'icon__login' />
                </div>

                <NavLink onClick = {onClearAuthError} className = 'auth__close-btn' to = '/auth'>
                    <AiOutlineClose className = 'auth__close-icon' />
                </NavLink>

                <h2 class="registration__header">Registration</h2>

                <AuthForm onSubmit = {onSubmit} showBalanceField = {authorizationRole !== 'admin'}  />

                {serverError &&
                <div class="server-error-message">
                    {serverErrorsMessages.authorization[serverError].message}
                </div>}
        </div>

       
    )
}