import { bankAPI } from "../../../API/bank/bank";

export const createBank = bankInfo => async dispatch => { 
    const { bank } = (await bankAPI.create(bankInfo)).data;
    dispatch({type: CREATE_BANK, payload: {bank}})
    
}

export const deleteBank = bankId => async dispatch => {
    const { deletedBankId } = (await bankAPI.delete(bankId)).data;
    return dispatch({type: DELETE_BANK, payload: deletedBankId})
}

export const updateBank = (selectedBankId, newValue) => async dispatch => {
    const { bankId, updatedValue } = (await bankAPI.update(selectedBankId, newValue)).data;
    return dispatch({type: UPDATE_TASKS_LIST, payload: {bankId, updatedValue}})
}

export const getAvailableBanks = (listId, newValue) => async dispatch => {
    const {data: payload} = (await bankAPI.getAvailableBanks(listId, newValue));
    return dispatch({type: UPDATE_TASKS_LIST, payload})
}

export const getMyBanks = (listId, newValue) => async dispatch => {
    const {data: payload} = (await bankAPI.getMyBanks(listId, newValue));
    return dispatch({type: UPDATE_TASKS_LIST, payload})
}