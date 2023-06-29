import request from 'superagent'

export async function completeGame(id: number) {
  console.log(id)
  return request.patch(`/api/v1/users/${id}`)
}
