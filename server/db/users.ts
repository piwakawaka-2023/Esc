import { User } from '../../models/users'
import connection from './connection'

const db = connection

export function addUser(user: User) {
  return db('users').insert(user)
}

export function completeGame(id: number) {
  return db('users').select().where('id', id).first().update({
    complete: true,
    active_player: false,
  })
}
