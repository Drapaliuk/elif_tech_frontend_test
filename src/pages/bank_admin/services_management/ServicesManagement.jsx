import React from 'react'
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { BankServices } from '../../common'
import { Header } from '../../../components'

export function ServicesManagement() {
    const selectedBanksId = useSelector(state => state.banks.selectedBankId);
    if(!selectedBanksId) {
        return <Redirect to = '/banks' />
    }
    return (
        <>
            <Header />
            <BankServices />
        </>
    )
}

