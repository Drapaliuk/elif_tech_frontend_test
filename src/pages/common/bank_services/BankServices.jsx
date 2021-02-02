import React from 'react';
import { AiFillBank } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { BackBtn } from '../../../components';
import { mainBankIndicators } from '../../../service_resources';
import { getSelectedBank } from '../../../redux/selectors';
import { updateBank } from '../../../redux/actions/banks/banks';
import { BankIndicator } from './components/bank_indicator/BankIndicator';

export function BankServices() {
    const dispatch = useDispatch()
    const selectedBank = useSelector(state => getSelectedBank(state));
    const [updatedIndicators, setIndicatorUpdate] = React.useState({...selectedBank.indicators})
    const userRole = useSelector(state => state.authorization.userRole);
    const isAdmin = userRole === 'admin';
    const updateIndicatorsHandler =  () => dispatch(updateBank(selectedBank._id, updatedIndicators))
    const hasMadeValueUpdated = () => {
        for(let key in updatedIndicators) {
            if(updatedIndicators[key] !== selectedBank.indicators[key]) {
                return true
            }
        }
        return false
    }

    return (
        <>
        <div className = 'bank-admin'>
            <BackBtn />
            <AiFillBank className = 'bank-logo-icon' />
            <h1 className = 'bank-name'>{selectedBank.bankName}</h1>
            <div className="bank-admin__content-wrapper">
                <ul className="bank-conditions">
                    {mainBankIndicators.map(indicator => {
                        return <BankIndicator key = {indicator._id} {...{indicator, setIndicatorUpdate, isAdmin, selectedBank, updatedIndicators}} />
                    })}
                    
                    {hasMadeValueUpdated() && isAdmin &&
                     <button className = 'bank-conditions__save-btn' onClick = {updateIndicatorsHandler}>SAVE</button>}
                    
                    {!isAdmin &&
                     <NavLink className = 'bank-service-details' to = '/bank/selected-service'>Details</NavLink>}
                </ul>
                <div className = 'bank-services__btn'>Mortgage</div>
                    
            </div>
        </div>
        </>
    )
}

