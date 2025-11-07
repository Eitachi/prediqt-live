import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../contexts/WalletContext';
import './CreateMarket.css';

const CreateMarket = () => {
  const navigate = useNavigate();
  const { isConnected, balance, connectWallet } = useWallet();
  const [formData, setFormData] = useState({
    question: '',
    description: '',
    category: 'crypto',
    resolutionRules: '',
    endDate: '',
    endTime: '',
    initialLiquidity: '',
    imageUrl: '',
    imageFile: null
  });
  const [imagePreview, setImagePreview] = useState(null);

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check if file is an image
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }
      
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setFormData(prev => ({ ...prev, imageFile: file, imageUrl: '' }));
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setFormData(prev => ({ ...prev, imageFile: null, imageUrl: '' }));
    setImagePreview(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating new market:', formData);
    // Handle market creation
    // After successful creation, navigate to markets or the new market detail
    navigate('/beta/markets');
  };

  const minLiquidity = 100;

  if (!isConnected) {
    return (
      <div className="create-market-page">
        <div className="create-market-container">
          <div className="connect-prompt">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
              <line x1="1" y1="10" x2="23" y2="10"/>
            </svg>
            <h2>Connect Your Wallet</h2>
            <p>Please connect your wallet to create a new prediction market</p>
            <button className="connect-wallet-btn" onClick={connectWallet}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
                <line x1="1" y1="10" x2="23" y2="10"/>
              </svg>
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="create-market-page">
      <div className="create-market-container">
        {/* Page Header */}
        <div className="page-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            Back
          </button>
          <div className="header-content">
            <h1 className="page-title">Create New Market</h1>
            <p className="page-subtitle">Launch your own prediction market and earn fees from traders</p>
          </div>
        </div>

        <div className="create-market-layout">
          {/* Main Form */}
          <div className="form-section-wrapper">
            <form onSubmit={handleSubmit} className="market-form">
              {/* Market Question */}
              <div className="form-group">
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
              <div className="form-group">
                <label className="form-label required">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleChange('description', e.target.value)}
                  placeholder="Provide detailed context about this market. Explain what traders are predicting and why it matters."
                  className="form-textarea"
                  rows={5}
                  required
                  maxLength={500}
                />
                <div className="input-hint">{formData.description.length}/500 characters</div>
              </div>

              {/* Category */}
              <div className="form-group">
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
                <div className="input-hint">Choose the most relevant category for your market</div>
              </div>

              {/* Resolution Rules */}
              <div className="form-group">
                <label className="form-label required">Resolution Rules</label>
                <textarea
                  value={formData.resolutionRules}
                  onChange={(e) => handleChange('resolutionRules', e.target.value)}
                  placeholder="Define clear, objective criteria for how this market will be resolved. Include data sources and edge cases."
                  className="form-textarea"
                  rows={6}
                  required
                  maxLength={1000}
                />
                <div className="input-hint">{formData.resolutionRules.length}/1000 characters</div>
              </div>

              {/* End Date & Time */}
              <div className="form-row">
                <div className="form-group">
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
                <div className="form-group">
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
              <div className="form-group">
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
                    max={balance}
                    value={formData.initialLiquidity}
                    onChange={(e) => handleChange('initialLiquidity', e.target.value)}
                    placeholder={`Minimum ${minLiquidity}`}
                    className="form-input amount-input"
                    required
                  />
                </div>
                <div className="input-hint">
                  Minimum ${minLiquidity} required. Higher liquidity attracts more traders.
                </div>
              </div>

              {/* Image Upload */}
              <div className="form-group">
                <label className="form-label">Market Image (Optional)</label>
                
                {!imagePreview && !formData.imageUrl ? (
                  <div className="image-upload-area">
                    <input
                      type="file"
                      id="image-upload"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="image-input"
                    />
                    <label htmlFor="image-upload" className="image-upload-label">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                        <circle cx="8.5" cy="8.5" r="1.5"/>
                        <polyline points="21 15 16 10 5 21"/>
                      </svg>
                      <span className="upload-text">Click to upload image</span>
                      <span className="upload-hint">PNG, JPG, GIF up to 5MB</span>
                    </label>
                  </div>
                ) : (
                  <div className="image-preview-container">
                    <img src={imagePreview || formData.imageUrl} alt="Market preview" className="image-preview" />
                    <button type="button" onClick={removeImage} className="remove-image-btn">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="18" y1="6" x2="6" y2="18"/>
                        <line x1="6" y1="6" x2="18" y2="18"/>
                      </svg>
                      Remove
                    </button>
                  </div>
                )}
                
                <div className="input-hint">Add a relevant image to make your market more attractive</div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="submit-market-btn"
                disabled={!formData.question || !formData.description || !formData.resolutionRules || 
                         !formData.endDate || !formData.endTime || !formData.initialLiquidity ||
                         parseFloat(formData.initialLiquidity) < minLiquidity ||
                         parseFloat(formData.initialLiquidity) > balance}
              >
                Create Market
              </button>

              {parseFloat(formData.initialLiquidity) > balance && (
                <div className="error-message">
                  Insufficient balance.
                </div>
              )}
            </form>
          </div>

          {/* Sidebar - Info */}
          <div className="sidebar">
            {/* Info Cards */}
            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="12" y1="16" x2="12" y2="12"/>
                  <line x1="12" y1="8" x2="12.01" y2="8"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Market Review</h4>
                <p>Your market will be reviewed for quality and clarity. This typically takes up to 24 hours.</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Earn Trading Fees</h4>
                <p>As the market creator, you'll earn 1% of all trading volume as fees.</p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="info-content">
                <h4>Liquidity Lock</h4>
                <p>Initial liquidity will be locked until market resolution to ensure fair trading.</p>
              </div>
            </div>

            {/* Guidelines */}
            <div className="guidelines-card">
              <h4>Market Guidelines</h4>
              <ul>
                <li>Questions must be clear and unambiguous</li>
                <li>Include objective resolution criteria</li>
                <li>Specify trusted data sources</li>
                <li>Avoid sensitive or inappropriate content</li>
                <li>Set reasonable time frames</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMarket;

