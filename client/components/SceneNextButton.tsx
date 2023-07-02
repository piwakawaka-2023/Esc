import { Link } from 'react-router-dom'
import { toggleTimer } from '../actions/user'
import { useAppDispatch } from '../hooks/hooks'
import { useEffect } from 'react'

interface Props {
  curScene: Level
}

interface Level {
  levelId: number
  final: boolean
}

export default function SceneNextButton({ curScene }: Props) {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (curScene?.final) {
      dispatch(toggleTimer(false))
    }
  })

  return (
    <>
      {curScene?.final ? (
        <Link to={`/complete`}>
          <button className="blue-button">Next</button>
        </Link>
      ) : (
        <Link to={`level/${curScene?.levelId}`}>
          <button className="blue-button">Next</button>
        </Link>
      )}
    </>
  )
}
