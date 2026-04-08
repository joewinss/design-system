import type React from \'react\';
import { useState } from \'react\';
import { Select } from '../Select';
import { Input } from '../Input';
import { Button } from '../Button';
import './WalletStyles.css';

const MOCK_ASSETS = [
  { value: 'USDT', label: 'Tether (USDT) - Bal: $4,520' },
  { value: 'USDC', label: 'USD Coin (USDC) - Bal: $1,200' },
];

export const TransferForm: React.FC = () => {
  const [asset, setAsset] = useState('USDT');
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <div className="wallet-form animate-in">
      <Select 
        label="Select Asset" 
        options={MOCK_ASSETS} 
        value={asset} 
        onChange={e => setAsset(e.target.value)} 
      />

      <Input 
        label="Recipient UID or Email" 
        placeholder="e.g. 10045231 or user@example.com" 
        value={recipient}
        onChange={e => setRecipient(e.target.value)}
      />

      <Input 
        label="Amount" 
        placeholder="0.00" 
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />

      <p className="wallet-note info-note">
        Internal transfers are instant and require 0 network fees.
      </p>

      <Button variant="primary" fullWidth className="mt-4">
        Transfer Now
      </Button>
    </div>
  );
};
