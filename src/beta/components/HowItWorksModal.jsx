import './HowItWorksModal.css'

const HowItWorksModal = ({ onClose }) => {
  const features = [
    {
      icon: '💰',
      title: 'Trade Markets',
      description: 'Buy and sell shares on outcomes'
    },
    {
      icon: '🚀',
      title: 'Create Markets',
      description: 'Launch your own prediction markets'
    },
    {
      icon: '💎',
      title: 'Provide Liquidity',
      description: 'Fund markets and earn rewards'
    }
  ]

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">How It Works</h2>
          <button className="modal-close" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="modal-body">
          <p className="modal-subtitle">Choose your path to get started</p>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="button-primary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default HowItWorksModal

