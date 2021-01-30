import { IS_FETCHING_CHECK_AUTH, IS_AUTHORIZATION, SET_AUTH_ERROR, LOG_OUT, SET_AUTH_ROLE, APP_AUTHORIZATION } from '../../actions_types';

const initialState = {
    isAuthorization: false,
    error: '',
    userRole: '',
    authorizationRole: ''
}

export const authorization = (prevState = initialState, action) => {
    switch(action.type) {
        case APP_AUTHORIZATION:
            console.log(action.payload)
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