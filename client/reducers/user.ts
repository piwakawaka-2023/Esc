import { UserAction, FINISH_GAME } from '../actions/user'

import { User } from '../../models/users'

const initialState = [] as User[]

export default function userReducer(state = initialState, action: UserAction) {
  const { type, payload } = action
  switch (type) {
    case FINISH_GAME:
      return payload
    default:
      return state
  }
}
