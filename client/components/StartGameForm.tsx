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
      <form>
        <div id="start-game-form-container">
          <label htmlFor="username" className="username-form-field">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleInput}
            className="input-field"
          />
          <button onSubmit={handleSubmit} className="start-button">
            Start Game
          </button>
        </div>
      </form>
    </>
  )
}

export default StartGameForm
