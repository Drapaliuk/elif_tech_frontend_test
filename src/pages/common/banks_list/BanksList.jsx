import React from 'react'

import { BankTemplate } from '../../bank_admin';
import { Bank } from '../bank/Bank';

export function BanksList({banks, userRole, isCreatingBank, createBankHandler, deleteBankHandler}) {
    const isAdmin = userRole === 'admin';
    return (
        <div className = 'banks-list'>
            {isCreatingBank && <BankTemplate {...{createBankHandler}} />}
            {banks?.map(bankInfo => {
                    return <Bank {...{bankInfo, isAdmin, deleteBankHandler}} />
                })}
        </div>
    )
}