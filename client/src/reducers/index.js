//reducers for handling different datas

import { CombinedReducers, combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from './currentUser'
import questionsReducer from './questions.js'
import usersReducer from "./users.js";


export default combineReducers({
    authReducer, currentUserReducer, questionsReducer, usersReducer
})