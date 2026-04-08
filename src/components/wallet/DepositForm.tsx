import type React from \'react\';
import { useState } from \'react\';
import { Select } from '../Select';
import { Input } from '../Input';
import { Button } from '../Button';
import './WalletStyles.css';

const MOCK_ASSETS = [
  { value: 'BTC', label: 'Bitcoin (BTC)' },
  { value: 'ETH', label: 'Ethereum (ETH)' },
  { value: 'USDT', label: 'Tether (USDT)' },
];

const MOCK_NETWORKS = [
  { value: 'ERC20', label: 'Ethereum (ERC20)' },
  { value: 'TRC20', label: 'Tron (TRC20)' },
  { value: 'BTC', label: 'Bitcoin Network' },
];

export const DepositForm: React.FC = () => {
  const [asset, setAsset] = useState('BTC');
  const [network, setNetwork] = useState('BTC');
  
  const mockAddress = `0xMockAddressFor${asset}On${network}984532890`;

  return (
    <div className="wallet-form animate-in">
      <Select 
        label="Select Asset" 
        options={MOCK_ASSETS} 
        value={asset} 
        onChange={e => setAsset(e.target.value)} 
      />
      
      <Select 
        label="Select Network" 
        options={MOCK_NETWORKS} 
        value={network} 
        onChange={e => setNetwork(e.target.value)} 
      />

      <div className="qr-container">
        <div className="qr-placeholder flex-center">
          QR Code
        </div>
      </div>

      <div className="address-container">
        <Input 
          label="Deposit Address" 
          value={mockAddress} 
          readOnly 
          className="address-input"
        />
        <Button variant="secondary" onClick={() => navigator.clipboard.writeText(mockAddress)}>
          Copy
        </Button>
      </div>
      
      <p className="wallet-note">
        Send only {asset} to this deposit address. Sending any other coin or token to this address may result in the loss of your deposit.
      </p>
    </div>
  );
};
