import request from 'superagent'

export async function getSingleQuestion(id: number) {
  const res = await request.get(`/api/v1/questions/${id}`)
  return res.body
}
