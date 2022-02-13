import { useState } from 'react'

export function Counter() {
  const [counter, setCounter] = useState(0) // o useState retorna um array com dois valores

  /*
    counter[0] primeiro valor do use
    counter[1] segundo valor do use
  */

  function increment() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  )
}
