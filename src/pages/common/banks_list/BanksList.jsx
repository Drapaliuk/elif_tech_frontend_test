import React from 'react'
import { BankTemplate, Bank } from './components'

export function BanksList({banks, userRole, isCreatingBank, creatingBank, deleteBankHandler}) {
    const isAdmin = userRole === 'admin';
    
    return (
        <>
        <h1 className = 'banks-list__title'>Banks</h1>
        <div className = 'banks-list'>
            {isCreatingBank && <BankTemplate {...{creatingBank}} />}
            {banks.map(bankInfo => {
                    return <Bank key = {bankInfo._id} {...{bankInfo, isAdmin, deleteBankHandler}} />
                })}
        </div>
        </>
    )
}