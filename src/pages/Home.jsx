import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const heroRef = useRef(null)
  const badgeRef = useRef(null)
  const headlineRef = useRef(null)
  const subheadlineRef = useRef(null)
  const ctaRef = useRef(null)
  const ratingRef = useRef(null)
  const mockupRef = useRef(null)

  useEffect(() => {
    // Animation setup will be added when save file is provided
    // This will include parallax, spring animations, and scroll effects
  }, [])

  return (
    <div className="home-page">
      {/* Gradient Background */}
      <div className="beta-background">
        <div className="beta-gradient"></div>
        {/* Abstract shapes will be added from save file */}
      </div>

      {/* Header/Navigation */}
      <header className="landing-header">
        <div className="landing-header-container">
          <Link to="/" className="landing-logo">
            <span className="landing-logo-icon">✦</span>
            <span className="landing-logo-text">Prediqt</span>
          </Link>
          
          <nav className="landing-nav">
            <a href="#home" className="landing-nav-link">Home</a>
            <a href="#features" className="landing-nav-link">Features</a>
            <a href="#pricing" className="landing-nav-link">Pricing</a>
            <a href="#about" className="landing-nav-link">About</a>
            <a href="#comparison" className="landing-nav-link">Comparison</a>
          </nav>

          <div className="landing-header-actions">
            <button className="landing-btn-join">Join Waitlist</button>
            <button className="landing-btn-contact">Contact Us</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="beta-hero">
        <div className="beta-hero-container">
          {/* Badge */}
          <div className="beta-badge" ref={badgeRef}>
            <span>200K+ Projects Managed Daily with Prediqt</span>
          </div>

          {/* Main Headline */}
          <h1 className="beta-headline" ref={headlineRef}>
            Prediction Markets Made Simple and Powerful
          </h1>

          {/* Sub-headline */}
          <p className="beta-subheadline" ref={subheadlineRef}>
            Boost your trading with seamless prediction and market management.
          </p>

          {/* CTA Button */}
          <div className="beta-cta-wrapper" ref={ctaRef}>
            <Link to="/beta/markets" className="beta-cta-button">Join Waitlist</Link>
          </div>

          {/* Social Proof */}
          <div className="beta-rating" ref={ratingRef}>
            <span className="beta-stars">★★★★★</span>
            <span className="beta-rating-text">4.9 rating Based on 300k Users</span>
          </div>
        </div>
      </section>

      {/* Embedded App Mockup */}
      <div className="beta-mockup-wrapper" ref={mockupRef}>
        <div className="beta-mockup-window">
          <div className="beta-mockup-header">
            <div className="beta-traffic-lights">
              <span className="beta-light red"></span>
              <span className="beta-light yellow"></span>
              <span className="beta-light green"></span>
            </div>
            <div className="beta-mockup-title">
              <span className="beta-lock-icon">🔒</span>
              <span>Prediqt.framer.website</span>
            </div>
          </div>
          <div className="beta-mockup-content">
            {/* Mockup content will be added */}
            <div className="beta-mockup-sidebar">
              <div className="beta-mockup-logo">✦ Prediqt</div>
              <div className="beta-mockup-nav">
                <div className="beta-nav-item">Inbox <span className="beta-badge-count">22</span></div>
                <div className="beta-nav-item">Markets</div>
                <div className="beta-nav-item">My Predictions</div>
                <div className="beta-nav-item">Workspace</div>
              </div>
            </div>
            <div className="beta-mockup-main">
              <div className="beta-mockup-toolbar">
                <div className="beta-search-bar">Search markets...</div>
                <div className="beta-toolbar-icons">
                  <span>➕</span>
                  <span>🔔</span>
                </div>
              </div>
              <div className="beta-mockup-filters">
                <span className="beta-filter-active">Personal</span>
                <span>Filter</span>
              </div>
              <div className="beta-mockup-list">
                <div className="beta-list-item">
                  <div className="beta-list-header">In Progress 2</div>
                  <div className="beta-list-card">
                    <div className="beta-card-title">PRED-08 Making Prediction Markets</div>
                  </div>
                  <div className="beta-list-card">
                    <div className="beta-card-title">PRED-07 Create a working prototype</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

