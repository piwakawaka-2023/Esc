import { ChangeEvent, FormEvent, useState } from 'react'
import * as actions from '../actions/user'
import { useAppDispatch } from '../hooks/hooks'
import { User } from '../../models/users'

function StartGameForm() {
  const dispatch = useAppDispatch()
  const [formData, setFormData] = useState({} as User)

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    //set form data
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      currentLevelId: 0,
      time: 0,
      complete: false,
      activePlayer: true,
    })
  }

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    dispatch(actions.addUserThunk(formData))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="start-game-form-container">
          <label htmlFor="username" className="username-form-field">
            ...enter name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <input
          className="start-button"
          type="submit"
          id="submit"
          value="Save"
        />

      </form>
    </>
  )
}

export default StartGameForm
