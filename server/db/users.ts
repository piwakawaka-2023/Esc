import { User } from '../../models/users'
import connection from './connection'

const db = connection

export function addUser(user: User) {
  return db('users').insert(user)
}

export function completeGame(user: User)
