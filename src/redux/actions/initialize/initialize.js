import { updateDefaultRequestHeaders } from "../../../API/configs/instance";
import { APP_INITIALIZE, APP_AUTHORIZATION } from "../../actions_types"

export const initializeApp = () => async dispatch => {
    dispatch(fetchingInitData(true))
    try {
        var response = await initializeAPI.initialize();
        const {shouldUpdateTokens, payload} = response.data;

        if(shouldUpdateTokens) {
            const {newToken, newRefreshToken} = shouldUpdateTokens
            localStorageManipulator.saveTokens(newToken, newRefreshToken)
            updateDefaultRequestHeaders(newToken, newRefreshToken)
        }

        const {role} = payload;

        dispatch({type: APP_AUTHORIZATION, payload: {role, error: '', isAuthorization: true}});

    } catch (error) {
        dispatch({type: APP_AUTHORIZATION, payload: {role, error, isAuthorization: true}});
    } finally {
        dispatch(fetchingInitData(false));
    }
}
// export const initializeApp = payload => ({type: APP_INITIALIZE, payload})