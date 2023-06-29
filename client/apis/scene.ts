import request from 'superagent'
import { Scene } from '../../models/scenes'

const sceneUrl = '/api/v1/scenes'
// GET Route

export async function fetchAllScenes(): Promise<Scene> {
  const res = await request.get(sceneUrl)
  return res.body
}

export async function fetchScene(id: number): Promise<Scene> {
  const res = await request.get(`${sceneUrl}/${id}`)
  console.log('api', res.body, id)
  return res.body
}
