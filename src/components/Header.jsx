import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className="prismo-header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <span className="logo-icon">✦</span>
          <span className="logo-text">Prediqt</span>
        </Link>
        
        <nav className="header-nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/beta/markets" className="nav-link">Markets</Link>
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <Link to="/beta/markets" className="nav-link">Comparison</Link>
        </nav>

        <div className="header-actions">
          <button className="btn-join-waitlist">Join Waitlist</button>
          <button className="btn-contact">Contact Us</button>
        </div>
      </div>
    </header>
  )
}

export default Header

