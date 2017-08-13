import types from '../actions/action-types'
import { createReducerFromObj } from './reducer-helpers'
const { WEB3_CONNECTED, LOTTERY_DEPLOYED } = types
const initialState = {
    web3: { connected: false },
    lottery: { deployed: false }
}

const web3Obj = {
    [WEB3_CONNECTED]: state => ({ ...state, web3: {connected: true} }),
    [LOTTERY_DEPLOYED]: state => ({
        ...state,
        lottery: { deployed: true }
    })
}

export default createReducerFromObj(web3Obj, initialState)