import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import BetaApp from './beta/BetaApp'
import ClickSpark from './components/ClickSpark'
import { WalletProvider } from './contexts/WalletContext'
import './App.css'

function App() {
  return (
    <WalletProvider>
      <ClickSpark
        sparkColor='#16a085'
        sparkSize={12}
        sparkRadius={25}
        sparkCount={8}
        duration={500}
      >
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
      </ClickSpark>
    </WalletProvider>
  )
}

export default App