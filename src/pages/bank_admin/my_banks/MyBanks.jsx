import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBank } from '../../../redux/actions/banks/banks'
import { BanksList } from '../../user'
import { Header } from '../../../components'

export function MyBanks({userRole, banks}) {
    const [isCreatingBank, setCreatingBank] = React.useState(false);
    const dispatch = useDispatch();
    const createBankHandler = data => () => setCreatingBank(data);
    const deleteBankHandler = bankId => () => dispatch(deleteBank(bankId));
    
    return (
        <>
            <Header />
            <h1 className = 'banks-list__title'>My banks</h1>
            <BanksList {...{userRole, isCreatingBank, createBankHandler, banks, deleteBankHandler}} />
            <button disabled = {isCreatingBank} onClick = {createBankHandler(true)} className = 'create-new-bank'>Create bank</button>
        </>
    )
}
