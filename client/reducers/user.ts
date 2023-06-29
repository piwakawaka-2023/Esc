import { UserAction, FINISH_GAME, ADD_USER } from '../actions/user'

import { User } from '../../models/users'

const initialState = [] as User[]

export default function userReducer(state = initialState, action: UserAction) {
  const { type, payload } = action
  switch (type) {
    case FINISH_GAME:
      return payload
    case ADD_USER:
      return [payload, ...state]
    default:
      return state
  }
}
