import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getBanks } from '../../../redux/actions/banks/banks';
import { MyBanks } from '../../bank_admin/my_banks/MyBanks';
import { AvailableBanks } from '../../user/available_banks/AvailableBanks';

export function Banks() {
    const dispatch = useDispatch();
    const banksFetchStatus = useSelector(state => state.banks.fetchStatus);
    const authFetchStatus = useSelector(state => state.authorization.fetchStatus)
    
    React.useEffect(() => {
        if(banksFetchStatus === 'idle' && authFetchStatus === 'loaded') {
            console.log('request')
            dispatch(getBanks())
        }
    }, [])
    
    const banks = useSelector(state => state.banks.banks)
    const userRole = useSelector(state => state.authorization.userRole)
    const isAdmin = userRole === 'admin';

    if(isAdmin) {
        return <MyBanks {...{userRole, banks}} />
    }

    return <AvailableBanks {...{userRole, banks}} />
}