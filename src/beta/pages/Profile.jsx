import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../contexts/WalletContext';
import BNBValue from '../../components/BNBValue';
import './Profile.css';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('my-bids');
  const navigate = useNavigate();
  const { isConnected, address, balance, connectWallet } = useWallet();
  
  // Mock user data
  const userData = {
    address: address || '0x742d...4e89',
    balance: balance || 1250.50,
    totalBids: 24,
    activeBids: 12,
    wonBids: 8,
    totalVolume: 5420.75
  };

  // Mock bids data with marketId for navigation
  const myBids = [
    {
      id: 1,
      marketId: '1',
      marketQuestion: 'Will MetaMask launch an official token before March 2026?',
      position: 'YES',
      shares: 100,
      avgPrice: 51.64,
      currentPrice: 52.30,
      value: 5230,
      profit: 66,
      status: 'active'
    },
    {
      id: 2,
      marketId: '2',
      marketQuestion: 'Will the BNB reach $1,500 in November 2025?',
      position: 'NO',
      shares: 200,
      avgPrice: 74.77,
      currentPrice: 72.50,
      value: 14500,
      profit: -454,
      status: 'active'
    },
    {
      id: 3,
      marketId: '3',
      marketQuestion: 'Will Tesla (TSLA) trade at $500.00+ at any time in 2025?',
      position: 'YES',
      shares: 150,
      avgPrice: 41.29,
      currentPrice: 45.00,
      value: 6750,
      profit: 556.50,
      status: 'active'
    },
  ];

  const handleCreateBid = () => {
    navigate('/beta/create-market');
  };

  if (!isConnected) {
    return (
      <div className="profile-page">
        <div className="profile-container">
          <div className="wallet-connect-prompt">
            <h2>Connect Your Wallet</h2>
            <p>Please connect your wallet to view your profile and manage bids</p>
            <button className="connect-wallet-btn" onClick={connectWallet}>Connect Wallet</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-info">
            <div className="profile-avatar">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <div className="profile-details">
              <h1 className="profile-address">{userData.address}</h1>
              <p className="profile-balance">Balance: <BNBValue value={userData.balance} iconSize={16} /></p>
            </div>
          </div>

          <button 
            className="create-bid-btn"
            onClick={handleCreateBid}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="12" y1="5" x2="12" y2="19"/>
              <line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Create Bid
          </button>
        </div>

        {/* Stats Cards */}
        <div className="profile-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Bids</span>
              <span className="stat-value">{userData.totalBids}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon active">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Active Bids</span>
              <span className="stat-value">{userData.activeBids}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon won">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Won Bids</span>
              <span className="stat-value">{userData.wonBids}</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon volume">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="1" x2="12" y2="23"/>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="stat-info">
              <span className="stat-label">Total Volume</span>
              <BNBValue value={userData.totalVolume} iconSize={16} className="stat-value" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-btn ${activeTab === 'my-bids' ? 'active' : ''}`}
            onClick={() => setActiveTab('my-bids')}
          >
            My Bids
          </button>
          <button
            className={`tab-btn ${activeTab === 'history' ? 'active' : ''}`}
            onClick={() => setActiveTab('history')}
          >
            History
          </button>
          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        {/* Tab Content */}
        <div className="profile-content">
          {activeTab === 'my-bids' && (
            <div className="bids-list">
              <div className="bids-header">
                <h2>Active Positions</h2>
                <div className="bids-filters">
                  <select className="filter-select">
                    <option value="all">All Positions</option>
                    <option value="yes">YES Positions</option>
                    <option value="no">NO Positions</option>
                  </select>
                  <select className="filter-select">
                    <option value="profit">Sort by Profit</option>
                    <option value="value">Sort by Value</option>
                    <option value="shares">Sort by Shares</option>
                  </select>
                </div>
              </div>

              <div className="bids-table">
                <div className="table-header">
                  <div className="th">Market</div>
                  <div className="th">Position</div>
                  <div className="th">Shares</div>
                  <div className="th">Avg Price</div>
                  <div className="th">Current Price</div>
                  <div className="th">Value</div>
                  <div className="th">Profit/Loss</div>
                  <div className="th">Action</div>
                </div>

                {myBids.map(bid => (
                  <div key={bid.id} className="table-row" onClick={() => navigate(`/beta/market/${bid.marketId}`)}>
                    <div className="td market-name">{bid.marketQuestion}</div>
                    <div className="td">
                      <span className={`position-badge ${bid.position.toLowerCase()}`}>
                        {bid.position}
                      </span>
                    </div>
                    <div className="td">{bid.shares}</div>
                    <div className="td">{bid.avgPrice.toFixed(2)}¢</div>
                    <div className="td">{bid.currentPrice.toFixed(2)}¢</div>
                    <div className="td"><BNBValue value={bid.value} iconSize={12} /></div>
                    <div className="td">
                      <span className={`profit ${bid.profit >= 0 ? 'positive' : 'negative'}`}>
                        {bid.profit >= 0 ? '+' : ''}<BNBValue value={Math.abs(bid.profit)} iconSize={12} />
                      </span>
                    </div>
                    <div className="td">
                      <button 
                        className="action-btn sell"
                        onClick={(e) => {
                          e.stopPropagation();
                          // Handle sell action
                        }}
                      >
                        Sell
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'history' && (
            <div className="history-section">
              <h2>Bid History</h2>
              <p className="empty-state">No historical bids yet</p>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="settings-section">
              <h2>Account Settings</h2>
              <div className="settings-form">
                <div className="form-group">
                  <label>Notification Preferences</label>
                  <div className="checkbox-group">
                    <label>
                      <input type="checkbox" defaultChecked />
                      Email notifications for bid updates
                    </label>
                    <label>
                      <input type="checkbox" defaultChecked />
                      Market resolution alerts
                    </label>
                    <label>
                      <input type="checkbox" />
                      Weekly summary reports
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Profile;

