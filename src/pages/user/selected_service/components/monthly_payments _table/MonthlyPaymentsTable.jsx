import React from 'react'

export function MonthlyPaymentsTable({calculatedMortgage}) {
    console.log('calculatedMortgage', calculatedMortgage)
    return (
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
    )
}