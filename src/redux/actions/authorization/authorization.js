import { authAPI } from "../../../API"
import { updateDefaultRequestHeaders } from "../../../API/configs/instance";
import { localStorageManipulator } from "../../../tools";
import { SET_AUTH_ERROR, LOG_OUT, SET_AUTH_ROLE, APP_AUTHORIZATION, AUTH_FETCH_STATUS } from '../../actions_types';

const authReset = () => ({type: LOG_OUT})
export const setRoleForAuthorization = role => ({type: SET_AUTH_ROLE, payload: {role}})
export const setAuthError = payload => ({type: SET_AUTH_ERROR, payload})
const fetchStatus = status => ({type: AUTH_FETCH_STATUS, payload: {status}})

export const authorization = (authData, authorizationAction) => async dispatch => {
    try {
        let responseData;
        if(authorizationAction === 'registration') {
            responseData = (await authAPI.registration(authData)).data;
        }
        if(authorizationAction === 'login') {
            responseData = (await authAPI.login(authData)).data;
        }


        var {token, refreshToken, role} = responseData;
        localStorageManipulator.saveTokens(token, refreshToken)
        updateDefaultRequestHeaders(token, refreshToken);
        dispatch({type: APP_AUTHORIZATION, payload: {role, error: '', isAuthorization: true}});


    } catch ({response}) {
        dispatch({type: APP_AUTHORIZATION, payload: {role, error: response.data.error, isAuthorization: false}});
    } 
}

export const logOut = () => {
    localStorageManipulator.deleteTokens()
    return {type: LOG_OUT}
}

export const checkOutAuth = () => async dispatch => {
    try {
        dispatch(fetchStatus('loading'))
        var response = await authAPI.checkOutAuth();
        const {shouldUpdateTokens, payload} = response.data;

        if(shouldUpdateTokens) {
            const {newToken, newRefreshToken} = shouldUpdateTokens
            localStorageManipulator.saveTokens(newToken, newRefreshToken)
            updateDefaultRequestHeaders(newToken, newRefreshToken)
        }

        var { role } = payload

        dispatch({type: APP_AUTHORIZATION, payload: {role, error: '', isAuthorization: true}});
        dispatch(fetchStatus('loaded'))

    } catch (error) {
        dispatch({type: APP_AUTHORIZATION, payload: {role, error: '', isAuthorization: false}});
    }
}