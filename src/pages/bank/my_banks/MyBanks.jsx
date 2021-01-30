import React from 'react'
import { NavLink } from 'react-router-dom'
import { BanksList } from '../../user'
import { Header } from '../header/Header'

export function MyBanks({userRole}) {

    return (
        <>
            <Header />
            <h1 className = 'banks-list__title'>My banks</h1>
            <BanksList {...{userRole}} />
            <NavLink className = 'create-new-bank' to = '/banks/creating'>Create bank</NavLink>
        </>
    )
}
