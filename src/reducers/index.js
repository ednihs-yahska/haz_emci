import home from './homeReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    home,
    form: formReducer
});

export default reducers