import React from 'react';
import { BiUser } from 'react-icons/bi';
import { FaExclamation } from 'react-icons/fa';
import classNames from 'classnames';

export const LoginField = ({input, meta, ...attributes}) => {
    const {touched, invalid, error} = meta;
    
    const isInvalid = touched && invalid;
    const [isVisibleErrorMessage, setVisibleErrorMessage] = React.useState(false);
    const onShowInvalidMessage = () => setVisibleErrorMessage(!isVisibleErrorMessage)

    return  (<div class="login__input-wrapper">
        <label for="login-password">
            <BiUser className = {classNames('authorization__input-icon', {
                'authorization__invalid-icon': isInvalid,
                'authorization__valid-icon': !isInvalid
            })}  />
        </label>
        <input  className="login__password" {...input} {...attributes} />
        {attributes.serverError}
            {isVisibleErrorMessage || isInvalid &&
            <div class="login__valid-message">
                <div class="triangle-right"></div>
                <div class="triangle-down"></div>
                {error.message}
            </div>}
            {isInvalid &&
            <button onClick = {onShowInvalidMessage} class="authorization__show-invalid-message">
                <FaExclamation className="authorization__invalid-icon" />
            </button>}
    </div>)
}