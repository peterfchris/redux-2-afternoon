import {createStore, combineReducers, applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import budgetReducer from './budgetReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    user: userReducer,
    budget: budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))