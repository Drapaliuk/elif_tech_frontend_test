import React from 'react'
import { Header } from '../header/Header'
import { AiFillBank, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';

export function BankAdmin() {
    return (
        <>
            <Header />
            <div className = 'bank-admin'>
                <AiFillBank className = 'bank-logo-icon' />
                <h1 className = 'bank-name'>Some bank</h1>
                <div className="bank-admin__content-wrapper">
                    <ul className="bank-conditions">
                        <li className = 'bank-conditions__item'>
                            <div className = 'bank-conditions__name-wrapper'>
                                <MdAttachMoney className = 'bank-conditions__icon' />
                                <div className = 'bank-conditions__name'>interest rate:</div>
                            </div>
                            <div className = 'bank-conditions__value-wrapper'>
                                <div className='bank-conditions__value'>20%</div>
                                {/* <input className = 'bank-conditions__update-value-input' placeholder = 'new value' type="text"/> */}
                                <button className = 'bank-conditions__update-value-btn'>
                                    {/* <BiEditAlt className = 'bank-conditions__update-value-icon' /> */}
                                    <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' />
                                </button>
                            </div>
                        </li>
                        <li className = 'bank-conditions__item'>
                            <div className = 'bank-conditions__name-wrapper'>
                                <MdAttachMoney className = 'bank-conditions__icon' />
                                <div className = 'bank-conditions__name'>interest rate:</div>
                            </div>
                            <div className = 'bank-conditions__value-wrapper'>
                                {/* <div className='bank-conditions__value'>20 years</div> */}
                                <input className = 'bank-conditions__update-value-input' placeholder = 'new value' type="text"/>
                                <button className = 'bank-conditions__update-value-btn'>
                                    {/* <BiEditAlt className = 'bank-conditions__update-value-icon' /> */}
                                    <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' />
                                </button>
                            </div>
                        </li>
                        <li className = 'bank-conditions__item'>
                            <div className = 'bank-conditions__name-wrapper'>
                                <MdAttachMoney className = 'bank-conditions__icon' />
                                <div className = 'bank-conditions__name'>interest rate:</div>
                            </div>
                            <div className = 'bank-conditions__value-wrapper'>
                                <div className='bank-conditions__value'>20%</div>
                                {/* <input className = 'bank-conditions__update-value-input' placeholder = 'new value' type="text"/> */}
                                <button className = 'bank-conditions__update-value-btn'>
                                    {/* <BiEditAlt className = 'bank-conditions__update-value-icon' /> */}
                                    <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' />
                                </button>
                            </div>
                        </li>
                        <li className = 'bank-conditions__item'>
                            <div className = 'bank-conditions__name-wrapper'>
                                <MdAttachMoney className = 'bank-conditions__icon' />
                                <div className = 'bank-conditions__name'>interest rate:</div>
                            </div>
                            <div className = 'bank-conditions__value-wrapper'>
                                <div className='bank-conditions__value'>200000</div>
                                {/* <input className = 'bank-conditions__update-value-input' placeholder = 'new value' type="text"/> */}
                                <button className = 'bank-conditions__update-value-btn'>
                                    {/* <BiEditAlt className = 'bank-conditions__update-value-icon' /> */}
                                    <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' />
                                </button>
                            </div>
                        </li>
                        
                        
                    </ul>
                    <div className="bank-admin__service-wrapper">
                        <ul className = 'bank-services'>
                            <li className = 'bank-services__item'>
                                <button className = 'bank-services__btn'>
                                    Mortgage
                                </button>
                            </li>
                            <li className = 'bank-services__item'>
                                <button className = 'bank-services__btn'>
                                    Mortgage
                                </button>
                            </li>
                            <li className = 'bank-services__item'>
                                <button className = 'bank-services__btn'>
                                    Mortgage
                                </button>
                            </li>
                        </ul>
                        <NavLink className = 'bank-admin__add-new-service' to = '#'>Add new service</NavLink>
                    </div>
                </div>
               
            </div>
        </>
    )
}

