import { ADD_TO_FAVORITES } from 'src/constants/actionTypes'

const initialState = {
  places: [],
}

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORITES: {
      let isExist = false
      const places = state.places.filter(el => {
        if (el.id === payload.id) isExist = true
        return !isExist
      }) || []

      return {
        ...state,
        places: isExist ? places : state.places.concat(payload)
      }
    }
    default:
      return state
  }
}