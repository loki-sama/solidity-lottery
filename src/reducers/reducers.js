import { combineReducers } from 'redux'
import { ADD_CONTRIB } from '../actions/actions'

function contrib(state, action){
    switch (action.type){

        case ADD_CONTRIB:
            return {
                id: action.id,
                text: action.text
            }
        
        default:
            return state
    }

}

function addContrib(state = [], action){
    switch(action.type){
        
        case ADD_CONTRIB:
            return [
                ...state,
                contrib(undefined, action)
            ]

        default:
            return state;
    }
}

const appReducers = combineReducers({
    addContrib
})

export default appReducers;