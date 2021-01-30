import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { Header } from '../../bank'
import { BackBtn } from '../../common'

export function BankServiceManagement() {
    return (
        <>
            <Header />
            <div className='service-management'>
                <div className = 'service-management__bank-name'>Bank name</div>
                <BackBtn />
                <h1 className = 'service-name'>Mortgage</h1>
                <div className='service-management__content-wrapper'>
                    <div className='service-params'>
                        <div className = 'initial-loan'>
                            <h2 className = 'initial-loan__title'>Loan</h2>
                            <div className = 'initial-loan__set-loan-wrapper'>
                                <button className = 'initial-loan__increment'>+</button>
                                <input className = 'initial-loan__input' type="text" placeholder = '0'/>
                                <button className = 'initial-loan__decrement'>-</button>
                            </div>
                        </div>
                        <div className = 'service-params__item'>
                            <div className = 'service-params__name-wrapper'>
                                <MdAttachMoney className = 'service-params__icon' />
                                <div className = 'service-params__name'>Down payment</div>
                            </div>
                            <div className='service-params__value'>10000</div>
                        </div>
                        <NavLink to = '#' className = 'confirm-btn'>Confirm</NavLink>
                    </div>
                    <div className = 'monthly-payments'>
                        <div className = 'monthly-payments_titles'>
                            <div className = 'monthly-payments__title'>Year</div>
                            <div className = 'monthly-payments__title'>Month</div>
                            <div className = 'monthly-payments__title'>Total payment</div>
                            <div className = 'monthly-payments__title'>Interest payment</div>
                            <div className = 'monthly-payments__title'>Equity</div>
                        </div>
                        <div className='monthly-payments__rows'>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                            <div className = 'monthly-payments__row'>
                                <div className = 'monthly-payments__value'>2020</div>
                                <div className = 'monthly-payments__value'>1</div>
                                <div className = 'monthly-payments__value'>2300</div>
                                <div className = 'monthly-payments__value'>1231</div>
                                <div className = 'monthly-payments__value'>12312312</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}