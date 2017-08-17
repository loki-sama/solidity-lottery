import { combineReducers } from 'redux'
import web3Reducer from './web3reducers'
import { routerReducer } from 'react-router-redux'
import lotteryReducer from './lotteryreducers'
export default combineReducers({
    web3State: web3Reducer,
    routing: routerReducer,
    lotteryState: lotteryReducer
})