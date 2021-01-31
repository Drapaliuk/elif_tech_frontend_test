import produce from 'immer';
import { CREATE_BANK, DELETE_BANK, BANK_FETCH_STATUS, UPDATE_BANK, GET_BANKS, GET_MY_BANKS, SELECTED_BANK } from '../../actions_types';

const initialState = {
    banks: [],
    myCreatedBanksIds: [],
    banksServiceProvidersToUser: [],
    fetchStatus: 'idle',
    selectedBankId: '',

}

// {
//     status: 'idle' | 'loading' | 'succeeded' | 'failed',
//     error: string | null
//   }

export const banks = (prevState = initialState, action) => {
    switch(action.type) {
        case BANK_FETCH_STATUS: {
            return {
                ...prevState,
                fetchStatus: action.payload.status
            }
        }
        
        case SELECTED_BANK:
            return {
                ...prevState,
                selectedBankId: action.payload.id
            }

        case CREATE_BANK:
            return {
                ...prevState,
                banks: [action.payload.createdBank, ...prevState.banks],
                myCreatedBanksIds: [...prevState.myCreatedBanksIds, action.payload.createdBank._id]
            }

        case DELETE_BANK: 
            return produce(prevState, draftState => {
                const deletedBankIdx = draftState.banks.findIndex(bank => bank._id === action.payload.deletedBankId)
                draftState.banks.splice(deletedBankIdx, 1)
            })
        
        case UPDATE_BANK: 
            return produce(prevState, draftState => {
                const updatedBankIdx = draftState.banks.findIndex(bank => bank._id === action.payload.bankId)
                draftState.banks[updatedBankIdx].indicators = action.payload.updatedIndicators
            })
            
        case GET_BANKS:
            console.log(action.payload)
            return {
                ...prevState,
                banks: [...prevState.banks, ...action.payload.allBanks]

            }
        case GET_MY_BANKS: 
            return {
                ...prevState,
            }
        
        default: return prevState
    }
}