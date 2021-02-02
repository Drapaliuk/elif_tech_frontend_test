import React from 'react'
import { IndicatorsEditor } from '../indicators_editor/IndicatorsEditor'
import { MdAttachMoney } from 'react-icons/md'
import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { isValidIndicatorValue } from '../../../../../tools'
import classNames from 'classnames'

export const BankIndicator = ({indicator, setIndicatorUpdate, isAdmin, selectedBank, updatedIndicators}) => {
    const [editIndicators, switchIndicatorEditor] = React.useState(false);

    const {key, name, units} = indicator;
    const {indicators} = selectedBank;
    const value = indicators[key]

    const setEditIndicatorsHandler = () => switchIndicatorEditor(!editIndicators);
    const updateValueHandler = ({target}) => setIndicatorUpdate(prevState => {
        if(isValidIndicatorValue(target.value)) {
            return {...prevState,  [key]: Number(target.value)}
        }
        return prevState
    })
    
    return (
        <li className = 'bank-conditions__item'>
            <div className = 'bank-conditions__name-wrapper'>
                <MdAttachMoney className = 'bank-conditions__icon' />
                <div className = 'bank-conditions__name'>{name}</div>
            </div>
            <div className = 'bank-conditions__value-wrapper'>
                <div className = {classNames('bank-conditions__value', {'bank-conditions__value_draft': editIndicators})}>
                    {`${value} ${units}`}
                </div>
                
                { isAdmin &&
                    <>
                        { editIndicators &&
                        <IndicatorsEditor {...{switchIndicatorEditor, updateValueHandler, value: updatedIndicators[key]}}  />
                        }
                        <button onClick = {setEditIndicatorsHandler} className = 'bank-conditions__update-value-btn'>
                            {editIndicators ?
                            <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' /> :
                            <BiEditAlt className = 'bank-conditions__update-value-icon' />}
                        </button>
                    </> }
            </div>
        </li>
    )
}