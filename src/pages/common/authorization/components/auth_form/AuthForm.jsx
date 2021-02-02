import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { minLength, onlyNumbers, required } from '../../../../../tools'
import { PasswordField, LoginField, UserBalanceField } from './components'

const validators = [required, minLength];

const component = ({showBalanceField, handleSubmit}) => {
    return (
        <form onSubmit = {handleSubmit} class="login__form">
            <Field name = 'login' type = 'text' component = { LoginField } placeholder = 'login' validate = {validators}/>
            <Field name = 'password' component = {PasswordField} placeholder = 'password' validate = {validators} />
            {showBalanceField &&
            <Field name = 'balance' component = {UserBalanceField} validate = {[...validators, onlyNumbers]} placeholder = 'please write your balance' />}
            <div class="login__btn-wrapper">
                <button class="login__btn-done">Sign In</button>
            </div>
        </form>
    )
}

export const AuthForm = reduxForm({
    form: 'auth'
})(component)