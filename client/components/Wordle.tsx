import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Wordle() {
  const { userId } = useParams()

  //Run JS on this comp
  useEffect(() => {
    const script = document.createElement('script')
    script.src = '/scripts/wordle.js'
    script.async = true
    document.body.appendChild(script)

    //Attaching CSS to this comp
    const link = document.createElement('link')
    link.href = 'styles/wordle.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    const link2 = document.createElement('link')
    link2.href =
      'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
    link2.rel = 'stylesheet'
    link2.type = 'text/css'
    document.head.appendChild(link2)

    //clean component when finished being used.
    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
      document.head.removeChild(link2)
    }
  }, [])

  return (
    <>
      <div>
        <Link to={`/game/${userId}/scene/2`}>Exit</Link>
      </div>
    </>
  )
}
