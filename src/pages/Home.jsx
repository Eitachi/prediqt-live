import { Link } from 'react-router-dom'
import Plasma from '../components/Plasma'
import SplitText from '../components/SplitText'
import './Home.css'

const Home = () => {
  return (
    <div className="home-page">
      {/* Plasma Background */}
      <div className="plasma-background">
        <Plasma 
          color="#1abc9c"
          speed={0.8}
          direction="forward"
          scale={1.2}
          opacity={0.12}
          mouseInteractive={true}
        />
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-container">
          {/* Badge */}
          <div className="hero-badge">
            <span>Trusted by 200K+ Traders Worldwide</span>
          </div>

          {/* Main Headline */}
          <div className="hero-headline">
            <SplitText
              text="Prediction Markets"
              tag="h1"
              className="hero-headline-line"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="center"
            />
            <br />
            <SplitText
              text="Made Simple & Powerful"
              tag="h1"
              className="hero-headline-line"
              delay={50}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.2}
              rootMargin="-50px"
              textAlign="center"
            />
          </div>

          {/* Sub-headline */}
          <p className="hero-subheadline">
            Trade on real-world events with transparency, liquidity, and cutting-edge technology.
            <br />
            Join the future of decentralized prediction markets.
          </p>

          {/* CTA Buttons */}
          <div className="hero-cta-wrapper">
            <Link to="/beta/markets" className="hero-cta-primary">
              Explore Markets
            </Link>
            <a href="#learn" className="hero-cta-secondary">
              Learn More →
            </a>
          </div>

          {/* Social Proof */}
          <div className="hero-rating">
            <div className="hero-stars">★★★★★</div>
            <span className="hero-rating-text">4.9/5 rating from 300K+ users</span>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <div className="feature-card">
            <h3 className="feature-title">Real-Time Analytics</h3>
            <p className="feature-description">
              Track market movements with live data and advanced charting tools
            </p>
            </div>

          <div className="feature-card">
            <h3 className="feature-title">Secure & Transparent</h3>
            <p className="feature-description">
              Blockchain-based transactions ensure trust and transparency
            </p>
            </div>

          <div className="feature-card">
            <h3 className="feature-title">Lightning Fast</h3>
            <p className="feature-description">
              Execute trades instantly with our optimized infrastructure
            </p>
          </div>

          <div className="feature-card">
            <h3 className="feature-title">Low Fees</h3>
            <p className="feature-description">
              Trade more, pay less with our competitive fee structure
            </p>
              </div>
            </div>
      </section>
    </div>
  )
}

export default Home
