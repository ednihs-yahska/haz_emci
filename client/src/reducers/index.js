import home from './homeReducer'
import dashboard from './dashboardReducer'
import { combineReducers } from 'redux'


const reducers = combineReducers({
    home,
    dashboard
});

export default reducers