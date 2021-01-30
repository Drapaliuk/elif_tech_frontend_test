import React from 'react'
import { MdAttachMoney } from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { Header } from '../../bank_admin'
import { BackBtn, BankServices } from '../../common'

export function AvailableServices() {
    return (
        <>
            <Header />
            <BankServices />
        </>
    )
}