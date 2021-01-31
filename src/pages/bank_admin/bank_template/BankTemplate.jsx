import React from 'react'
import { GoLightBulb } from 'react-icons/go';
import { checkOutAuth } from '../../../redux/actions';
import { BankIndicators } from '../../../utils/constructors/Bank';
import { HiOutlineExclamation } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { createBank } from '../../../redux/actions/banks/banks';
import { mainBankIndicators } from '../../../service';


export function BankTemplate({createBankHandler}) {
    const dispatch = useDispatch();
    const [infoAboutNewBank, setInfoAboutNewBank] = React.useState(new BankIndicators())

    const setBankIndicatorInfo = indicatorName => ({target}) => setInfoAboutNewBank(prevState => {
        const valueToNumber = Number(target.value)
        const isNumber = typeof valueToNumber === 'number'
        const isNaN = Number.isNaN(valueToNumber)
  
        if(!isNaN && isNumber ) {
            console.log('inside')
            return {...prevState, [indicatorName]: Number(target.value)}

        }
        return prevState

    })

    const setBankName = e => setInfoAboutNewBank(prevState => ({...prevState, bankName: e.target.value}))
    const createNewBank = () => dispatch(createBank(infoAboutNewBank))
    
    return (
        <div className = 'bank-template'>
            <h2 className = 'bank-template__title'>Create new bank</h2>
            <div className = 'bank-template__set-name-title'>Write yor new bank name:</div>
            <input onChange = {setBankName} value = {infoAboutNewBank.bankName} className = 'bank-template__set-name' type="text"/>
            <ul className = 'bank-indicators'>
                {
                    mainBankIndicators.map(indicator => {
                        return (
                            <li key = {indicator.key} className = 'bank-indicators__item'>
                                <div className='bank-indicators__name-wrapper'>
                                    <GoLightBulb className = 'bank-indicators__icon' />
                                    <div className = 'bank-indicators__name'>{indicator.name}</div>
                                </div>
                                <div className = 'bank-template__indicator-wrapper'>
                                    <input value = {infoAboutNewBank[indicator.key]} 
                                           onChange = {setBankIndicatorInfo(indicator.key)} 
                                           className = 'bank-template__set-indicator-value'  
                                           type="text"/>
                                    <span>{indicator.units}</span>
                                    <HiOutlineExclamation />
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
            <div className="template-bank__btn-wrapper">
                <button onClick = {createNewBank} className = 'template-bank__save-btn'>save</button>
                <button onClick = {createBankHandler(false)} className = 'template-bank__cancel-btn'>cancel</button>
            </div>
            </div>
    )
}

