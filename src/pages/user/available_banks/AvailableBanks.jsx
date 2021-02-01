import React from 'react'
import { Header } from '../../../components'
import { BanksList } from '../../common/banks_list/BanksList'

export function AvailableBanks({userRole, banks}) {
    return (
        <>
            <Header />
            <h1 className = 'banks-list__title'>Available banks</h1>
            <BanksList {...{userRole, banks}} />
        </>
       
    )
}