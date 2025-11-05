import { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import PriceChart from '../components/PriceChart'
import './MarketDetail.css'

const MarketDetail = () => {
  const { id } = useParams()
  const [descriptionExpanded, setDescriptionExpanded] = useState(true)
  const [rulesExpanded, setRulesExpanded] = useState(true)
  const [priceHistoryTab, setPriceHistoryTab] = useState('30d')
  
  // Mock market data - matching the BNB market from Entrave
  const market = {
    id: id,
    question: 'Will the BNB reach $1,500 in November 2025?',
    category: 'crypto',
    status: 'OPEN',
    totalVolume: 6840,
    totalTrades: 122,
    expiryDate: 'Dec 1, 2025',
    expiryTime: '08:29 UTC',
    yesPrice: 25.2,
    noPrice: 74.8,
    yesPriceInitial: 55.0,
    noPriceInitial: 45.0,
    imageUrl: 'https://placehold.co/400x300/f3ba2f/000000?text=BNB&font=roboto',
    description: 'Bet on whether BNB/USD trades at $1,500.00 or higher at any time during November 2025.',
    rules: 'YES if BNB/USD prints >= $1,500.00 at any moment between Nov 1-30, 2025 (inclusive). Intraday ticks count. Accepted sources (use majority if needed): Binance SPOT or CoinMarketcap (BNB/USD). Derivatives don\'t count: Perps/futures or synthetic prices are not valid; spot only.',
    lastUpdated: 'Wed, 05 Nov 2025 04:41:44 GMT'
  }

  const yesChange = ((market.yesPrice - market.yesPriceInitial) / market.yesPriceInitial * 100).toFixed(1)

  // Generate realistic price history data based on time range
  // Fixed reference date: Nov 5, 2025 04:41:44 GMT (matching lastUpdated)
  const generatePriceData = (range) => {
    // Use fixed reference date for consistency
    const referenceDate = new Date('2025-11-05T04:41:44Z')
    const data = []
    
    let points = 50
    let hoursBack = 24
    
    if (range === '24h') {
      points = 48 // Every 30 minutes
      hoursBack = 24
    } else if (range === '7d') {
      points = 56 // Every 3 hours
      hoursBack = 168 // 7 days
    } else if (range === '30d') {
      points = 60 // Every 12 hours
      hoursBack = 720 // 30 days
    } else {
      points = 90 // Every day
      hoursBack = 2160 // 90 days
    }
    
    // Realistic price movement - linear trend with natural fluctuations
    const targetPrice = market.yesPrice
    const priceChange = targetPrice - market.yesPriceInitial
    const seed = parseInt(market.id) || 2
    
    // Reset to initial price for deterministic generation
    let currentYesPrice = market.yesPriceInitial
    
    for (let i = 0; i < points; i++) {
      const date = new Date(referenceDate)
      date.setHours(date.getHours() - (hoursBack - (i * hoursBack / points)))
      
      // Linear progress from initial to current
      const progress = i / (points - 1)
      const basePrice = market.yesPriceInitial + (priceChange * progress)
      
      // Deterministic noise based on seed and position - always the same for same market/range
      const positionHash = (seed * 1000 + i * 100 + range.charCodeAt(0)) % 997
      const noise = (positionHash / 997 - 0.5) * 5
      
      // Deterministic walk effect - consistent for same market/range
      const walkHash = (seed * 500 + i * 50 + range.charCodeAt(0)) % 200
      const walk = (walkHash - 100) / 100 * 1.5
      
      // Accumulate price changes deterministically
      currentYesPrice = basePrice + noise + walk
      const yesPrice = Math.max(0, Math.min(100, currentYesPrice))
      const noPrice = 100 - yesPrice
      
      let dateStr, label
      if (range === '24h') {
        dateStr = date.toLocaleTimeString('en-US', { hour: 'numeric', hour12: false })
        label = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
      } else if (range === '7d') {
        if (i % 4 === 0 || i === points - 1) {
          dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', hour12: false })
          label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })
        } else {
          dateStr = ''
          label = ''
        }
      } else {
        if (i % 2 === 0 || i === points - 1) {
          dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
          label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        } else {
          dateStr = ''
          label = ''
        }
      }
      
      data.push({
        date: dateStr || date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        yes: Math.round(yesPrice * 10) / 10, // Round to 1 decimal for consistency
        no: Math.round(noPrice * 10) / 10,
        label: label || date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      })
    }
    
    return data
  }

  const chartData = useMemo(() => generatePriceData(priceHistoryTab), [priceHistoryTab, market.id, market.yesPrice, market.yesPriceInitial])

  return (
    <main className="market-detail-page">
      <div className="market-detail-container">
        {/* Market Header */}
        <div className="market-detail-header">
          <div className="market-header-top">
            <div className="market-status-badge">
              <span className={`status-indicator ${market.status.toLowerCase()}`}>{market.status}</span>
              <span className="category-tag">{market.category}</span>
            </div>
            <button className="share-button">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
              Share
            </button>
          </div>
          
          <div className="market-header-content">
            <div className="market-icon-large">
              <img src={market.imageUrl} alt={market.category} />
            </div>
            <div className="market-header-text">
              <h1 className="market-detail-question">{market.question}</h1>
              <p className="market-detail-description">{market.description}</p>
              <div className="market-closing-date">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Closes: {market.expiryDate} at {market.expiryTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="market-detail-layout">
          {/* Left Column - Main Content */}
          <div className="market-detail-main">
            {/* Stats Section */}
            <div className="market-stats-section">
              <div className="market-stat-item">
                <p className="stat-label">Total Volume</p>
                <div className="stat-value">${market.totalVolume.toLocaleString()}</div>
              </div>
              <div className="market-stat-item">
                <p className="stat-label">Total Trades</p>
                <div className="stat-value">{market.totalTrades}</div>
              </div>
            </div>

            {/* Live Market Odds Section */}
            <div className="live-market-odds-section">
              <div className="section-header">
                <h3 className="section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  Live Market Odds
                </h3>
                <div className="live-indicator">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                  </svg>
                  Live Prices
                </div>
              </div>
              
              <div className="odds-display">
                <div className="odds-item yes">
                  <div className="odds-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                      <polyline points="16 7 22 7 22 13"></polyline>
                    </svg>
                    <span>YES</span>
                  </div>
                  <div className="odds-value">{market.yesPrice}%</div>
                  <div className="odds-label">Live Price</div>
                </div>
                
                <div className="odds-item no">
                  <div className="odds-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2 17 7.5 8.5 12.5 13.5 22 7"></polyline>
                      <polyline points="8 17 2 17 2 11"></polyline>
                    </svg>
                    <span>NO</span>
                  </div>
                  <div className="odds-value">{market.noPrice}%</div>
                  <div className="odds-label">Live Price</div>
                </div>
              </div>

              <div className="last-updated">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Last updated: {market.lastUpdated}</span>
                <span className="live-badge">Live</span>
              </div>
            </div>

            {/* Price History Section */}
            <div className="price-history-section">
              <div className="section-header">
                <h3 className="section-title">Price History</h3>
                <div className="history-tabs">
                  <button 
                    className={priceHistoryTab === '24h' ? 'active' : ''}
                    onClick={() => setPriceHistoryTab('24h')}
                  >24h</button>
                  <button 
                    className={priceHistoryTab === '7d' ? 'active' : ''}
                    onClick={() => setPriceHistoryTab('7d')}
                  >7d</button>
                  <button 
                    className={priceHistoryTab === '30d' ? 'active' : ''}
                    onClick={() => setPriceHistoryTab('30d')}
                  >30d</button>
                  <button 
                    className={priceHistoryTab === 'all' ? 'active' : ''}
                    onClick={() => setPriceHistoryTab('all')}
                  >All</button>
                </div>
              </div>

              <div className="chart-container">
                <div className="chart-legend">
                  <div className="legend-item yes">
                    <div className="legend-line"></div>
                    <span>YES</span>
                  </div>
                  <div className="legend-item no">
                    <div className="legend-line"></div>
                    <span>NO</span>
                  </div>
                </div>
                <div className="chart-wrapper">
                  <PriceChart data={chartData} timeRange={priceHistoryTab} />
                </div>
              </div>

              <div className="price-info">
                <div className="price-info-item yes">
                  <p>YES Price<span className="live-dot">●</span> Live</p>
                  <div className="price-value">{market.yesPrice}%</div>
                  <div className="price-change">Initial: {market.yesPriceInitial}% → Current: {market.yesPrice}%</div>
                </div>
                <div className="price-info-item no">
                  <p>NO Price<span className="live-dot">●</span> Live</p>
                  <div className="price-value">{market.noPrice}%</div>
                  <div className="price-change">Initial: {market.noPriceInitial}% → Current: {market.noPrice}%</div>
                </div>
              </div>

              <div className="price-progression">
                <span>Price Progression:</span>
                <span className="progression-value">{market.yesPriceInitial}% → {market.yesPrice}% ({yesChange < 0 ? '' : '+'}{yesChange}%)</span>
              </div>
              <div className="data-source">
                <span>Data Source:</span>
                <span className="source-value">Live (PancakeSwap Infinity)</span>
              </div>
              <p className="data-source-note">Live prices from PancakeSwap Infinity</p>
            </div>

            {/* Description Section */}
            <div className="collapsible-section">
              <button 
                className="collapsible-header"
                onClick={() => setDescriptionExpanded(!descriptionExpanded)}
              >
                <h3 className="section-title">Description</h3>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={descriptionExpanded ? 'expanded' : ''}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {descriptionExpanded && (
                <div className="collapsible-content">
                  <p>{market.description}</p>
                </div>
              )}
            </div>

            {/* Rules & Resolution Section */}
            <div className="collapsible-section">
              <button 
                className="collapsible-header"
                onClick={() => setRulesExpanded(!rulesExpanded)}
              >
                <h3 className="section-title">Rules & Resolution</h3>
                <svg 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className={rulesExpanded ? 'expanded' : ''}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              {rulesExpanded && (
                <div className="collapsible-content">
                  <p>{market.rules}</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Trade Panel */}
          <div className="market-detail-sidebar">
            <div className="trade-panel">
              <h3 className="section-title">Trade</h3>
              <div className="trade-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                  <path d="M18 12a2 2 0 0 0 0 4H7v-4Z"></path>
                </svg>
                <p>Connect your wallet to trade</p>
                <button className="connect-wallet-btn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                    <path d="M18 12a2 2 0 0 0 0 4H7v-4Z"></path>
                  </svg>
                  Connect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default MarketDetail
