import { useState, useReducer, useRef } from 'react'
import './App.css'

function reducerStateFunc(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}


function App() {
  const [count, setCount] = useState(0);
  const [reducerCount, recuderSetCount] = useReducer(reducerStateFunc, 0);
  const inputRef = useRef(null);

  const handleSetCount = (e) => {
    const type = e.target.id
    switch (type) {
      case 'increment':
        setCount(count + 1)
        break;
      case 'decrement':
        setCount(count - 1)
        break;
      default:
        break;
    }
  };


  return (
    <>
      <div>
        <h2>useState Counter</h2>
        <p> {count} </p>
        <button id="increment" onClick={handleSetCount}>Arttır</button>
        <button id="decrement" onClick={handleSetCount}>Azalt</button>
      </div>
      <div>
        <h2>useReducer Counter</h2>
        <p>{reducerCount}</p>
        <button onClick={() => recuderSetCount({type: "increment"})}>Reducer Arttır</button>
        <button onClick={() => recuderSetCount({type: "decrement"})}>Reducer Azalt</button>
      </div>
      <div>
        <h2>useRef input Focus</h2>
        <input type="text" ref={inputRef} />
        <button onClick={() => inputRef.current.focus()}>Focus Input</button>
      </div>
    </>
  )
}

export default App
