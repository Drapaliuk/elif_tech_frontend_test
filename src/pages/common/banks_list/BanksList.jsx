import React from 'react'
import { BankTemplate, Bank } from './components';

export function BanksList({banks, userRole, isCreatingBank, createBankHandler, deleteBankHandler}) {
    const isAdmin = userRole === 'admin';
    return (
        <div className = 'banks-list'>
            {/* <h1 className = 'banks-list__title'>My banks</h1> */}

            {isCreatingBank && <BankTemplate {...{createBankHandler}} />}
            {banks.map(bankInfo => {
                    return <Bank key = {bankInfo._id} {...{bankInfo, isAdmin, deleteBankHandler}} />
                })}
        </div>
    )
}