import { createContext, useContext, useState, useEffect } from 'react';

const WalletContext = createContext();

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    // Check if wallet was previously connected
    const savedWallet = localStorage.getItem('walletConnected');
    const savedAddress = localStorage.getItem('walletAddress');
    const savedBalance = localStorage.getItem('walletBalance');
    
    if (savedWallet === 'true' && savedAddress && savedBalance) {
      setAddress(savedAddress);
      setBalance(parseFloat(savedBalance));
      setIsConnected(true);
    }
  }, []);

  const connectWallet = () => {
    // Simulate wallet connection with dummy data
    // Generate random 4-digit number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const dummyAddress = `0x${randomNum}...${Math.floor(1000 + Math.random() * 9000)}`;
    const dummyBalance = parseFloat((Math.random() * 5000 + 500).toFixed(2));

    setAddress(dummyAddress);
    setBalance(dummyBalance);
    setIsConnected(true);
    localStorage.setItem('walletConnected', 'true');
    localStorage.setItem('walletAddress', dummyAddress);
    localStorage.setItem('walletBalance', dummyBalance.toString());
  };

  const disconnectWallet = () => {
    setAddress('');
    setBalance(0);
    setIsConnected(false);
    localStorage.removeItem('walletConnected');
    localStorage.removeItem('walletAddress');
    localStorage.removeItem('walletBalance');
  };

  const value = {
    isConnected,
    address,
    balance,
    connectWallet,
    disconnectWallet
  };

  return (
    <WalletContext.Provider value={value}>
      {children}
    </WalletContext.Provider>
  );
};

export default WalletContext;

