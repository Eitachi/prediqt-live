import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__brand-link">
              <img
                src="/photo_2025-11-07_16-12-58-removebg-preview.png"
                alt="Prediqt"
                className="site-footer__brand-logo"
              />
            </Link>
            <p className="site-footer__tagline">Prediction markets built for real-world traders.</p>
          </div>

          <div className="site-footer__links">
            <div className="site-footer__column">
              <span className="site-footer__heading">Community</span>
              <a href="https://x.com/entrave" target="_blank" rel="noreferrer" className="site-footer__link">
                <svg width="16" height="16" viewBox="0 0 1200 1227" fill="currentColor">
                  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"/>
                </svg>
                X
              </a>
              <a href="https://discord.com/invite/entrave" target="_blank" rel="noreferrer" className="site-footer__link">
                <svg width="16" height="16" viewBox="0 0 127.14 96.36" fill="currentColor">
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Discord
              </a>
            </div>

            <div className="site-footer__column site-footer__column--powered">
              <span className="site-footer__heading">Powered by</span>
              <img
                src="/bnb-chain-full-binance-smart-chain-logo-1-1024x180.png"
                alt="BNB Chain"
                className="site-footer__powered-logo"
              />
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__copyright">© {year} Prediqt. All rights reserved.</p>
          <div className="site-footer__legal">
            <Link to="/privacy-policy" className="site-footer__link">Privacy</Link>
            <span className="site-footer__separator">•</span>
            <Link to="/terms-of-service" className="site-footer__link">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

