import { IS_FETCHING_CHECK_AUTH, IS_AUTHORIZATION, SET_AUTH_ERROR, LOG_OUT, SET_AUTH_ROLE, APP_AUTHORIZATION, AUTH_FETCH_STATUS } from '../../actions_types';

const initialState = {
    isAuthorization: false,
    error: '',
    userRole: '',
    authorizationRole: '',
    fetchStatus: 'idle'
}

export const authorization = (prevState = initialState, action) => {
    switch(action.type) {
        case AUTH_FETCH_STATUS:
            return {
                ...prevState,
                fetchStatus: action.payload.status
            }
        case APP_AUTHORIZATION:
            return {
                ...prevState, 
                isAuthorization: action.payload.isAuthorization,
                error: action.payload.error,
                userRole: action.payload.role
            }

        case IS_AUTHORIZATION: 
            return {
                ...prevState,
                isAuthorization: action.payload
            }
        
        case SET_AUTH_ERROR: 
            return {
                ...prevState,
                error: action.payload,
            }
            
        case LOG_OUT:
            return {
                isAuthorization: false,
                error: ''
            }
        case SET_AUTH_ROLE: 
            return {
                ...prevState,
                authorizationRole: action.payload.role
            }
        
        default: return prevState
    }
}