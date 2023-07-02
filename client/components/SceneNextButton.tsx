import { Link } from 'react-router-dom'

interface Props {
  curScene: Level
}

interface Level {
  levelId: number
  final: boolean
}

export default function SceneNextButton({ curScene }: Props) {
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
