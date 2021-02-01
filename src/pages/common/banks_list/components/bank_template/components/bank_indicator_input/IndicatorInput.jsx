import React from 'react';
import { GoLightBulb } from 'react-icons/go';
import { HiOutlineExclamation } from 'react-icons/hi';


export function IndicatorInput({indicator, setBankIndicatorInfo, value}) {
    const {key, name, units, min, max} = indicator;
    return (
        <li key = {key} className = 'bank-indicators__item'>
            <div className='bank-indicators__name-wrapper'>
                <GoLightBulb className = 'bank-indicators__icon' />
                <div className = 'bank-indicators__name'>{name}</div>
            </div>
            <div className = 'bank-template__indicator-wrapper'>
                <input  value = {value} 
                        onChange = {setBankIndicatorInfo(key, min, max)} 
                        className = 'bank-template__set-indicator-value'  
                        type="text"/>
                <span>{units}</span>
                <HiOutlineExclamation />
            </div>
        </li>
    )
}