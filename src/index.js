import React from 'react'
import ReactDOM from 'react-dom'

const rootElement = document.querySelector('#root')

let _state = []
let index = 0

const myUseState = initialValue => {
  const currentIndex = index
  _state[currentIndex] = _state[currentIndex] === undefined ? initialValue : _state[currentIndex]
  const setState = newValue => {
    _state[currentIndex] = newValue
    render()
  }
  index += 1
  return [_state[currentIndex], setState]
}

const render = () => {
  index = 0
  ReactDOM.render(<App/>, rootElement)
}

function App() {
  const [n, setN] = myUseState(0)
  const [m, setM] = myUseState(0)
  return (
    <div className="App">
      <p>{n}</p>
      <button onClick={() => {setN(n + 1)}}>+1</button>
      <hr/>
      <p>{m}</p>
      <button onClick={() => {setM(m + 1)}}>+1</button>
    </div>
  )
}

ReactDOM.render(<App/>, rootElement)