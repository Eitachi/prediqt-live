import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="entrave-footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-star">✦</span>
              <span className="logo-text">Prediqt Live</span>
            </Link>
            <p className="footer-tagline">The future has odds</p>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h3 className="footer-heading">Resources</h3>
              <Link to="/docs" className="footer-link">Documentation</Link>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading">Official Links</h3>
              <div className="footer-social-links">
                <a href="https://x.com/entrave" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M12 4L9 7L12 10M4 4L7 7L4 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Follow us on X
                </a>
                <a href="https://discord.com/invite/entrave" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M13.5 2.5C13.5 2.5 12.5 2 11 2.5C10.5 3 10 3.5 10 3.5C9 3 8 3 8 3C7 3 6 3.5 6 3.5C5.5 3 5 2.5 4.5 2.5C3 2 2 2.5 2 2.5C2 4.5 2.5 6 3 7C3.5 8 4 9 4 9C4.5 10 5 10.5 5 11C4.5 11.5 4 12 4 12C4.5 12.5 5 13 6 13C7 13 8 12.5 8 12.5C8.5 12 9 12 9 12C9.5 12 10 12.5 11 13C12 13 12.5 12.5 13 12C13 12 12.5 11.5 12 11C12 10.5 12.5 10 13 9C13 9 13.5 8 14 7C14.5 6 15 4.5 15 2.5C15 2.5 14 2 13.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Join our Discord
                </a>
                <a href="https://dexscreener.com/bsc/0xf989380c6dc5921a97f5c3078e54a42effbee25c" target="_blank" rel="noopener noreferrer" className="footer-link">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M2 8L8 2L14 8M8 2V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Dexscreener
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2025 Prediqt Live. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <span className="footer-separator">•</span>
            <Link to="/terms-of-service" className="footer-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

