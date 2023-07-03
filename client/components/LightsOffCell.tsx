interface Props {
  cellIndex: string
  isOn: boolean
  toggleLight: any
}

export default function Cell(props: Props) {
  const { cellIndex, isOn, toggleLight } = props

  function handleToggleLight() {
    toggleLight(cellIndex)
  }

  return (
    <button
      className={isOn ? 'Cell-on' : 'Cell-off'}
      onClick={handleToggleLight}
    ></button>
  )
}
