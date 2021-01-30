import React from 'react'
import { NavLink } from 'react-router-dom'
import { BanksList } from '../../user'
import { Header } from '../header/Header'

export function MyBanks({userRole}) {
    const [isCreatingBank, setCreatingBank] = React.useState(false);
    const createBankHandler = value => () => setCreatingBank(value) 
    return (
        <>
            <Header />
            <h1 className = 'banks-list__title'>My banks</h1>
            <BanksList {...{userRole, isCreatingBank, createBankHandler}} />
            <button disabled = {isCreatingBank} onClick = {createBankHandler(true)} className = 'create-new-bank'>Create bank</button>
        </>
    )
}
