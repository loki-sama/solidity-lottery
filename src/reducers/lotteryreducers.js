import types from '../actions/action-types'
import { createReducerFromobj } from './reducer-helpers'
const { UNIQUE_PLAYERS, TOTAL_WINNINGS } = types
const initialState = {
    uniquePlayers: { players: 0},
    totalWinnings: { winnings: 0}
}

//Get values from the blockchain... does this need to be done here?
const lotteryObj = {
    [UNIQUE_PLAYERS]: state => ({ ...state, uniquePlayers: { players: 2 } }),
    [TOTAL_WINNINGS]: state => ({ ...state, totalWinnings: { winnings: 5 } })
}

export default createReducerFromobj(lotteryObj, initialState)