import React from 'react';
import { GoLightBulb } from 'react-icons/go';
import classNames from 'classnames';

export function IndicatorInput({indicator, setBankIndicatorInfo, isInvalid, value}) {
    const {key, name, units, min, max} = indicator;
    return (
        <li key = {key} className = {classNames('bank-indicators__item', {'bank-indicators__item_invalid': isInvalid})}>
            <div className='bank-indicators__name-wrapper'>
                <GoLightBulb className = 'bank-indicators__icon' />
                <div className = 'bank-indicators__name'>{name}</div>
            </div>
            <div className = 'bank-template__indicator-wrapper'>
                <input  value = {value || ''} 
                        onChange = {setBankIndicatorInfo(key, min, max)} 
                        className = 'bank-template__set-indicator-value'  
                        type="text"/>
                <span>{units}</span>
            </div>
        </li>
    )
}