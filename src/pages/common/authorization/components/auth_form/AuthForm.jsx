import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { minLength, required } from '../../../../../utils';
import { PasswordField } from './PasswordField';
import { LoginField } from './LoginField';

const validators = [required, minLength];

const component = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit = {handleSubmit} class="login__form">
            <Field name = 'login' type = 'text' component = { LoginField } placeholder = 'login' validate = {validators}/>
            <Field name = 'password' component = {PasswordField} placeholder = 'password' validate = {validators} />
            <div class="login__btn-wrapper">
                <button class="login__btn-done">Sign In</button>
            </div>
        </form>
    )
}

export const AuthForm = reduxForm({
    form: 'auth'
})(component)