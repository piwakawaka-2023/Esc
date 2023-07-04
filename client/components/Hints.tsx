import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/hints'
import { Hints } from '../../models/hints'

export function Hintss() {
  const { userId } = useParams()
  const [hintsButton, setHintsButton] = useState(false)
  const dispatch = useAppDispatch()

  const id = 1

  useEffect(() => {
    dispatch(actions.getSingleHintThunk(id))
  }, [dispatch, id])

  const hint = useAppSelector((state) => state.hints) as Hints[]

  const handleClick = () => {
    setHintsButton(true)
    if (hintsButton === true) return setHintsButton(false)
  }
  return (
    <>
      <div>
        <p onClick={handleClick}>Hint</p>
        {hintsButton && <p>{hint[0].text}</p>}
      </div>
    </>
  )
}

export default Hintss
