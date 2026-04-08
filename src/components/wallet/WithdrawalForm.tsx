import React, { useState } from 'react';
import { Select } from '../Select';
import { Input } from '../Input';
import { Button } from '../Button';
import { Alert } from '../Alert';
import './WalletStyles.css';

const MOCK_ASSETS = [
  { value: 'BTC', label: 'Bitcoin (BTC) - Bal: 1.2' },
  { value: 'ETH', label: 'Ethereum (ETH) - Bal: 14.5' },
];

export const WithdrawalForm: React.FC = () => {
  const [asset, setAsset] = useState('BTC');
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');

  const handleMax = () => setAmount(asset === 'BTC' ? '1.2' : '14.5');

  return (
    <div className="wallet-form animate-in">
      <Select 
        label="Select Asset" 
        options={MOCK_ASSETS} 
        value={asset} 
        onChange={e => setAsset(e.target.value)} 
      />

      <Input 
        label="Destination Address" 
        placeholder="Enter withdrawal address" 
        value={address}
        onChange={e => setAddress(e.target.value)}
      />

      <div className="amount-input-wrapper">
        <Input 
          label="Amount" 
          placeholder="0.00" 
          type="number"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <div className="max-btn-wrapper">
           <button type="button" className="max-btn" onClick={handleMax}>Max</button>
        </div>
      </div>

      <Alert type="warning" message="Ensure the network matches the destination address. Network fee: ~0.0005 BTC" />

      <Button variant="primary" fullWidth className="mt-4">
        Withdraw Funds
      </Button>
    </div>
  );
};
