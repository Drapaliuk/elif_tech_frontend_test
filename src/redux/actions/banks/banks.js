import { bankAPI } from "../../../API/bank/bank";
import { CREATE_BANK, DELETE_BANK, UPDATE_BANK, GET_BANKS, GET_MY_BANKS, SELECTED_BANK } from '../../../redux/actions_types';

// export const fetchStatus = status => ({type: BANK_FETCH_STATUS, payload: {status}})
export const createBank = infoAboutNewBank => async dispatch => { 
    const { createdBank } = (await bankAPI.create(infoAboutNewBank)).data;
    dispatch({type: CREATE_BANK, payload: {createdBank}})
}

export const deleteBank = bankId => async dispatch => {
    const { deletedBankId } = (await bankAPI.delete(bankId)).data;
    console.log('deleted', deletedBankId)

    return dispatch({type: DELETE_BANK, payload: {deletedBankId}})
}

export const updateBank = (selectedBankId, newValue) => async dispatch => {
    const { bankId, updatedIndicators } = (await bankAPI.update(selectedBankId, newValue)).data;
    return dispatch({type: UPDATE_BANK, payload: {bankId, updatedIndicators}})
}



export const getBanks = () => async dispatch => {
    const {allBanks} = (await bankAPI.getBanks()).data;
    dispatch({type: GET_BANKS, payload: {allBanks}})



}

export const getMyBanks = (listId, newValue) => async dispatch => {
    const {data: payload} = (await bankAPI.getMyBanks(listId, newValue));
    return dispatch({type: GET_MY_BANKS, payload})
}

export const selectBank = id => ({type: SELECTED_BANK, payload: {id}})