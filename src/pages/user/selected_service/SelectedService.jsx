import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { getSelectedBank } from '../../../redux/selectors';
import { isValidIndicatorValue, mortgageCalculator, increment, decrement } from '../../../tools';
import { Header, BackBtn } from '../../../components';
import { LoanTerm, MonthlyPaymentsTable, ServiceIndicator } from './components';
import { mainBankIndicators } from '../../../service_resources';

export function SelectedService() {
    const selectedBank = useSelector(state => getSelectedBank(state))
    const [loanSum, setLoanSum] = React.useState(selectedBank?.indicators.minimumDownPayment);
    const [changedLoanTerm, setLoanTerm] = React.useState(1);

    if(!selectedBank) return <Redirect to = '/banks' />
    const { indicators } = selectedBank;
    const { maximumLoan, minimumDownPayment } = indicators;
    const isLessThanDownPayment = loanSum < selectedBank?.indicators.minimumDownPayment

    const changeLoanHandler = ({target}) => {
        const isValidValue = isValidIndicatorValue(target.value, 0, maximumLoan)
        if(isValidValue) return setLoanSum(+target.value)
    }


    const incrementLoanTermHandler = increment(changedLoanTerm, 1, Infinity, setLoanTerm)
    const decrementLoanTermHandler = decrement(changedLoanTerm, 1, 0, setLoanTerm)
    const incrementLoanSumHandler = increment(loanSum, 1000, maximumLoan, setLoanSum)
    const decrementLoanSumHandler = decrement(loanSum, 1000, 0, setLoanSum)

    const {paymentsByMonth, totalInterestPayments} = mortgageCalculator({...indicators, loanSum, loanTerm: changedLoanTerm})
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
                        <LoanTerm {...{setLoanTerm, changedLoanTerm}} />
                        
                        {mainBankIndicators.map((indicator) => {
                                return <ServiceIndicator key = {indicator._id} 
                                                  name = {indicator.name} 
                                                  value = {selectedBank.indicators[indicator.key]} />
                        })}
                        <ServiceIndicator name = 'Total interest payments: ' value = {totalInterestPayments} />
                        <NavLink to = '#' className = 'confirm-btn'>Confirm</NavLink>
                        {isLessThanDownPayment  ? <div className = 'service-params__warning-message'>
                                                        Loan sum is less then minimum down payment.
                                                        Input value to loan sum field
                                                         more than {minimumDownPayment}
                                                  </div> 
                                                : null}
                    </div>
                    
                    <MonthlyPaymentsTable {...{paymentsByMonth, isLessThanDownPayment}} />
                </div>
                
            </div>
        </>
    )
}
