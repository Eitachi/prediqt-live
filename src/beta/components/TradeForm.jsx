import { useState } from 'react';
import { useWallet } from '../../contexts/WalletContext';
import './TradeForm.css';

const TradeForm = ({ market, onClose }) => {
  const { isConnected, balance, connectWallet } = useWallet();
  const [activeTab, setActiveTab] = useState('buy');
  const [position, setPosition] = useState('YES');
  const [amount, setAmount] = useState('');
  const [shares, setShares] = useState('');

  const currentPrice = position === 'YES' ? market?.yesPrice || 50 : market?.noPrice || 50;
  const pricePerShare = currentPrice / 100;

  const handleAmountChange = (value) => {
    setAmount(value);
    if (value) {
      const calculatedShares = (parseFloat(value) / pricePerShare).toFixed(2);
      setShares(calculatedShares);
    } else {
      setShares('');
    }
  };

  const handleSharesChange = (value) => {
    setShares(value);
    if (value) {
      const calculatedAmount = (parseFloat(value) * pricePerShare).toFixed(2);
      setAmount(calculatedAmount);
    } else {
      setAmount('');
    }
  };

  const potentialReturn = shares ? (parseFloat(shares) * 1).toFixed(2) : '0.00';
  const potentialProfit = amount && shares ? (parseFloat(shares) - parseFloat(amount)).toFixed(2) : '0.00';

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      tab: activeTab,
      position,
      amount,
      shares,
      market: market?.id
    });
    // Handle trade submission
    if (onClose) onClose();
  };

  if (!isConnected) {
    return (
      <div className="trade-form-container">
        <div className="trade-connect-prompt">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
            <line x1="1" y1="10" x2="23" y2="10"/>
          </svg>
          <p>Connect your wallet to trade</p>
          <button className="trade-connect-btn" onClick={connectWallet}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="trade-form-container">
      {/* Trade Tabs */}
      <div className="trade-tabs">
        <button
          className={`trade-tab ${activeTab === 'buy' ? 'active' : ''}`}
          onClick={() => setActiveTab('buy')}
        >
          Buy
        </button>
        <button
          className={`trade-tab ${activeTab === 'sell' ? 'active' : ''}`}
          onClick={() => setActiveTab('sell')}
        >
          Sell
        </button>
      </div>

      <form onSubmit={handleSubmit} className="trade-form">
        {/* Position Selection */}
        <div className="form-group">
          <label className="form-label">Outcome</label>
          <div className="position-buttons">
            <button
              type="button"
              className={`position-btn ${position === 'YES' ? 'active' : ''} yes`}
              onClick={() => setPosition('YES')}
            >
              <div className="position-content">
                <span className="position-label">YES</span>
                <span className="position-price">{market?.yesPrice || 50}¢</span>
              </div>
            </button>
            <button
              type="button"
              className={`position-btn ${position === 'NO' ? 'active' : ''} no`}
              onClick={() => setPosition('NO')}
            >
              <div className="position-content">
                <span className="position-label">NO</span>
                <span className="position-price">{market?.noPrice || 50}¢</span>
              </div>
            </button>
          </div>
        </div>

        {/* Amount Input */}
        <div className="form-group">
          <label className="form-label">
            Amount
            <span className="balance-label">Balance: ${balance.toFixed(2)}</span>
          </label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => handleAmountChange(e.target.value)}
              placeholder="0.00"
              className="trade-input"
            />
            <button
              type="button"
              className="max-btn"
              onClick={() => handleAmountChange(balance.toString())}
            >
              MAX
            </button>
          </div>
          <div className="quick-amounts">
            <button type="button" onClick={() => handleAmountChange('10')}>$10</button>
            <button type="button" onClick={() => handleAmountChange('25')}>$25</button>
            <button type="button" onClick={() => handleAmountChange('50')}>$50</button>
            <button type="button" onClick={() => handleAmountChange('100')}>$100</button>
          </div>
        </div>

        {/* Shares Input */}
        <div className="form-group">
          <label className="form-label">Shares</label>
          <div className="input-wrapper">
            <input
              type="number"
              step="0.01"
              min="0"
              value={shares}
              onChange={(e) => handleSharesChange(e.target.value)}
              placeholder="0.00"
              className="trade-input"
            />
          </div>
          <div className="input-hint">
            At {currentPrice}¢ per share
          </div>
        </div>

        {/* Trade Summary */}
        <div className="trade-summary">
          <div className="summary-row">
            <span>Avg price</span>
            <span className="summary-value">{currentPrice}¢</span>
          </div>
          <div className="summary-row">
            <span>Shares</span>
            <span className="summary-value">{shares || '0.00'}</span>
          </div>
          <div className="summary-row">
            <span>Potential return</span>
            <span className="summary-value highlighted">${potentialReturn}</span>
          </div>
          <div className="summary-row">
            <span>Potential profit</span>
            <span className={`summary-value ${parseFloat(potentialProfit) >= 0 ? 'profit' : 'loss'}`}>
              ${potentialProfit} ({parseFloat(potentialProfit) >= 0 ? '+' : ''}{amount ? ((parseFloat(potentialProfit) / parseFloat(amount)) * 100).toFixed(1) : '0'}%)
            </span>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className={`trade-submit-btn ${position.toLowerCase()}`}
          disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > balance}
        >
          {activeTab === 'buy' ? 'Buy' : 'Sell'} {position} for ${amount || '0.00'}
        </button>

        {parseFloat(amount) > balance && (
          <div className="trade-error">
            Insufficient balance
          </div>
        )}
      </form>
    </div>
  );
};

export default TradeForm;

