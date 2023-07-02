import request from 'superagent'

export async function getQuestions() {
  const res = await request.get('/api/v1/questions')
  return res.body
}
