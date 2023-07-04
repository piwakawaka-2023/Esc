import { ParallaxLayer } from '@react-spring/parallax'
import eye from '/images/eye.png'


export default function FlyingElements() {
  return (
    <ParallaxLayer
      sticky={{ start: 2.5, end: 2.6 }}
      style={{ textAlign: 'left', width: '10%' }}
    >
      <img style={{ width: '100%', textAlign: 'right' }} src={eye} alt="eye" />
    </ParallaxLayer>
  )
}
