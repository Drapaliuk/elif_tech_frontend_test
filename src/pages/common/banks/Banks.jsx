import React from 'react'
import { useSelector } from 'react-redux'
import { MyBanks } from '../../bank/my_banks/MyBanks';
import { AvailableBanks } from '../../user/available_banks/AvailableBanks';

export function Banks() {
    const userRole = useSelector(state => state.authorization.authorizationRole )
    const isAdmin = userRole === 'admin';
    if(isAdmin) {
        return <MyBanks {...{userRole}} />
    }

    return <AvailableBanks {...{userRole}} />
}