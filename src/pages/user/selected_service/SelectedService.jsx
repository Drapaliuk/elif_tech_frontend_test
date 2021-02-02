import React from 'react'
import { AiFillBank } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { getSelectedBank } from '../../../redux/selectors'
import { mortgageCalculator } from '../../../tools'
import { Header, BackBtn } from '../../../components'
import { LoanSum, LoanTerm, MonthlyPaymentsTable, ServiceIndicator, CalculationSettings } from './components'
import { mainBankIndicators } from '../../../service_resources'
import { updateBalance } from '../../../redux/actions'

export function SelectedService() {
    const dispatch = useDispatch();
    const selectedBank = useSelector(state => getSelectedBank(state))
    
    const [loanSum, setLoanSum] = React.useState(selectedBank?.indicators.minimumDownPayment + 1000)
    const [changedLoanTerm, setLoanTerm] = React.useState(1)
    const [subtractDownPayment, setSubtractDownPayment] = React.useState(false)
    const [roundCalculatedNumbers, setRoundCalculatedNumbers] = React.useState(false)

    if(!selectedBank) return <Redirect to = '/banks' />

    const { indicators, bankName } = selectedBank;
    const { maximumLoan, minimumDownPayment } = indicators;

    const isLessThanDownPayment = loanSum <= selectedBank?.indicators.minimumDownPayment && subtractDownPayment

    const updateBalanceHandler = () => dispatch(updateBalance(loanSum)) 
    const paymentsByMonth = mortgageCalculator({...indicators, loanSum, loanTerm: changedLoanTerm}, 
                                                subtractDownPayment, roundCalculatedNumbers)
    return (
        <>
            <Header />
            <div className='service-management'>
                <BackBtn />
                <div className='service-management__info-title'>
                    <div className = 'service-management__bank-name'>{bankName}</div>
                    <AiFillBank className = 'service-management__icon' />
                    <div className = 'service-name'>Mortgage</div>
                </div>
                <div className='service-management__content-wrapper'>
                    <div className='service-params'>
                    
                        <CalculationSettings {...{setSubtractDownPayment, setRoundCalculatedNumbers, subtractDownPayment, roundCalculatedNumbers}} />
                        <LoanSum {...{setLoanSum, loanSum, maximumLoan}} />
                        <LoanTerm {...{setLoanTerm, changedLoanTerm}} />
                        
                        {mainBankIndicators.map((indicator) => {
                                return <ServiceIndicator key = {indicator._id} 
                                                         name = {indicator.name} 
                                                         value = {selectedBank.indicators[indicator.key]}
                                                         units = {indicator.units} />
                        })}
                        <button onClick = {updateBalanceHandler} className = 'confirm-btn'>Confirm</button>
                        {isLessThanDownPayment  ? <div className = 'service-params__warning-message'>
                                                        Loan sum is less then minimum down payment.
                                                        Input value to loan sum field
                                                         more than {minimumDownPayment}
                                                  </div> 
                                                : null}
                    </div>
                    
                    <MonthlyPaymentsTable {...{paymentsByMonth}} />
                </div>
                
            </div>
        </>
    )
}
