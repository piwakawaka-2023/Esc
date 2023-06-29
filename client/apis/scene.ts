import request from "superagent"
import { Scene } from "../../models/scenes"

const sceneUrl = 'ap1/v1/scenes/:id'
// GET Route 

export async function fetchScene(id: number): Promise<Scene> {
  const res = await request.get(`${sceneUrl}/${id}`)
  return res.body
}