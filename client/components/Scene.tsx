import { useNavigate, useParams } from 'react-router-dom'
import { Scene } from '../../models/scenes'
import * as actions from '../actions/scene'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { useEffect } from 'react'

export function getScene() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(actions.getScene(Number(id)))
  }, [dispatch, id])

  const [scene] = useAppSelector((state) => state.scene) as Scene[]

  return (
    <>
      <div className="scene-card">
        <div className="scene-card-content">
          <p>{scene.text}</p>
        </div>
        <input 
        type="navigate to next"
        onChange={() => navigate('/game')}>
        </input>
      </div>
    </>
  )
}
