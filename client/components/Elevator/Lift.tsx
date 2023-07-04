import { ParallaxLayer } from '@react-spring/parallax'

interface Props {
  lift: string
  levelNum: number
}

export default function Lift({ lift, levelNum }: Props) {
  return (
    <ParallaxLayer
      sticky={{ start: 0.1, end: 6.9 }}
      style={{ textAlign: 'left', width: '25%', height: '90VH' }}
    >
      <div id="lift">
        <img src={lift} alt="lift" />
        <div id="lift-number">
          <p style={{ textAlign: 'center' }}>{levelNum}</p> <p>↓</p>
        </div>
      </div>
    </ParallaxLayer>
  )
}
