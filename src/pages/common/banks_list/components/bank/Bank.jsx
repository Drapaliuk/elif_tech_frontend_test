import React from 'react'
import { AiFillBank } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { selectBank } from '../../../../../redux/actions'
import { mainBankIndicators } from '../../../../../service_resources'
import { DeleteBtn, Indicator, SettingsLink, EnterBankLink } from './components'

export function Bank({bankInfo, isAdmin, deleteBankHandler}) {
    const dispatch = useDispatch();
    const selectedBankHandler = () => dispatch(selectBank(bankInfo._id));

    return (
        <article className = 'bank'>
            <AiFillBank className = 'bank__logo-icon' />
            {isAdmin ? <SettingsLink {...{selectedBankHandler}} />
                     : <EnterBankLink {...{selectedBankHandler}} />}
            
            <h2 className = 'bank__name'>{bankInfo.bankName}</h2>
            <ul className = 'bank-indicators'>
                {mainBankIndicators.map(({_id, key, name, units}) => {
                    return <Indicator key = {_id} {...{name, units, value: bankInfo.indicators[key]}} />
                })}
            </ul>
            {isAdmin && <DeleteBtn handler = {deleteBankHandler(bankInfo._id)} />}
        </article>
    )
}
