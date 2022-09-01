import './Switch.css'

function Switch({ value }) {
  return (
    <span className={'switch ' + (value ? 'on' : 'off')} />
  )
}

export default Switch
