export const ADD_CONTRIB = 'ADD_CONTRIB'
let contribId = 0;
export function addContributor(text){
    return {
        type: ADD_CONTRIB,
        id: contribId++,
        text
    };
}