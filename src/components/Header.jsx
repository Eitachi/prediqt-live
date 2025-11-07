import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useWallet } from '../contexts/WalletContext'
import './Header.css'

const Header = () => {
  const [isDark, setIsDark] = useState(false)
  const [showWalletMenu, setShowWalletMenu] = useState(false)
  const { isConnected, address, connectWallet, disconnectWallet } = useWallet()

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    
    if (newTheme) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="site-header">
      <div className="site-header__container">
        <Link to="/" className="site-header__logo-link">
          <img
            src="/photo_2025-11-07_16-12-58-removebg-preview.png"
            alt="Prediqt Live"
            className="site-header__logo"
          />
        </Link>

        <nav className="site-header__nav">
          <Link to="/" className="site-header__nav-link">
            Home
          </Link>
          <Link to="/beta/markets" className="site-header__nav-link">
            Markets
          </Link>
          <a href="#features" className="site-header__nav-link">
            Features
          </a>
        </nav>

        <div className="site-header__actions">
          <button 
            onClick={toggleTheme}
            className="site-header__theme-toggle"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          
          {isConnected ? (
            <div className="wallet-info">
              <Link to="/beta/profile" className="site-header__action-btn site-header__action-btn--ghost profile-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                Profile
              </Link>
              <div className="wallet-dropdown">
                <button 
                  className="site-header__action-btn site-header__action-btn--primary"
                  onClick={() => setShowWalletMenu(!showWalletMenu)}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                    <line x1="1" y1="10" x2="23" y2="10"/>
                  </svg>
                  {address.slice(0, 6)}...{address.slice(-4)}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="6 9 12 15 18 9"/>
                  </svg>
                </button>
                {showWalletMenu && (
                  <div className="wallet-menu">
                    <button className="wallet-menu-item" onClick={() => {
                      setShowWalletMenu(false);
                      connectWallet();
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                      </svg>
                      Change Wallet
                    </button>
                    <button className="wallet-menu-item logout" onClick={() => {
                      setShowWalletMenu(false);
                      disconnectWallet();
                    }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <polyline points="16 17 21 12 16 7"/>
                        <line x1="21" y1="12" x2="9" y2="12"/>
                      </svg>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <button 
              onClick={connectWallet}
              className="site-header__action-btn site-header__action-btn--primary"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

