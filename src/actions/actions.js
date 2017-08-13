export const ADD_CONTRIB = 'ADD_CONTRIB'
export const GET_PLAYERS = 'GET_PLAYERS'
export const GET_WINNINGS = 'GET_WINNINGS'

let contribId = 0;
export function addContributor(text){
    return {
        type: ADD_CONTRIB,
        id: contribId++,
        text
    };
}
