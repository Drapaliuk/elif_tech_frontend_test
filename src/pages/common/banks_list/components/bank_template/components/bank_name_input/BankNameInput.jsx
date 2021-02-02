import React from 'react'
import classNames from 'classnames'

export function BankNameInput({value, handler, isInvalid}) {
    return (
        <input className = {classNames('bank-template__set-name', {'bank-template__set-name_invalid': isInvalid})}  
               onChange = {handler} 
               value = {value} type="text"/>
    )
}