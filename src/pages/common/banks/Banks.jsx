import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanks } from '../../../redux/actions/banks/banks';
import { MyBanks } from '../../bank_admin/my_banks/MyBanks';
import { AvailableBanks } from '../../user/available_banks/AvailableBanks';

export function Banks() {
    const dispatch = useDispatch();
    const banks = useSelector(state => state.banks.banks)
    React.useEffect(() => {
        dispatch(getBanks())
    }, [])
    const userRole = useSelector(state => state.authorization.userRole)
    const isAdmin = userRole === 'admin';

    if(isAdmin) {
        return <MyBanks {...{userRole, banks}} />
    }

    return <AvailableBanks {...{userRole, banks}} />
}