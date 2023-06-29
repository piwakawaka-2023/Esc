import request from 'superagent'

export async function completeGame(id: number) {
  return request.patch(`/api/v1/users/${id}`)
}
