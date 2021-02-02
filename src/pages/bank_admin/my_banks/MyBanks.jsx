import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteBank } from '../../../redux/actions'
import { BanksList } from '../../user'
import { Header } from '../../../components'

export function MyBanks({userRole, banks}) {
    const [isCreatingBank, setCreatingBank] = React.useState(false);
    const dispatch = useDispatch();
    const creatingBank = data => () => setCreatingBank(data);
    const deleteBankHandler = bankId => () => dispatch(deleteBank(bankId));
    
    return (
        <>
            <Header />
            <BanksList {...{userRole, isCreatingBank, creatingBank, banks, deleteBankHandler}} />
            <button disabled = {isCreatingBank} onClick = {creatingBank(true)} className = 'create-new-bank'>Create bank</button>
        </>
    )
}
