import React from 'react';
import { GoLightBulb } from 'react-icons/go'

export function Indicator({name, units, value}) {
    return (
        <li className = 'bank-indicators__item'>
            <div className='bank-indicators__name-wrapper'>
                <GoLightBulb className = 'bank-indicators__icon' />
                <div className = 'bank-indicators__name'>{name}</div>
            </div>
            <div className = 'bank-indicators__value'>{`${value} ${units}`} </div>
        </li>
    )
}