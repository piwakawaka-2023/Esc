import { Link, useParams } from 'react-router-dom'
import basement from '/images/basement.png'

export default function Basement() {
  const { userId } = useParams()
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${basement})`,
          textAlign: 'center',
          width: '100%',
          height: '100VH',
          backgroundSize: 'cover',
        }}
      >
        <p>Basement lol</p>

        <Link to={`/game/${userId}/scene/3`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="start-button"
          >
            Exit
          </button>
        </Link>
      </div>
    </>
  )
}
