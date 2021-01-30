import React from 'react'
import { GoLightBulb } from 'react-icons/go';
import { checkOutAuth } from '../../../redux/actions';
import { Bank } from '../../../utils/constructors/Bank';

const indicators = [
    {key: 'interestRate', name: 'interest rate', units: '%' },
    {key: 'maximumLoan', name: 'maximum loan', units: '$' },
    {key: 'minimumDownPayment', name: 'minimum down payment', units: '$'},
    {key: 'loanTerm', name: 'loan term', units: 'years' }

]






export function BankTemplate({createBankHandler}) {
    
    const [indicatorsValues, setIndicatorsValue] = React.useState(new Bank())
    const setIndicatorHandler = indicatorName => ({target}) => setIndicatorsValue(prevState => {
        return {...prevState, [indicatorName]: target.value}
    })
    const onSave = () => {
        const checkIndicatorsFieldsFields = 
    }
    return (
        <div className = 'bank-template'>
            <h2 className = 'bank-template__title'>Create new bank</h2>
            <div className = 'bank-template__set-name-title'>Write yor new bank name:</div>
            <input className = 'bank-template__set-name' type="text"/>
            <ul className = 'bank-indicators'>
                {
                    indicators.map(indicator => {
                        console.log('indicatorsValues[indicator.name]', indicatorsValues)
                        return (
                            <li key = {indicator.key} className = 'bank-indicators__item'>
                                <div className='bank-indicators__name-wrapper'>
                                    <GoLightBulb className = 'bank-indicators__icon' />
                                    <div className = 'bank-indicators__name'>{indicator.name}</div>
                                </div>
                                <div className = 'bank-template__indicator-wrapper'>
                                    <input value = {indicatorsValues[indicator.key]} 
                                           onChange = {setIndicatorHandler(indicator.key)} 
                                           className = 'bank-template__set-indicator-value'  
                                           type="text"/>
                                    <span>{indicator.units}</span>
                                    
                                </div>
                            </li>
                        )
                    })
                }
                
               
            </ul>
            <div className="template-bank__btn-wrapper">
                <button className = 'template-bank__save-btn'>save</button>
                <button onClick = {createBankHandler(false)} className = 'template-bank__cancel-btn'>cancel</button>
            </div>
            </div>
    )
}

