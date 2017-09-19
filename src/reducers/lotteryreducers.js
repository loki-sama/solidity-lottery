import types from '../actions/action-types'
import { createReducerFromObj, makeNewSet } from './reducer-helpers'
import { combineReducers } from 'redux'
const { GET_WINNERS } = types
const byIdObj = {
    [GET_WINNERS]: (state, { payload: { winners } }) => ({
        ...state,
        ...winners.reduce((obj, winner) => ({ ...obj, winner}))
    })
}

const idsObj = {
    [GET_WINNERS]: (state, { payload: { winners } }) =>
        makeNewSet(state, winners.map(({ winner }) => winner))
}

const byId = createReducerFromObj(byIdObj, {})
const ids = createReducerFromObj(idsObj, [])
export default combineReducers({ ids, byId })