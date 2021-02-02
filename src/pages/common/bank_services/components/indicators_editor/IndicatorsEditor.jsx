import React from 'react'

export function IndicatorsEditor({switchIndicatorEditor, updateValueHandler, value}) {
    return (
        <input autoFocus 
               onBlur = {() => switchIndicatorEditor(false)}
               value = {value} 
               onChange = {updateValueHandler} 
               className = 'bank-conditions__update-value-input' 
               placeholder = 'new value' 
               type="text"/>
    )
}
