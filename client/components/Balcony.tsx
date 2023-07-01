import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function Basement() {
  const { userId } = useParams()

  useEffect(() => {
    // Run JavaScript script on this comp
    const script = document.createElement('script')
    script.src = '/scripts/flashlight.js'
    script.async = true
    document.body.appendChild(script)

    // Attach CSS to this comp
    const link = document.createElement('link')
    link.href = '/styles/balcony.css'
    link.rel = 'stylesheet'
    link.type = 'text/css'
    document.head.appendChild(link)

    // Clean upon component unmount
    return () => {
      document.body.removeChild(script)
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      <div>
        <Link to={`/game/${userId}/scene/3`}>
          <button
            style={{ position: 'fixed', bottom: '0' }}
            className="blue-button"
          >
            Exit
          </button>
        </Link>
      </div>
    </>
  )
}
