import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authorization } from "./authorization/authorization_reducer";
import { initialize } from './initialize/initialize';

export const combinedReducers = combineReducers({
    authorization,
    initialize, 
    form: formReducer
}) 