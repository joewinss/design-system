import type React from \'react\';
import { useState } from \'react\';
import { Card } from '../Card';
import { Tabs } from '../Tabs';
import { WalletBalance } from './WalletBalance';
import { DepositForm } from './DepositForm';
import { WithdrawalForm } from './WithdrawalForm';
import { TransferForm } from './TransferForm';

export const WalletView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('deposit');

  const WALLET_TABS = [
    { id: 'deposit', label: 'Deposit' },
    { id: 'withdraw', label: 'Withdraw' },
    { id: 'transfer', label: 'Transfer' },
  ];

  return (
    <Card className="wallet-card-container">
      <WalletBalance balance={15243.85} currency="USD" />
      
      <Tabs 
        tabs={WALLET_TABS} 
        activeTab={activeTab} 
        onChange={setActiveTab} 
      />

      <div className="wallet-tab-content">
        {activeTab === 'deposit' && <DepositForm />}
        {activeTab === 'withdraw' && <WithdrawalForm />}
        {activeTab === 'transfer' && <TransferForm />}
      </div>
    </Card>
  );
};
