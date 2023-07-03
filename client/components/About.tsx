import { Link } from 'react-router-dom'

function About() {
  const people = [
    { name: 'Gemma', image: '/images/vape-pink.webp' },
    { name: 'Jesse', image: '/images/vape-pink.webp' },
    { name: 'Gaby', image: '/images/vape-pink.webp' },
    { name: 'Lauren', image: '/images/vape-pink.webp' },
    { name: 'Tayla', image: '/images/vape-pink.webp' },
  ]

  return (
    <>
      <div className="grey-background">
        <div className="screen">
          <h1>The Escape Creators</h1>
          <div className="creator-container">
            {people.map((person) => {
              return (
                <div key={person.name} className="creator-card">
                  <img
                    className="creator-image"
                    src={person.image}
                    alt={person.name}
                  />
                  <h2>{person.name}</h2>
                </div>
              )
            })}
          </div>
          <Link to="/">
            <button className="blue-button blue-button-sml">
              Back to home
            </button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default About
