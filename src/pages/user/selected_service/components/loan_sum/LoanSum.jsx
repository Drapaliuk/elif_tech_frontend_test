import React from 'react'
import { increment, decrement, isValidIndicatorValue } from '../../../../../tools'

export function LoanSum({setLoanSum, loanSum, maximumLoan}) {
    const changeLoanSumHandler = ({target}) => {
        const isValidValue = isValidIndicatorValue(target.value, 0, maximumLoan)
        if(isValidValue) return setLoanSum(+target.value)
    }
    const incrementLoanSumHandler = increment(loanSum, 1000, maximumLoan, setLoanSum)
    const decrementLoanSumHandler = decrement(loanSum, 1000, 0, setLoanSum)
    return (
        <div className = 'initial-loan'>
            <h2 className = 'initial-loan__title'>Loan sum</h2>
            <div className = 'initial-loan__set-loan-wrapper'>
                <button onClick = {decrementLoanSumHandler} className = 'initial-loan__decrement'>-</button>
                <input onChange = {changeLoanSumHandler} value = {loanSum} className = 'initial-loan__input' type="text" placeholder = '0'/>
                <button onClick = {incrementLoanSumHandler} className = 'initial-loan__increment'>+</button>
            </div>
        </div>
    )
}
