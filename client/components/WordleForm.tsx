import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  userId: string
}

export function WordleForm({ userId }: Props) {
  const [input, setInput] = useState('')
  const [count, setCount] = useState(0)
  const navigate = useNavigate()
  const passcode = 'proxy'

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
    <>
      <div>
        <h2>ENTER PASSCODE</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="my-input">Passcode</label>
          <input id="my-input" type="password" onChange={handleChange}></input>
          <button>Enter</button>
        </form>
      </div>
      <p>Attempts remaining: {2 - count}</p>
    </>
  )
}

export default WordleForm
