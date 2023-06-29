import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { Link } from 'react-router-dom'

//IMAGES//

import codeBg from '../../public/images/code-bg.jpeg'
import lift from '../../public/images/lift.jpeg'

export default function Elevator() {
  return (
    <>
      <div className="elevator-shaft">
        <Parallax pages={6}>
          <ParallaxLayer
            offset={0}
            speed={1}
            style={{
              backgroundImage: `url(${codeBg})`,
              backgroundSize: 'cover',
            }}
            factor={2}
          ></ParallaxLayer>
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{
              backgroundImage: `url(${codeBg})`,
              backgroundSize: 'cover',
            }}
            factor={2}
          ></ParallaxLayer>
          <ParallaxLayer
            sticky={{ start: 0.5, end: 5.5 }}
            style={{ textAlign: 'left' }}
          >
            <img style={{ width: '20%' }} src={lift} alt="lift" />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={1} style={{ textAlign: 'center' }}>
            <Link to="./">
              <button>Next</button>
            </Link>
          </ParallaxLayer>
          {/* this link goes to scene 2? */}
        </Parallax>
      </div>
    </>
  )
}
