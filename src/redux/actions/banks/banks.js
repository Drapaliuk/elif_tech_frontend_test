import { bankAPI } from "../../../API";
import { CREATE_BANK, DELETE_BANK, UPDATE_BANK, GET_BANKS, GET_MY_BANKS, SELECTED_BANK, BANK_FETCH_STATUS, UPDATE_USER_BALANCE } from '../../../redux/actions_types';

const fetchStatus = status => ({type: BANK_FETCH_STATUS, payload: {status}});


export const updateBank = (selectedBankId, newValue) => async dispatch => {
    const { bankId, updatedIndicators } = (await bankAPI.update(selectedBankId, newValue)).data;
    return dispatch({type: UPDATE_BANK, payload: {bankId, updatedIndicators}})
};

export const getBanks = () => async dispatch => {
    dispatch(fetchStatus('loading'))
    const {allBanks, personalBanks} = (await bankAPI.getBanks()).data;
    dispatch({type: GET_BANKS, payload: {allBanks, personalBanks}})
    dispatch(fetchStatus('loaded'))
};

export const getMyBanks = (listId, newValue) => async dispatch => {
    const {data: payload} = (await bankAPI.getMyBanks(listId, newValue));
    return dispatch({type: GET_MY_BANKS, payload})
};

export const selectBank = id => ({type: SELECTED_BANK, payload: {id}});
export const createBank = infoAboutNewBank => async dispatch => { 
    const { createdBank } = (await bankAPI.create(infoAboutNewBank)).data;
    dispatch({type: CREATE_BANK, payload: {createdBank}})
};

export const deleteBank = bankId => async dispatch => {
    const { deletedBankId } = (await bankAPI.delete(bankId)).data;

    return dispatch({type: DELETE_BANK, payload: {deletedBankId}})
};

export const updateBalance = newBalance => async dispatch => {
    const {updatedBalance} = (await bankAPI.updateBalance(newBalance)).data;
    return dispatch({type: UPDATE_USER_BALANCE, payload: {updatedBalance}})
}