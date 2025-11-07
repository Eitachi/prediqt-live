import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BetaApp from './beta/BetaApp'
import { WalletProvider } from './contexts/WalletContext'
import './App.css'

function App() {
  return (
    <WalletProvider>
      <div className="app">
          <Header />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/beta/*" element={<BetaApp />} />
            </Routes>
          </main>
          <Footer />
        </div>
    </WalletProvider>
  )
}

export default App