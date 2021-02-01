import React from 'react'
import { increment, decrement, amountYearsCalculator } from '../../../../../tools';




export function LoanTerm({setLoanTerm, changedLoanTerm}) {
    const incrementMonths = increment(changedLoanTerm, 1, Infinity, setLoanTerm)
    const decrementMonths = decrement(changedLoanTerm, 1, 0, setLoanTerm)
    const incrementYears = increment(changedLoanTerm, 12, Infinity, setLoanTerm)
    const decrementYears = decrement(changedLoanTerm, 12, 0, setLoanTerm)

    const {years, months} = amountYearsCalculator(changedLoanTerm)


    return (
        <div className = 'loan-term'>
            <h2 className = 'loan-term__title'>Loan term</h2>
            <div className = 'loan-term__set-loan-wrapper'>
                <div className = 'loan-term__btn-wrapper'>
                    <button onClick = {decrementMonths} className = 'loan-term__decrement'>-</button>
                    <input value = {months} className = 'loan-term__input' type="text" placeholder = '0'/>
                    <button onClick = {incrementMonths} className = 'loan-term__increment'>+</button>
                </div>
                <div>Months</div>
            </div>
            <div className = 'loan-term__set-loan-wrapper'>
                <div className = 'loan-term__btn-wrapper'>
                    <button onClick = {decrementYears} className = 'loan-term__decrement'>-</button>
                    <input value = {years} className = 'loan-term__input' type="text" placeholder = '0'/>
                    <button onClick = {incrementYears} className = 'loan-term__increment'>+</button>
                </div>
                <div>Years</div>
            </div>
        </div>
    )
}