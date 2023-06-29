import { Link, useParams } from 'react-router-dom'

export default function Basement() {
  const { userId } = useParams()
  return (
    <>
      <p>Basement lol</p>

      <Link to={`/game/${userId}/scene/3`}>
        <button className="start-button">Exit</button>
      </Link>
    </>
  )
}
