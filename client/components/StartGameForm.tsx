import { ChangeEvent, FormEvent, useState } from 'react'

function StartGameForm() {
  const [formData, setFormData] = useState()

  const handleInput = (evt: ChangeEvent<HTMLInputElement>) => {
    //set form data
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    //submit form to thunk here
  }

  return (
    <>
      <div>
        <form>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInput}
          />
          <button onSubmit={handleSubmit}>Start Game</button>
        </form>
      </div>
    </>
  )
}

export default StartGameForm
