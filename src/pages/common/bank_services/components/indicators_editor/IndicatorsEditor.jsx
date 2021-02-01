import React from 'react'

export function IndicatorsEditor({updateValueHandler, value}) {
    return (
        <input autoFocus 
               value = {value} 
               onChange = {updateValueHandler} 
               className = 'bank-conditions__update-value-input' 
               placeholder = 'new value' 
               type="text"/>
    )
}
