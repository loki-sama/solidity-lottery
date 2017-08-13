const createReducerFromObj = (obj, initial) => (
    state = initial,
    action
) => (obj[action.type] ? obj[action.type](state, action) : state)

export { createReducerFromObj }