import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BetaApp from './beta/BetaApp'
import './App.css'

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beta/*" element={<BetaApp />} />
      </Routes>
    </div>
  )
}

export default App