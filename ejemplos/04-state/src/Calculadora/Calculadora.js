import { useState } from 'react'

function Calculadora() {
  const [value, setValue] = useState('')

  const handle0 = () => setValue(value + '0')
  const handle1 = () => setValue(value + '1')
  const handle2 = () => setValue(value + '2')

  return (
    <div>
      {value}
      <button onClick={handle0}>0</button>
      <button onClick={handle1}>1</button>
      <button onClick={handle2}>2</button>

    </div>
  )
}

export function Calculadora2() {
  const [value, setValue] = useState('')

  const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

  return (
    <div>
      {value}
      {buttons.map(v =>
        <button key={v} onClick={() => setValue(value + v)}>
          {v}
        </button>
      )}

    </div>
  )
}

export default Calculadora
