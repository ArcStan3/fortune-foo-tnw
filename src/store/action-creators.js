import { SET_FORTUNE, UPDATE } from './types'
import fetch from 'isomorphic-fetch'
const url = process.env.REACT_APP_URL

const actionCreators = function (dispatch) {
  const dispatchFortune = fortune =>
    dispatch({ type: SET_FORTUNE, payload: fortune.text})

  return {
    update: function (key, value) {
      let payload = {}

      if (key === 'tempAge') {
        payload = { tempAge: value }
      } else if (key === 'tempInitial') {
        payload = { tempInitial: value }
      } else if (key === 'tempColor') {
        payload = { tempColor: value }
      }

      dispatch({type: UPDATE, payload: payload })
      //dispatch({type: UPDATE, payload: {[key]: value }  })

    },
    predict: function (age, initial, color) {
      console.log(age, initial, color)
      if (age === '47', initial === 'T', color === 'Brown') {
        return dispatch({type: SET_FORTUNE, payload: 'It will Tuesday every day for next 20 years......good luck....'})
      }
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log(res)
          return res
        })
        .then(dispatchFortune)
    }
  }
}

export default actionCreators
