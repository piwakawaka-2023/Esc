import { START_TIMER, STOP_TIMER, TICK } from '../actions/user'

const initialState = {
  isOn: false as boolean,
  time: 0 as number,
}

export default function useReducer(state = initialState, action) {
  switch (action.type) {
    case START_TIMER:
      return {
        ...state,
        isOn: true,
        time: 0,
        offset: action.offset,
        interval: action.interval,
      }
    case STOP_TIMER:
      return {
        ...initialState,
        time: state.time,
      }
    case TICK:
      return {
        ...state,
        time: state.time + (action.time - state.offset),
        offset: action.time,
      }

    default:
      return state
  }
}

//use reducer to set initial state of timer and set increment size for set interval
//and reset to initial state if timer stops
