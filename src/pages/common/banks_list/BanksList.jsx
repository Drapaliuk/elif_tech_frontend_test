import React from 'react'
import { AiFillBank } from 'react-icons/ai';
import { GoLightBulb } from 'react-icons/go';
import { NavLink } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';

export function BanksList({banks, userRole}) {
    const isAdmin = userRole === 'admin';
    return (
        <div className = 'banks-list'>
            <article className = 'bank'>
                        <AiFillBank className = 'bank__logo-icon' />
                    {
                        isAdmin &&
                        <NavLink to = '' className = 'bank__settings'>
                            <IoSettingsOutline className = 'bank__settings-icon' />
                        </NavLink>
                    }
                    <h2 className = 'bank__name'>Name</h2>
                    <ul className = 'bank-indicators'>
                        <li className = 'bank-indicators__item'>
                            <div className='bank-indicators__name-wrapper'>
                                <GoLightBulb className = 'bank-indicators__icon' />
                                <div className = 'bank-indicators__name'>Interest rate</div>
                            </div>
                            <div className = 'bank-indicators__value'>10%</div>
                            
                        </li>
                        <li className = 'bank-indicators__item'>
                            <div className='bank-indicators__name-wrapper'>
                                <GoLightBulb className = 'bank-indicators__icon' />
                                <div className = 'bank-indicators__name'>Maximum loan</div>
                            </div>
                            <div className = 'bank-indicators__value'>200 000 $</div>
                            
                        </li>
                        <li className = 'bank-indicators__item'>
                            <div className='bank-indicators__name-wrapper'>
                                <GoLightBulb className = 'bank-indicators__icon' />
                                <div className = 'bank-indicators__name'>Minimum down paymant</div>
                            </div>
                            <div className = 'bank-indicators__value'> 15%</div>
                            
                        </li>
                        <li className = 'bank-indicators__item'>
                            <div className='bank-indicators__name-wrapper'>
                                <GoLightBulb className = 'bank-indicators__icon' />
                                <div className = 'bank-indicators__name'>Loadn term</div>
                            </div>
                            <div className = 'bank-indicators__value'>10 years</div>
                            
                        </li>
                    </ul>
                    {
                        isAdmin &&
                        <button className = 'bank__delete-btn'>
                            <BsTrash className = 'bank__delete-icon' />
                        </button>
                    }
            </article>
        </div>
    )
}