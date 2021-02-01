import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom'
import { getSelectedBank } from '../../../redux/selectors';
import { isValidIndicatorValue, mortgageCalculator } from '../../../tools';
import { Header, BackBtn } from '../../../components';
import { MonthlyPaymentsTable, ServiceIndicator } from './components';
import { mainBankIndicators } from '../../../service_resources';

const increment = (initialSum, step,  funcForSaveValue, max) => () => {
    const incrementedSum = initialSum + step
    const isValidValue = isValidIndicatorValue(incrementedSum, 0, max)
    console.log('isValidValue', max)
    if(isValidValue) return funcForSaveValue(incrementedSum)
}

const decrement = (initialSum, step, funcForSaveValue, min) => () => {
    const decrementedSum = initialSum - step
    console.log('decrementedSum', decrementedSum)
    const isValidValue = isValidIndicatorValue(decrementedSum, min)
    if(isValidValue) return funcForSaveValue(decrementedSum)
}


export function SelectedService() {
    const selectedBank = useSelector(state => getSelectedBank(state))
    const [loanSum, setLoanSum] = React.useState(selectedBank?.indicators.minimumDownPayment);
    const [changedLoanTerm, setLoanTerm] = React.useState(selectedBank?.indicators.loanTerm);

    if(!selectedBank) return <Redirect to = '/banks' />
    const { indicators } = selectedBank;
    const {minimumDownPayment, maximumLoan, loanTerm} = indicators;


    const changeLoanHandler = ({target}) => {
        const isValidValue = isValidIndicatorValue(target.value, 0, maximumLoan)
        console.log('isValidValue', isValidValue)
        if(isValidValue) return setLoanSum(+target.value)
    }


    const incrementLoanTermHandler = increment(changedLoanTerm, 1, setLoanTerm, Infinity)
    const decrementLoanTermHandler = decrement(changedLoanTerm, 1, setLoanTerm, 0)
    const incrementLoanSumHandler = increment(loanSum, 1000, setLoanSum, maximumLoan)
    const decrementLoanSumHandler = decrement(loanSum, 1000, setLoanSum, 0)

    console.log('changedLoanTerm', changedLoanTerm)
    const calculatedMortgage = mortgageCalculator({...indicators, loanSum, loanTerm: changedLoanTerm})



    
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
                                    <input value = {changedLoanTerm} className = 'loan-term__input' type="text" placeholder = '0'/>
                                    <button onClick = {incrementLoanTermHandler} className = 'loan-term__increment'>+</button>
                                </div>
                                <div>Month</div>
                            </div>
                        </div>
                        {mainBankIndicators.map((indicator) => {
                                return <ServiceIndicator key = {indicator._id} 
                                                  name = {indicator.name} 
                                                  value = {selectedBank.indicators[indicator.key]} />
                        })}
                        <NavLink to = '#' className = 'confirm-btn'>Confirm</NavLink>
                    </div>
                    
                    <MonthlyPaymentsTable {...{calculatedMortgage}} />
                </div>
                
            </div>
        </>
    )
}
