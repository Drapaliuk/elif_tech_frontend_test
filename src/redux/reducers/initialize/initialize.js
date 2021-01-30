const { APP_INITIALIZE } = require("../../actions_types");

const initState = {
    isInitialized: false,
    role: '',
}

export const initialize = (prevState = initState, action) => {
    switch (action.type) {
        case APP_INITIALIZE:
            if(!action.payload.isInitialized) return {...prevState}
            return {
                ...prevState,
                isAuthorization: action.payload.isAuthorization,
                role: action.payload.role
            }            
    
        default:
            return prevState
    }
}