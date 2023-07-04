import { ParallaxLayer } from '@react-spring/parallax'

interface Props {
  lift: string
  levelNum: number
}

export default function Lift({ lift, levelNum }: Props) {
  return (
    <ParallaxLayer
      sticky={{ start: 0.1, end: 6.9 }}
      style={{ textAlign: 'left', margin: '50px', width: '20%' }}
    >
      <div id="lift">
        <div id="lift-number">
          <p style={{ textAlign: 'center' }}> LEVEL {levelNum}</p>
        </div>
      </div>
      <img style={{ width: '100%' }} src={lift} alt="lift" />
    </ParallaxLayer>
  )
}
