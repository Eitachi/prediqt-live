import { useState } from 'react';
import { useWallet } from '../../contexts/WalletContext';
import './CreateMarketForm.css';

const CreateMarketForm = ({ onClose }) => {
  const { balance } = useWallet();
  const [formData, setFormData] = useState({
    question: '',
    description: '',
    category: 'crypto',
    resolutionRules: '',
    endDate: '',
    endTime: '',
    initialLiquidity: '',
    imageUrl: ''
  });

  const categories = [
    'crypto',
    'sports',
    'politics',
    'finance',
    'culture',
    'global',
    'tech',
    'science',
    'entertainment'
  ];

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating new market:', formData);
    // Handle market creation
    if (onClose) onClose();
  };

  const minLiquidity = 100;
  const creationFee = 5;
  const totalCost = parseFloat(formData.initialLiquidity || 0) + creationFee;

  return (
    <div className="create-market-form">
      <form onSubmit={handleSubmit}>
        {/* Market Question */}
        <div className="form-section">
          <label className="form-label required">Market Question</label>
          <input
            type="text"
            value={formData.question}
            onChange={(e) => handleChange('question', e.target.value)}
            placeholder="e.g., Will Bitcoin reach $100,000 by end of 2025?"
            className="form-input"
            required
            maxLength={200}
          />
          <div className="input-hint">{formData.question.length}/200 characters</div>
        </div>

        {/* Description */}
        <div className="form-section">
          <label className="form-label required">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => handleChange('description', e.target.value)}
            placeholder="Provide detailed context about this market..."
            className="form-textarea"
            rows={4}
            required
            maxLength={500}
          />
          <div className="input-hint">{formData.description.length}/500 characters</div>
        </div>

        {/* Category */}
        <div className="form-section">
          <label className="form-label required">Category</label>
          <select
            value={formData.category}
            onChange={(e) => handleChange('category', e.target.value)}
            className="form-select"
            required
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Resolution Rules */}
        <div className="form-section">
          <label className="form-label required">Resolution Rules</label>
          <textarea
            value={formData.resolutionRules}
            onChange={(e) => handleChange('resolutionRules', e.target.value)}
            placeholder="Define clear criteria for how this market will be resolved..."
            className="form-textarea"
            rows={4}
            required
            maxLength={1000}
          />
          <div className="input-hint">{formData.resolutionRules.length}/1000 characters</div>
        </div>

        {/* End Date & Time */}
        <div className="form-row">
          <div className="form-section">
            <label className="form-label required">End Date</label>
            <input
              type="date"
              value={formData.endDate}
              onChange={(e) => handleChange('endDate', e.target.value)}
              className="form-input"
              min={new Date().toISOString().split('T')[0]}
              required
            />
          </div>
          <div className="form-section">
            <label className="form-label required">End Time (UTC)</label>
            <input
              type="time"
              value={formData.endTime}
              onChange={(e) => handleChange('endTime', e.target.value)}
              className="form-input"
              required
            />
          </div>
        </div>

        {/* Initial Liquidity */}
        <div className="form-section">
          <label className="form-label required">
            Initial Liquidity
            <span className="balance-info">Balance: ${balance.toFixed(2)}</span>
          </label>
          <div className="input-wrapper">
            <span className="input-prefix">$</span>
            <input
              type="number"
              step="0.01"
              min={minLiquidity}
              max={balance - creationFee}
              value={formData.initialLiquidity}
              onChange={(e) => handleChange('initialLiquidity', e.target.value)}
              placeholder={`Minimum ${minLiquidity}`}
              className="form-input amount-input"
              required
            />
          </div>
          <div className="input-hint">
            Minimum ${minLiquidity} required to ensure market liquidity
          </div>
        </div>

        {/* Image URL (Optional) */}
        <div className="form-section">
          <label className="form-label">Market Image URL (Optional)</label>
          <input
            type="url"
            value={formData.imageUrl}
            onChange={(e) => handleChange('imageUrl', e.target.value)}
            placeholder="https://example.com/image.jpg"
            className="form-input"
          />
        </div>

        {/* Cost Summary */}
        <div className="cost-summary">
          <div className="summary-header">Cost Summary</div>
          <div className="summary-row">
            <span>Initial Liquidity</span>
            <span>${formData.initialLiquidity || '0.00'}</span>
          </div>
          <div className="summary-row">
            <span>Creation Fee</span>
            <span>${creationFee.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span>Total Cost</span>
            <span className="total-value">${totalCost.toFixed(2)}</span>
          </div>
        </div>

        {/* Info Box */}
        <div className="info-box">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="16" x2="12" y2="12"/>
            <line x1="12" y1="8" x2="12.01" y2="8"/>
          </svg>
          <div>
            <strong>Market Creation:</strong> Your market will be reviewed and may take up to 24 hours to go live. 
            Initial liquidity will be locked until market resolution.
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="submit-market-btn"
          disabled={!formData.question || !formData.description || !formData.resolutionRules || 
                   !formData.endDate || !formData.endTime || !formData.initialLiquidity ||
                   parseFloat(formData.initialLiquidity) < minLiquidity ||
                   totalCost > balance}
        >
          Create Market for ${totalCost.toFixed(2)}
        </button>

        {totalCost > balance && (
          <div className="error-message">
            Insufficient balance. You need ${(totalCost - balance).toFixed(2)} more.
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateMarketForm;

