import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Wordle from './Wordle'

// interface Props {
//   userId: string
// }

export function WordleForm() {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  const [displayGame, setDisplayGame] = useState(false)
  const navigate = useNavigate()
  const passcode = 'proxy'
  const { userId } = useParams()

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (input !== passcode) {
      setCount(count + 1)
      if (count >= 1) {
        return navigate('/gameover')
      } else {
        return window.alert('Try again')
      }
    }
    return navigate(`/game/${userId}/scene/4`)
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value)
  }

  return (
    <div className="grey-background" id="wordle-background">
      <img
        id="wordle-phone"
        src="/images/cellphone.png"
        alt="cellphone"
        onClick={() => setDisplayGame(!displayGame)}
      />
      {displayGame ? (
        <Wordle />
      ) : (
        <div>
          <div>
            <h2>PASSCODE</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="my-input">Passcode</label>
              <input
                id="my-input"
                type="password"
                onChange={handleChange}
              ></input>
              <button>Enter</button>
            </form>
          </div>
          <p>Attempts remaining: {2 - count}</p>
        </div>
      )}
    </div>
  )
}

export default WordleForm

/* if phone clicked more than once worlde wont load again */
/* maybe wordle doesn't change back until its solved??? */
