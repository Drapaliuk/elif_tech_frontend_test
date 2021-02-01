import React from 'react'
import { BankIndicators, isValidIndicatorValue, objectsValidator} from '../../../../../tools';
import { useDispatch } from 'react-redux';
import { createBank } from '../../../../../redux/actions';
import { mainBankIndicators } from '../../../../../service_resources';
import { BankNameInput, IndicatorInput } from './components';

export function BankTemplate({createBankHandler}) {
    const dispatch = useDispatch();
    const [infoAboutNewBank, setInfoAboutNewBank] = React.useState(new BankIndicators());
    const [invalidFields, setInvalidFields] = React.useState([]);

    const setBankIndicatorInfo = (indicatorKey, min, max) => ({target}) => setInfoAboutNewBank(prevState => {
        if(isValidIndicatorValue(target.value, min, max)) {
            setInvalidFields(prevState => prevState.filter(el => el !== indicatorKey))
            return {...prevState, [indicatorKey]: Number(target.value)};
        }
        return prevState;
    })

    const setBankName = ({target}) => setInfoAboutNewBank(prevState => {
        setInvalidFields(prevState => prevState.filter(el => el !== 'bankName'))
        return {...prevState, bankName: target.value}
    })

    const saveNewBank = () => {
        const invalidFields = objectsValidator(infoAboutNewBank, (key, value) => !value ? key : null)
        if(invalidFields.length === 0) {
            dispatch(createBank(infoAboutNewBank))
            setInvalidFields([])
        } else {
            setInvalidFields(invalidFields)
        }
    }
    
    return (
        <div className = 'bank-template'>
            <h2 className = 'bank-template__title'>Create new bank</h2>
            <div className = 'bank-template__set-name-title'>Write your new bank name:</div>
            <BankNameInput value = {infoAboutNewBank.bankName} handler = {setBankName} isInvalid = {invalidFields.includes('bankName')}   />
            <ul className = 'bank-indicators'>
                {mainBankIndicators.map(indicator => {
                    const isInvalid = invalidFields.includes(indicator.key)
                    return (
                        <IndicatorInput key = {indicator._id}
                            {...{indicator, isInvalid,  invalidFields, setBankIndicatorInfo, value: infoAboutNewBank[indicator.key]}} />
                    )
                })}
            </ul>
            <div className="template-bank__btn-wrapper">
                <button onClick = {saveNewBank} className = 'template-bank__save-btn'>save</button>
                <button onClick = {createBankHandler(false)} className = 'template-bank__cancel-btn'>cancel</button>
            </div>
            </div>
    )
}

