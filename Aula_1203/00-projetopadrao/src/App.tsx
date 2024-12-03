import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let countB = 0;

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div className="card">
      <button onClick={handleClick} > + </button>
      <p>A contagem atual é {count} </p>
      <button onClick={ () => setCount(count-1) } > - </button>
    </div>
  )
}

export default App
