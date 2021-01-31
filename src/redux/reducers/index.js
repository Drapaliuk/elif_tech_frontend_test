import { combineReducers } from "redux";
import { reducer as formReducer } from 'redux-form';
import { authorization } from "./authorization/authorization_reducer";
import { banks } from './banks/banks';

export const combinedReducers = combineReducers({
    authorization,
    banks,
    form: formReducer
}) 