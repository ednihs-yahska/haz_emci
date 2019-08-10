import home from './homeReducer'
import dashboard from './dashboardReducer'
import { combineReducers } from 'redux'
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    home,
    dashboard,
    form: formReducer
});

export default reducers