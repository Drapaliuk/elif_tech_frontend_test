import {instance} from '../configs/instance';

export const authAPI = {
    login: (authData) => {
        return instance.post('/auth/login', authData)
    },
    
    registration: (authData, balance) => {
        return instance.post('/auth/registration', {...authData, balance})
    },
    
    logout: token => {
        return instance.delete('/auth/logout', {headers: {Authorization: token}})
    },

    checkOutAuth: () => instance.post('/auth/check-out-auth'),
}
