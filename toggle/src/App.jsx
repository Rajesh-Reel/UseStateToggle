import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [toggle, setToggle] = useState("off")
  
  function toggleChange() {
    // if (toggle === "off") {
    //   setToggle("on")
    // } else {
    //   setToggle("off")
    // }

    toggle === "off" ? setToggle("on") : setToggle("off");
  }

  return (
    <div className="App">
      <button onClick={toggleChange}>{toggle}</button>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </div>
  )
}

export default App
