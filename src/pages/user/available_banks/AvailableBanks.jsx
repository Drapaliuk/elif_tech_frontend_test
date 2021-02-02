import React from 'react'
import { Header } from '../../../components'
import { BanksList } from '../../common/banks_list/BanksList'

export function AvailableBanks({userRole, banks}) {
    return (
        <>
            <Header />
            <BanksList {...{userRole, banks}} />
        </>
       
    )
}