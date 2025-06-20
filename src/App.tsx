import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="filters">
        <div className="filter-group"></div>
        <label htmlFor="genreFilter">Genre:</label>
        <select id="genreFilter">
          <option value="">Tous les genres</option>
          <option value="Action">Action</option>
          <option value="Aventure">Aventure</option>
          <option value="RPG">RPG</option>
          <option value="Strategie">Stratégie</option>
          <option value="Sport">Sport</option>
          <option value="Course">Course</option>
          <option value="Simulation">Simulation</option>
          <option value="Puzzle">Puzzle</option>
        </select>
      </div>

      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
