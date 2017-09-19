import types from './action-types'
import api from '../api/lottery-api'

const getWinners = () => async dispatch =>
    api.getWinners().then(winners =>
        dispatch({
            type: types.GET_WINNERS,
            payload: winners
        })
    )

export default { getWinners }