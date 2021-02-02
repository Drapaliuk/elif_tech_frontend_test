import React from 'react'
import { MdAttachMoney } from 'react-icons/md'

export  function ServiceIndicator({name, value, units}) {
    return (
        <div className = 'service-params__item'>
            <div className = 'service-params__name-wrapper'>
                <MdAttachMoney className = 'service-params__icon' />
            <div className = 'service-params__name'>{name}</div>
            </div>
            <div className='service-params__value'>{value} {units}</div>
        </div>
    )
}

