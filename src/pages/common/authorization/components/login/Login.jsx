import React from 'react';
import { AiOutlineUserSwitch, AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authorization, login, setAuthError } from '../../../../../redux/actions';
import { getAuthData, getAuthError } from '../../../../../redux/selectors';
import { serverErrorsMessages } from '../../../../../service/server_errors/server_errors';
import { AuthForm } from '../auth_form/AuthForm';
export function Login() {
    const authData = useSelector(state => getAuthData(state));
    const serverError = useSelector(state => getAuthError(state));
    
    const dispatch = useDispatch();
    const onSubmit = () => dispatch(authorization(authData, 'login'))

    const onClearAuthError = () => dispatch(setAuthError(''))
    return (
        <div className = 'authorization-page'>
            <div class="login">
                <div class="login__icon-background">
                    <AiOutlineUserSwitch className = 'icon__login' />
                </div>
                <NavLink onClick = {onClearAuthError} className = 'auth__close-btn' to = '/auth'>
                    <AiOutlineClose className = 'auth__close-icon' />
                </NavLink>

                <h2 class="login__header">Log in</h2>
                <AuthForm onSubmit = {onSubmit} />
                {
                    serverError &&
                    <div class="server-error-message">
                        {serverErrorsMessages.authorization[serverError].message}
                    </div>

                }
                <p class="login__register-link">Don`t have account?
                    <NavLink to='/auth/registration'>REGISTER HERE</NavLink>
                </p>
            </div>
        </div>
    )
}