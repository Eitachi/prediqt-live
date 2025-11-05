import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import MarketCard from '../components/MarketCard'
import CategoryFilters from '../components/CategoryFilters'
import './Markets.css'

// Mock market data - matching Entrave
const mockMarkets = [
  {
    id: '1',
    question: 'Will MetaMask launch an official token before March 2026?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 18235,
    expiryDate: 'Mar 1, 2026',
    yesPrice: 51.64,
    noPrice: 48.36,
    imageUrl: 'https://placehold.co/400x300/ff6b2b/ffffff?text=MetaMask&font=roboto'
  },
  {
    id: '2',
    question: 'Will the BNB reach $1,500 in November 2025?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 6841,
    expiryDate: 'Dec 1, 2025',
    yesPrice: 25.23,
    noPrice: 74.77,
    imageUrl: 'https://placehold.co/400x300/f3ba2f/000000?text=BNB&font=roboto'
  },
  {
    id: '3',
    question: 'Will Tesla (TSLA) trade at $500.00+ at any time in 2025?',
    category: 'Finance',
    status: 'OPEN',
    totalVolume: 4421,
    expiryDate: 'Jan 1, 2026',
    yesPrice: 41.29,
    noPrice: 58.71,
    imageUrl: 'https://placehold.co/400x300/cc0000/ffffff?text=TESLA&font=roboto'
  },
  {
    id: '4',
    question: 'Will Hyperliquid do another $HYPE airdrop before end-2025?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 4363,
    expiryDate: 'Jan 1, 2026',
    yesPrice: 31.05,
    noPrice: 68.95,
    imageUrl: 'https://placehold.co/400x300/00d4ff/000000?text=Hyperliquid&font=roboto'
  },
  {
    id: '5',
    question: 'Will China PR qualify for the 2026 FIFA World Cup?',
    category: 'China',
    status: 'OPEN',
    totalVolume: 2047,
    expiryDate: 'Jun 11, 2026',
    yesPrice: 45.09,
    noPrice: 54.91,
    imageUrl: 'https://placehold.co/400x300/de2910/ffffff?text=FIFA+2026&font=roboto'
  },
  {
    id: '6',
    question: 'Will any prediction-market token break into Top-100 by market cap in 2025?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 1099,
    expiryDate: 'Jan 1, 2026',
    yesPrice: 52.84,
    noPrice: 47.16,
    imageUrl: 'https://placehold.co/400x300/8b5cf6/ffffff?text=Top+100&font=roboto'
  },
  {
    id: '7',
    question: 'Will BTC print a new ATH (≥ prior all-time high) by Nov 30, 2025?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 904,
    expiryDate: 'Dec 1, 2025',
    yesPrice: 58,
    noPrice: 42,
    imageUrl: 'https://placehold.co/400x300/f7931a/ffffff?text=Bitcoin&font=roboto'
  },
  {
    id: '8',
    question: 'Will a nationwide ceasefire framework be announced in the Russia-Ukraine war by Dec 31, 2025?',
    category: 'Geopolitics',
    status: 'OPEN',
    totalVolume: 854,
    expiryDate: 'Jan 1, 2026',
    yesPrice: 50,
    noPrice: 50,
    imageUrl: 'https://placehold.co/400x300/6366f1/ffffff?text=Ceasefire&font=roboto'
  },
  {
    id: '9',
    question: 'Will Max Verstappen win the 2025 Abu Dhabi GP?',
    category: 'Sports',
    status: 'OPEN',
    totalVolume: 606,
    expiryDate: 'Dec 1, 2025',
    yesPrice: 62,
    noPrice: 38,
    imageUrl: 'https://placehold.co/400x300/0600ef/ffffff?text=F1+Racing&font=roboto'
  },
  {
    id: '10',
    question: 'Q4-2025: Will BYD sell more BEVs than Tesla?',
    category: 'Finance',
    status: 'OPEN',
    totalVolume: 600,
    expiryDate: 'Mar 16, 2026',
    yesPrice: 70,
    noPrice: 30,
    imageUrl: 'https://placehold.co/400x300/1e3a8a/ffffff?text=BYD+vs+Tesla&font=roboto'
  },
  {
    id: '11',
    question: 'Will Polymarket beat Kalshi in total trading volume for 2026?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 185,
    expiryDate: 'Jan 1, 2026',
    yesPrice: 67.39,
    noPrice: 32.61,
    imageUrl: 'https://placehold.co/400x300/7c3aed/ffffff?text=Polymarket&font=roboto'
  },
  {
    id: '12',
    question: 'Will 1ynction reach #1 on the all time Mana leaderboard in November 2025?',
    category: 'Crypto',
    status: 'OPEN',
    totalVolume: 109,
    expiryDate: 'Dec 1, 2025',
    yesPrice: 57.89,
    noPrice: 42.11,
    imageUrl: 'https://placehold.co/400x300/fbbf24/000000?text=Mana+Leader&font=roboto'
  },
  {
    id: '13',
    question: 'Will Oracle (Larry Ellison) acquire a controlling stake in TikTok U.S. by Dec 31, 2025?',
    category: 'Finance',
    status: 'OPEN',
    totalVolume: 5,
    expiryDate: 'Jan 1, 2027',
    yesPrice: 50.79,
    noPrice: 49.21,
    imageUrl: 'https://placehold.co/400x300/000000/ffffff?text=TikTok&font=roboto'
  }
]

const Markets = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeTab = searchParams.get('tab') || 'active'
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'trending')
  const [sortBy, setSortBy] = useState('volume')

  const categories = ['trending', 'crypto', 'sports', 'politics', 'finance', 'culture', 'global', 'tech', 'more']

  const filteredMarkets = mockMarkets.filter(market => {
    if (selectedCategory === 'trending') return true
    return market.category.toLowerCase() === selectedCategory.toLowerCase()
  })

  // Launchpad markets
  const launchpadMarkets = [
    {
      id: 'lp1',
      question: 'Will T1 win the 2025 League of Legends World Championship?',
      category: 'Sports',
      status: 'FUNDING',
      totalVolume: 2591,
      expiryDate: 'Nov 9, 2025',
      isLaunchpad: true,
      fundingProgress: 37,
      fundingTarget: 7000,
      contributors: 9,
      imageUrl: 'https://placehold.co/400x300/000000/ff0000?text=T1+LoL&font=roboto'
    },
    {
      id: 'lp2',
      question: 'Will Jake Paul defeat Gervonta Davis',
      category: 'Sports',
      status: 'FUNDING',
      totalVolume: 759,
      expiryDate: 'Nov 16, 2025',
      isLaunchpad: true,
      fundingProgress: 15,
      fundingTarget: 5000,
      contributors: 5,
      imageUrl: 'https://placehold.co/400x300/ff0000/ffffff?text=Boxing&font=roboto'
    },
    {
      id: 'lp3',
      question: 'Fed to cut 25 bps in December?',
      category: 'Finance',
      status: 'FUNDING',
      totalVolume: 100,
      expiryDate: 'Nov 9, 2025',
      isLaunchpad: true,
      fundingProgress: 2,
      fundingTarget: 5000,
      contributors: 1,
      imageUrl: 'https://placehold.co/400x300/003d82/ffffff?text=Federal+Reserve&font=roboto'
    }
  ]

  const sortedMarkets = [...filteredMarkets].sort((a, b) => {
    if (sortBy === 'volume') {
      return b.totalVolume - a.totalVolume
    }
    return 0
  })

  const displayMarkets = activeTab === 'launchpad' ? launchpadMarkets : sortedMarkets

  return (
    <main className="markets-page">
      <div className="markets-container">
        <div className="markets-header">
          <div className="markets-tabs">
            <button
              className={`tab-button ${activeTab === 'active' ? 'active' : ''}`}
              onClick={() => setSearchParams({ tab: 'active', category: selectedCategory })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
              Active Markets
            </button>
            <button
              className={`tab-button ${activeTab === 'launchpad' ? 'active' : ''}`}
              onClick={() => setSearchParams({ tab: 'launchpad', category: selectedCategory })}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
              </svg>
              Launchpad
            </button>
          </div>

          <CategoryFilters
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={(cat) => {
              setSelectedCategory(cat)
              setSearchParams({ tab: activeTab, category: cat })
            }}
          />
        </div>

        <div className="markets-filters">
          <div className="filter-group">
            <span className="filter-label">Sort by:</span>
            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="volume">Highest Volume</option>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
          {activeTab === 'active' && (
            <div className="filter-group">
              <span className="filter-label">Status:</span>
              <select className="filter-select" defaultValue="active">
                <option value="active">Active</option>
                <option value="closed">Closed</option>
                <option value="all">All</option>
              </select>
            </div>
          )}
          {activeTab === 'launchpad' && (
            <div className="filter-group">
              <span className="filter-label">Sort by:</span>
              <select className="filter-select" defaultValue="most-funded">
                <option value="most-funded">Most Funded</option>
                <option value="newest">Newest</option>
                <option value="ending-soon">Ending Soon</option>
              </select>
            </div>
          )}
        </div>

        <div className="markets-grid">
          {displayMarkets.length > 0 ? (
            displayMarkets.map(market => (
              <MarketCard key={market.id} market={market} />
            ))
          ) : (
            <div className="empty-state">
              <p>Loading markets...</p>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Markets
