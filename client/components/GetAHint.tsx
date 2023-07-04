import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import * as actions from '../actions/hints'
import { Hints } from '../../models/hints'
import slackbot from '/images/slackbot.png'

interface Props {
  level_id: number
}

export function Hintss(props: Props) {
  const id = props.level_id

  const [hintsButton, setHintsButton] = useState(false)
  const dispatch = useAppDispatch()

  const today = new Date()
  const time = today.getHours() + ':' + today.getMinutes()

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
      <button
        className="blue-button blue-button-sml"
        id="red-btn"
        onClick={handleClick}
      >
        Hint
      </button>
      {hintsButton && (
        <div id="hint-container">
          <div id="slackbot-container">
            <img id="sml-slackbot" src={slackbot} alt="slackbot emoji" />
          </div>
          <div id="slackbot-hint">
            <p>
              <b>Slackbot-Piwakawaka-23 </b>
              {time}
            </p>
            <p>{hint[0].text}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Hintss
