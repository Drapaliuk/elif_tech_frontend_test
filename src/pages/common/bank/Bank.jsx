import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillBank } from 'react-icons/ai';
import { GoLightBulb } from 'react-icons/go';
import { IoSettingsOutline, IoArrowBackSharp } from 'react-icons/io5';
import { BsTrash } from 'react-icons/bs';
import { mainBankIndicators } from '../../../service';
import { useDispatch } from 'react-redux';
import { selectBank } from '../../../redux/actions/banks/banks';

export function Bank({bankInfo, isAdmin, deleteBankHandler}) {
    const dispatch = useDispatch();
    const selectedBankHandler = () => dispatch(selectBank(bankInfo._id));
    return (
        <article className = 'bank'>
            <AiFillBank className = 'bank__logo-icon' />
            {
                isAdmin 
                    ?
                <NavLink onClick = {selectedBankHandler} to = '/bank/management-services' className = 'bank__settings'>
                    <IoSettingsOutline className = 'bank__settings-icon' />
                </NavLink>
                    :
                <NavLink onClick = {selectedBankHandler} to = '/bank/services' className = 'bank__settings'>
                    <IoArrowBackSharp className = 'bank__settings-icon' />
                </NavLink>
            }
            <h2 className = 'bank__name'>{bankInfo.bankName}</h2>
            <ul className = 'bank-indicators'>
                {
                    mainBankIndicators.map(indicator => {
                        return (
                            <li className = 'bank-indicators__item'>
                                <div className='bank-indicators__name-wrapper'>
                                    <GoLightBulb className = 'bank-indicators__icon' />
                                <div className = 'bank-indicators__name'>{indicator.name}</div>
                                </div>
                                <div className = 'bank-indicators__value'>{`${bankInfo.indicators[indicator.key]} ${indicator.units}`} </div>
                            </li>
                        )
                    })
                }
            </ul>
            {
                isAdmin &&
                <button onClick = {deleteBankHandler(bankInfo._id)} className = 'bank__delete-btn'>
                    <BsTrash className = 'bank__delete-icon' />
                </button>
            }
        </article>
    )
}
