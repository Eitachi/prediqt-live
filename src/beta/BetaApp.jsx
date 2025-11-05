import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Markets from './pages/Markets'
import MarketDetail from './pages/MarketDetail'
import LearnIntroduction from './pages/LearnIntroduction'

function BetaApp() {
  return (
    <div className="beta-app">
      <Header />
      <Routes>
        <Route path="/markets" element={<Markets />} />
        <Route path="/market/:id" element={<MarketDetail />} />
        <Route path="/learn" element={<LearnIntroduction />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default BetaApp

