const BNBIcon = ({ size = 16, className = '' }) => {
  return (
    <img 
      src="/bnb-bnb-logo.png" 
      alt="BNB" 
      width={size} 
      height={size} 
      className={`bnb-icon ${className}`}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
};

export default BNBIcon;

