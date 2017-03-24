import { merge } from 'ramda'

import { SET_FORTUNE, UPDATE } from './types'

const rootReducer = function (state, action) {
  switch (action.type) {
    case UPDATE:
      return merge(state, action.payload)
    case SET_FORTUNE:
      return merge(state, { fortune: action.payload })
    default:
      return state
  }
}

export default rootReducer
