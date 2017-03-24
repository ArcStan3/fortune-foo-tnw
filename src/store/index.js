import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'

import thunk from 'redux-thunk'
import rootReducer from './root-reducer'
import actionCreators from './action-creators'

import { identity } from 'ramda'

const store = createStore(rootReducer, applyMiddleware(thunk))

// this is a shortcut to return the whole state
// for our connectors
const connector = connect(identity, actionCreators)

export {store, connector}
