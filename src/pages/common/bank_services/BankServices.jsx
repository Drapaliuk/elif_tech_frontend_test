import React from 'react'
import { Header } from '../../bank_admin/header/Header';
import { AiFillBank, AiOutlineCloseCircle } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import { BiEditAlt } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { BackBtn } from '../components/back_btn/BackBtn';
import { mainBankIndicators } from '../../../service';
import { getSelectedBank } from '../../../redux/selectors/bank/bank';
import { BankIndicators } from '../../../utils/constructors/Bank';
import { updateBank } from '../../../redux/actions/banks/banks';


const BankServiceIndicator = ({indicator: currentIndicator, setIndicatorUpdate, isAdmin, selectedBank, updatedIndicators}) => {
    const [editIndicators, setEditIndicators] = React.useState(false);
    const setEditIndicatorsHandler = () => setEditIndicators(!editIndicators);
    const updateValueHandler = e => setIndicatorUpdate(prevState => {
        return {...prevState,  [currentIndicator.key]: Number(e.target.value)}
    })
    
    return (
        <li className = 'bank-conditions__item'>
            <div className = 'bank-conditions__name-wrapper'>
                <MdAttachMoney className = 'bank-conditions__icon' />
                <div className = 'bank-conditions__name'>{currentIndicator.name}</div>
            </div>
            <div className = 'bank-conditions__value-wrapper'>
                <div className='bank-conditions__value'>{`${selectedBank.indicators[currentIndicator.key]} ${currentIndicator.units}`}</div>
                {
                    isAdmin &&
                    <>
                    {
                        editIndicators &&
                        <input autoFocus value = {updatedIndicators.[currentIndicator.key]} onChange = {updateValueHandler} className = 'bank-conditions__update-value-input' placeholder = 'new value' type="text"/>
                    }
                    <button onClick = {setEditIndicatorsHandler} className = 'bank-conditions__update-value-btn'>
                        {
                            editIndicators ?
                            <AiOutlineCloseCircle className = 'bank-conditions__update-value-icon' /> :
                            <BiEditAlt className = 'bank-conditions__update-value-icon' /> 
                        }
                    </button>
                    </>
                }
            </div>
        </li>
    )
}

export function BankServices() {
    const dispatch = useDispatch()
    const userRole = useSelector(state => state.authorization.userRole);
    const isAdmin = userRole === 'admin';
    const selectedBank = useSelector(state => getSelectedBank(state));
    const [updatedIndicators, setIndicatorUpdate] = React.useState({...selectedBank.indicators})
    const hasMadeValueUpdated = () => {
        for(let key in updatedIndicators) {
            if(updatedIndicators[key] !== selectedBank.indicators[key]) {
                return true
                break
            }
        }
        return false
    }

    const updateIndicatorsHandler =  () => dispatch(updateBank(selectedBank._id, updatedIndicators))


    

    return (
        <>
            <div className = 'bank-admin'>
                <BackBtn />
                <AiFillBank className = 'bank-logo-icon' />
                <h1 className = 'bank-name'>{selectedBank.bankName}</h1>
                <div className="bank-admin__content-wrapper">
                    <ul className="bank-conditions">
                        {
                            mainBankIndicators.map(indicator => {
                                return <BankServiceIndicator {...{indicator, setIndicatorUpdate, isAdmin, selectedBank, updatedIndicators}} />
                            })
                        }
                        {
                            hasMadeValueUpdated() && isAdmin &&
                            <button className = 'bank-conditions__save-btn' onClick = {updateIndicatorsHandler}>SAVE</button>
                        }
                        {
                            !isAdmin &&
                            <NavLink className = 'bank-service-details' to = '/bank/selected-service'>Details</NavLink>
                        }
                    </ul>
                    <div className="bank-admin__service-wrapper">
                        <ul className = 'bank-services'>
                            <li className = 'bank-services__item'>
                                <button className = 'bank-services__btn'>
                                    Mortgage
                                </button>
                            </li>
                        </ul>
                        {/* {
                            isAdmin &&
                            <NavLink className = 'bank-admin__add-new-service' to = '#'>Add new service</NavLink>
                        } */}
                    </div>
                </div>
               
            </div>
        </>
    )
}

