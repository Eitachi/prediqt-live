import { Routes, Route } from 'react-router-dom'
import Markets from './pages/Markets'
import MarketDetail from './pages/MarketDetail'
import LearnIntroduction from './pages/LearnIntroduction'
import Profile from './pages/Profile'
import CreateMarket from './pages/CreateMarket'

function BetaApp() {
  return (
    <div className="beta-app">
      <Routes>
        <Route path="/markets" element={<Markets />} />
        <Route path="/market/:id" element={<MarketDetail />} />
        <Route path="/learn" element={<LearnIntroduction />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-market" element={<CreateMarket />} />
      </Routes>
    </div>
  )
}

export default BetaApp

