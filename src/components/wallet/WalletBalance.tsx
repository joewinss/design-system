import type React from \'react\';
import './WalletStyles.css';

interface WalletBalanceProps {
  balance: number;
  currency: string;
}

export const WalletBalance: React.FC<WalletBalanceProps> = ({ balance, currency }) => {
  return (
    <div className="wallet-balance-card animate-in">
      <span className="balance-label">Total Balance</span>
      <h2 className="balance-amount">
        {currency} {balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}
      </h2>
    </div>
  );
};
