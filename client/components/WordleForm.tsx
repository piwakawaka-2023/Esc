import { FormEvent, useState, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'

export function wordleForm() {
  const [input, setInput] = useState('')
  const navigate = useNavigate()
  const passcode = 'proxy'

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    if (input !== passcode) {
      return window.alert('try again')
    }
    return navigate('/complete')
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
    </>
  )
}

export default wordleForm
