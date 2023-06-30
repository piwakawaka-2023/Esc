import { Link, useParams } from 'react-router-dom'
import slackUrl from '/sounds/wow.mp3'
import { useSound } from 'use-sound'

export default function Basement() {
  const { userId } = useParams()
  const [play] = useSound(slackUrl, { volume: 0.5 })

  const handlePlayFx = () => {
    play()
  }

  return (
    <>
      <p>Basement lol</p>

      <Link to={`/game/${userId}/scene/3`}>
        <button className="start-button" onClick={() => handlePlayFx()}>
          Exit
        </button>
      </Link>
    </>
  )
}
