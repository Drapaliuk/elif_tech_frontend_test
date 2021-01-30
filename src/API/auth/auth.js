import {instance} from '../configs/instance';

export const authAPI = {
    login: (authData) => {
        return instance.post('/auth/login', authData)
    },
    
    registration: (authData) => {
        return instance.post('/auth/registration', authData)
    },
    
    logout: token => {
        return instance.delete('/auth/logout', {headers: {Authorization: token}})
    },
}
