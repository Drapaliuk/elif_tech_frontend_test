import React from 'react';
import { IoMdEyeOff } from 'react-icons/io'
import { IoMdEye } from 'react-icons/io'
import { MdAttachMoney } from 'react-icons/md';
import { FaExclamation } from 'react-icons/fa';
import classNames from 'classnames';

export const UserBalanceField = ({input, meta, ...attributes}) => {
    const {touched, invalid, error} = meta;
    
    const isInvalid = touched && invalid;
    const [isVisibleErrorMessage, setVisibleErrorMessage] = React.useState(false);
    const [isVisibleBalance, setVisibleBalance] = React.useState(false);

    const onShowInvalidMessage = () => setVisibleErrorMessage(!isVisibleErrorMessage)
    const onShowPassword = () => setVisibleBalance(!isVisibleBalance)


    return  (<div class="login__input-wrapper">
        <label for="login-password">
            <MdAttachMoney className = {classNames('authorization__input-icon', {
                'authorization__invalid-icon': isInvalid,
                'authorization__valid-icon': !isInvalid
            })}  />
        </label>
        <input className="login__password" type = {isVisibleBalance ? 'text' : 'password'} {...input} {...attributes} />
        {attributes.serverError}

        { isVisibleErrorMessage || isInvalid &&
        <div class="login__valid-message">
            <div class="triangle-right"></div>
            <div class="triangle-down"></div>
            {error.message}
        </div> }

        { <button className = 'visible-password-btn' type = 'button' onClick = {onShowPassword}>
            {isVisibleBalance ? <IoMdEye className = 'visible-password-icon' />
                                : <IoMdEyeOff className = 'visible-password-icon' />}
        </button> }
        
        { isInvalid &&
        <button onClick = {onShowInvalidMessage} class="authorization__show-invalid-message">
            <FaExclamation className="authorization__invalid-icon" />
        </button> }
       
    </div>)
}