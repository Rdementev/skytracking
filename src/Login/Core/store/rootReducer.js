import authUser from "../reducer/authUser";
import {combineReducers} from "redux";


const createReducer = asyncReducer =>
    combineReducers({
        authUser,
        ...asyncReducer
    })

export default createReducer
