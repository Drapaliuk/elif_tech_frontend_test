import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { getSelectedBank } from '../../../redux/selectors/bank/bank';
import { mortgageCalculator } from '../../../utils/mortgage_calclator/mortgage_calculator';
import { Header } from '../../bank_admin'
import { BackBtn } from '../../common';

export function SelectedService() {
    const selectedBank = useSelector(state => getSelectedBank(state))
    const [loanSum, setLoanSum] = React.useState(selectedBank?.indicators.minimumDownPayment);
    const [loanTerm, setLoanTerm] = React.useState(selectedBank?.indicators.loanTerm)
    if(!selectedBank) {
        return <Redirect to = '/banks' />
    }

    const changeLoanHandler = e => setLoanSum(e.target.value)
    const incrementLoanTermHandler = () => setLoanTerm(loanTerm + 1)
    const decrementLoanTermHandler = () => {
        const decrementedSum = loanTerm - 1
        if(decrementedSum >= 0) {
            return setLoanTerm(decrementedSum)
        }
    }
    const incrementLoanSumHandler = () => setLoanSum(loanSum + 1000)
    const decrementLoanSumHandler = () => {
        const decrementedSum = loanSum - 1000
        if(decrementedSum >= 0 && 
           decrementedSum >= selectedBank?.indicators.minimumDownPayment &&
           decrementedSum <= selectedBank?.indicators.maximumLoan) {
            return setLoanSum(decrementedSum)
        }
    }
    const calculatedMortgage = mortgageCalculator({...selectedBank?.indicators, loanSum, loanTerm})



    
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
                            <h2 className = 'initial-loan__title'>Loan sum</h2>
                            <div className = 'initial-loan__set-loan-wrapper'>
                                <button onClick = {decrementLoanSumHandler} className = 'initial-loan__decrement'>-</button>
                                <input onChange = {changeLoanHandler} value = {loanSum} className = 'initial-loan__input' type="text" placeholder = '0'/>
                                <button onClick = {incrementLoanSumHandler} className = 'initial-loan__increment'>+</button>
                            </div>
                        </div>
                        <div className = 'loan-term'>
                            <h2 className = 'loan-term__title'>Loan term</h2>
                            <div className = 'loan-term__set-loan-wrapper'>
                                <div className = 'loan-term__btn-wrapper'>
                                    <button onClick = {decrementLoanTermHandler} className = 'loan-term__decrement'>-</button>
                                    <input value = {loanTerm} className = 'loan-term__input' type="text" placeholder = '0'/>
                                    <button onClick = {incrementLoanTermHandler} className = 'loan-term__increment'>+</button>
                                </div>

                                <div>Month</div>
                            </div>
                        </div>
                        <div className = 'service-params__item'>
                            <div className = 'service-params__name-wrapper'>
                                <MdAttachMoney className = 'service-params__icon' />
                                <div className = 'service-params__name'>Minimum down payment</div>
                            </div>
                            <div className='service-params__value'>{selectedBank.indicators.minimumDownPayment}</div>
                        </div>
                        <div className = 'service-params__item'>
                            <div className = 'service-params__name-wrapper'>
                                <MdAttachMoney className = 'service-params__icon' />
                                <div className = 'service-params__name'>Interest rate</div>
                            </div>
                            <div className='service-params__value'>{selectedBank.indicators.interestRate}</div>
                        </div>
                        <div className = 'service-params__item'>
                            <div className = 'service-params__name-wrapper'>
                                <MdAttachMoney className = 'service-params__icon' />
                                <div className = 'service-params__name'>Maximum loan</div>
                            </div>
                            <div className='service-params__value'>{selectedBank.indicators.maximumLoan}</div>
                        </div>
                        <NavLink to = '#' className = 'confirm-btn'>Confirm</NavLink>
                    </div>
                    <div className = 'monthly-payments'>
                        <div className = 'monthly-payments_titles'>
                            <div className = 'monthly-payments__title'>Month</div>
                            <div className = 'monthly-payments__title'>Total payment</div>
                            <div className = 'monthly-payments__title'>Interest payment</div>
                            <div className = 'monthly-payments__title'>Loan balance</div>
                            <div className = 'monthly-payments__title'>Equity</div>
                        </div>
                        <div className='monthly-payments__rows'>
                            {

                                calculatedMortgage.map(({month, totalPayment, loanBalance, interestPayment, equity}) => {
                                    return (
                                        <div className = 'monthly-payments__row'>
                                            <div className = 'monthly-payments__value'>{month}</div>
                                            <div className = 'monthly-payments__value'>{totalPayment}</div>
                                            <div className = 'monthly-payments__value'>{interestPayment}</div>
                                            <div className = 'monthly-payments__value'>{loanBalance}</div>
                                            <div className = 'monthly-payments__value'>{equity}</div>
                                        </div>
                                    )
                                })

                            }
                            
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
