import { createStore, combineReducers, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger' 
import allSagas from './sagas/rootSaga';
import reducers from './reducers'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()


const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware, logger)
);

navigator.serviceWorker.addEventListener('message', function(event) {
    console.log('Received a message from service worker: ', event.data);
    store.dispatch({type: "NOTIFICATION_RECIEVED", payload:event.data})
});

// then run the saga
console.log("Running All Sagas")
sagaMiddleware.run(allSagas)

export default store;