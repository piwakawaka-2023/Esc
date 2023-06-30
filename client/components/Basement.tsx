import { Link, useParams } from 'react-router-dom'
import slackUrl from '/sounds/wow.mp3'
import { useSound } from 'use-sound'
import basement from '/images/basement.png'


export default function Basement() {
  const { userId } = useParams()
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlayFx = () => {
    play()
  }

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
            onClick={() => handlePlayFx()}
          >
            Exit
          </button>
        </Link>
      </div>
    </>
  )
}
