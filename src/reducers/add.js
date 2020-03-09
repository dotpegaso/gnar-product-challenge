const ADD_INSERT_DATA = 'ADD_INSERT_DATA'

const initialState = {
  email: null,
  password: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_INSERT_DATA:
      return { ...state, ...action.data }
    default:
      return state
  }
}
