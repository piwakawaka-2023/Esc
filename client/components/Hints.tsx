import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch } from '../hooks/hooks'
import { getSingleHint } from '../apis/hints'
import { getSingleHintThunk } from '../actions/hints'

export function Hints() {
  const { userId } = useParams()
  const [hintsButton, setHintsButton] = useState(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getSingleHintThunk(Number(userId)))
  })

  const handleClick = () => {
    setHintsButton(true)
    if (hintsButton === true) return setHintsButton(false)
  }
  return (
    <>
      <div>
        <p onClick={handleClick}>Hint</p>
        {hintsButton && <p>{hints?.text}</p>}
      </div>
    </>
  )
}

export default Hints
