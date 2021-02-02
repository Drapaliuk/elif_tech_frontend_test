import React from 'react';
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io';
import classNames from 'classnames';


export function CalculationSettings(props) {
    const {setSubtractDownPayment, setRoundCalculatedNumbers, subtractDownPayment, roundCalculatedNumbers} = props;
    const [isOpenDropMenu, setOpenDropMenu] = React.useState(false);
    const changeSubtractDownPaymentStatus = e => setSubtractDownPayment(e.target.checked)
    const changeRoundCalculatedNumbersStatus = e => setRoundCalculatedNumbers(e.target.checked)
    const openDropMenu = () => setOpenDropMenu(!isOpenDropMenu)

    return (
        <div className='mortgage-calculation-settings'>
            <button onClick = {openDropMenu} 
                    className = {classNames('mortgage-calculation-settings__drop-button', 
                                           {'mortgage-calculation-settings__drop-button_opened': isOpenDropMenu})} >
                Settings
                {isOpenDropMenu ? <IoIosArrowUp className = 'mortgage-calculation-settings__icon' />
                                : <IoIosArrowDown className = 'mortgage-calculation-settings__icon' />}
            </button>
            {isOpenDropMenu &&
            <>
                <div className = 'mortgage-calculation-settings__item'>
                    <input checked = {subtractDownPayment} className = 'mortgage-calculation-settings__input' onChange = {changeSubtractDownPaymentStatus} id = 'subtract-down-payment' type="checkbox"></input>
                    <label className = 'mortgage-calculation-settings__label' for="subtract-down-payment">Subtract down payment from inputed loan sum?</label>
                </div>
                <div className="mortgage-calculation-settings__item">
                    <input checked = {roundCalculatedNumbers} onChange = {changeRoundCalculatedNumbersStatus} className = 'mortgage-calculation-settings__input' type = 'checkbox' id = 'round-number-input'/>
                    <label className = 'mortgage-calculation-settings__label' className = ''>Round numbers?</label>
                </div>
            </>}
        </div>
    )
}