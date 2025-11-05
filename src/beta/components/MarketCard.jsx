import { Link } from 'react-router-dom'
import './MarketCard.css'

const MarketCard = ({ market }) => {
  const {
    id,
    question,
    category,
    imageUrl,
    status,
    totalVolume,
    expiryDate,
    yesPrice,
    noPrice,
    isLaunchpad = false,
    fundingProgress = null,
    fundingTarget = null,
    contributors = null
  } = market

  const displayStatus = status === 'FUNDING' ? 'funding' : status.toLowerCase()

  return (
    <Link to={`/beta/market/${id}`} className="market-card">
      <div className="market-card-header">
        <div className="market-status-badge">
          <span className={`status-indicator ${displayStatus}`}>{status}</span>
          <span className="category-tag">{category}</span>
        </div>
        <button className="market-card-menu" onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
        }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4H4C3.44772 4 3 4.44772 3 5V12C3 12.5523 3.44772 13 4 13H11C11.5523 13 12 12.5523 12 12V10M9 3H12C12.5523 3 13 3.44772 13 4V7M9 3L13 7M9 3L13 7M13 7H10M10 7V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="market-card-content">
        {imageUrl && (
          <img src={imageUrl} alt={question} className="market-card-image" />
        )}
        <h3 className="market-card-question">{question}</h3>
      </div>

      <div className="market-card-stats">
        <div className="market-stat">
          <span className="stat-label">Total volume</span>
          <span className="stat-value">${totalVolume.toLocaleString()}</span>
        </div>
        <div className="market-stat">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="stat-value">{expiryDate}</span>
        </div>
      </div>

      {isLaunchpad ? (
        <div className="market-card-funding">
          <div className="funding-header">
            <span className="funding-label">Progress to target</span>
            <span className="funding-percentage">{fundingProgress}%</span>
          </div>
          <div className="funding-progress-bar">
            <div className="funding-progress-fill" style={{ width: `${fundingProgress}%` }}></div>
          </div>
          <div className="funding-footer">
            <span className="funding-amount">${totalVolume.toLocaleString()} / ${fundingTarget.toLocaleString()}</span>
            <span className="funding-contributors">{contributors} contributors</span>
          </div>
          <button className="fund-now-button" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}>Fund Now</button>
        </div>
      ) : (
        <div className="market-card-odds">
          <button className="odds-button yes" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}>
            <span className="odds-label">Yes</span>
            <span className="odds-price-wrapper">
              <span className="odds-price">{yesPrice.toFixed(2)}¢</span>
              <svg className="odds-lightning" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 1L3 7H6L5 11L9 5H6L7 1Z" fill="currentColor"/>
              </svg>
            </span>
          </button>
          <button className="odds-button no" onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
          }}>
            <span className="odds-label">No</span>
            <span className="odds-price-wrapper">
              <span className="odds-price">{noPrice.toFixed(2)}¢</span>
              <svg className="odds-lightning" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M7 1L3 7H6L5 11L9 5H6L7 1Z" fill="currentColor"/>
              </svg>
            </span>
          </button>
        </div>
      )}
    </Link>
  )
}

export default MarketCard

