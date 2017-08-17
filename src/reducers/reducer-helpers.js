const createReducerFromObj = (obj, initial) => (
    state = initial,
    action
) => (obj[action.type] ? obj[action.type](state, action) : state)

const makeNewSet = (oldSet, dataToAdd) => [
    ...new Set([...oldSet, ...dataToAdd])
]

export { createReducerFromObj, makeNewSet }