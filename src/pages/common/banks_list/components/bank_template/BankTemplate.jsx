import React from 'react'
import { BankIndicators, isValidIndicatorValue} from '../../../../../tools';
import { useDispatch } from 'react-redux';
import { createBank } from '../../../../../redux/actions';
import { mainBankIndicators } from '../../../../../service_resources';
import { IndicatorInput } from './components';

export function BankTemplate({createBankHandler}) {
    const dispatch = useDispatch();
    const [infoAboutNewBank, setInfoAboutNewBank] = React.useState(new BankIndicators())
    const setBankIndicatorInfo = (indicatorKey, min, max) => ({target}) => setInfoAboutNewBank(prevState => {
        if(isValidIndicatorValue(target.value, min, max)) {
            return {...prevState, [indicatorKey]: Number(target.value)};
        }
        return prevState
    })
    const setBankName = ({target}) => setInfoAboutNewBank(prevState => ({...prevState, bankName: target.value}))
    const saveNewBank = () => dispatch(createBank(infoAboutNewBank))
    
    return (
        <div className = 'bank-template'>
            <h2 className = 'bank-template__title'>Create new bank</h2>
            <div className = 'bank-template__set-name-title'>Write yor new bank name:</div>
            <input onChange = {setBankName} value = {infoAboutNewBank.bankName} className = 'bank-template__set-name' type="text"/>
            <ul className = 'bank-indicators'>
                {
                mainBankIndicators.map((indicator) => {
                    return (
                        <IndicatorInput key = {indicator._id} 
                                        {...{indicator, setBankIndicatorInfo, value: infoAboutNewBank[indicator.key]}} />
                    )
                })
                }
            </ul>
            <div className="template-bank__btn-wrapper">
                <button onClick = {saveNewBank} className = 'template-bank__save-btn'>save</button>
                <button onClick = {createBankHandler(false)} className = 'template-bank__cancel-btn'>cancel</button>
            </div>
            </div>
    )
}

