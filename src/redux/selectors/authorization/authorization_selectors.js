export const getAuthData = (state) => {
    return {
        login: state.form.auth?.values?.login,
        password: state.form.auth?.values?.password,
        authorizationRole: state.authorization.authorizationRole
    }
}

export const getAuthStatus = state => state.authorization.isAuthorization
export const getFetchingCheckAuthStatus = state => state.authorization.isFetchingCheckAuth
export const getAuthError = state => state.authorization.error;
