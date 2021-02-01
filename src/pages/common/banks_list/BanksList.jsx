import React from 'react'
import { BankTemplate, Bank } from './components';

export function BanksList({banks, userRole, isCreatingBank, createBankHandler, deleteBankHandler}) {
    const isAdmin = userRole === 'admin';
    return (
        <div className = 'banks-list'>
            {isCreatingBank && <BankTemplate {...{createBankHandler}} />}
            {banks.map(bankInfo => {
                    console.log('bankInfo', bankInfo)
                    return <Bank key = {bankInfo._id} {...{bankInfo, isAdmin, deleteBankHandler}} />
                })}
        </div>
    )
}