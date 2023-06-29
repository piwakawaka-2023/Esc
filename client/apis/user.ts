import request from 'superagent'
import { User } from '../../models/users'

export async function addUser(user: User) {
  const res = await request.post('/api/v1/users').send(user)
  return res.body
}

export async function completeGame(id: number) {
  console.log(id)
  return request.patch(`/api/v1/users/${id}`)
}
