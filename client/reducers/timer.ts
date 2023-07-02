import { TOGGLE_TIMER, UserAction } from '../actions/user'

const initialState = false

export default function timerReducer(
  state = initialState,
  action: UserAction
): boolean {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_TIMER:
      return payload
    default:
      return state
  }
}

//use reducer to set initial state of timer and set increment size for set interval
//and reset to initial state if timer stops
