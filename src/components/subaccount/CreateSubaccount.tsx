import type React from 'react';
import { useState } from 'react';
import { Card } from '../Card';
import { Input } from '../Input';
import { Select } from '../Select';
import { Button } from '../Button';
import { Alert } from '../Alert';
import { RadioCard } from '../RadioCard';
import './CreateSubaccount.css';

// Reusing some SVG icons for the payment mock
const BankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="10" width="18" height="10" rx="2"></rect>
    <path d="M7 14h.01"></path>
    <path d="M11 14h.01"></path>
    <path d="M15 14h.01"></path>
    <path d="M3 6l9-4 9 4"></path>
  </svg>
);

const PayLaterIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M12 8v4l3 3"></path>
  </svg>
);

const OnlineBankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12H3"></path>
    <path d="M18 12V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6"></path>
    <rect x="3" y="16" width="18" height="6" rx="2"></rect>
  </svg>
);

const LinkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
  </svg>
);

const SelfPayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CheckIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--success)" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
  </svg>
);

export const CreateSubaccount: React.FC = () => {
  const [username, setUsername] = useState('Username-1');
  const [email, setEmail] = useState('Email');
  const [password, setPassword] = useState('123456');
  const [referral, setReferral] = useState('User 1');
  const [placement, setPlacement] = useState('User 1');
  
  const [paymentMethod, setPaymentMethod] = useState('bank');
  const [paymentPreference, setPaymentPreference] = useState('link');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Subaccount Creation Started!');
  };

  return (
    <Card className="subaccount-redesign-container animate-in">
      <div className="subaccount-header-nav">
        <button className="back-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          Back
        </button>
      </div>

      <div className="subaccount-titles">
        <h2>Create a Subaccount</h2>
        <p>Add a subaccount under your main account. Quick setup, full access, rewards flow to you.</p>
      </div>

      <div className="subaccount-alert-wrapper">
        <Alert type="info" message="Profile information like contact details will be automatically synced from your main account." />
      </div>

      <form onSubmit={handleSubmit} className="subaccount-redesign-form">
        
        <Input 
          label="Username *"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          rightElement={username ? <CheckIcon /> : undefined}
          required
        />

        <Input 
          label="Email * (Used for contact only)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          rightElement={email ? <CheckIcon /> : undefined}
          required
        />

        <Input 
          label="Temporary Password *"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="referral-field-group">
          <Input 
            label="Referral"
            value={referral}
            onChange={(e) => setReferral(e.target.value)}
            rightElement={referral ? <CheckIcon /> : undefined}
            className="referral-input flex-1"
          />
          <Button variant="secondary" className="edit-btn" type="button">Edit</Button>
        </div>
        <p className="field-meta-link">Full Name</p>

        <Select 
          label="Placement"
          options={[{ value: 'User 1', label: 'User 1' }]}
          value={placement}
          onChange={(e) => setPlacement(e.target.value)}
        />

        <div className="payment-section mt-6">
          <h3 className="section-label">Payment Method</h3>
          
          <RadioCard 
            id="pm-bank"
            name="payment_method"
            value="bank"
            icon={<BankIcon />}
            title="Bank Transfer"
            description="Make a one-time manual payment via bank transfer."
            checked={paymentMethod === 'bank'}
            onChange={setPaymentMethod}
          />
          
          <RadioCard 
            id="pm-later"
            name="payment_method"
            value="later"
            icon={<PayLaterIcon />}
            title="Pay Later"
            description="Sign up now and complete your payment within 3 days."
            checked={paymentMethod === 'later'}
            onChange={setPaymentMethod}
          />

          <RadioCard 
            id="pm-online"
            name="payment_method"
            value="online"
            icon={<OnlineBankIcon />}
            title="Online Banking"
            description="Secure payment via FPX online banking."
            checked={paymentMethod === 'online'}
            onChange={setPaymentMethod}
          />
        </div>

        <div className="payment-section mt-2">
          <h3 className="section-label">Payment Preference</h3>
          
          <RadioCard 
            id="pp-link"
            name="payment_preference"
            value="link"
            icon={<LinkIcon />}
            title="Get Payment Link"
            description="Send this link to the user to complete payment."
            checked={paymentPreference === 'link'}
            onChange={setPaymentPreference}
          />

          <RadioCard 
            id="pp-self"
            name="payment_preference"
            value="self"
            icon={<SelfPayIcon />}
            title="I'll Pay for This"
            description="Proceed to pay on behalf of the user."
            checked={paymentPreference === 'self'}
            onChange={setPaymentPreference}
          />
        </div>

        <div className="sticky-footer">
          <Button type="submit" variant="primary" fullWidth className="submit-btn-large">
            Create Account / Proceed to Payment
          </Button>
        </div>
      </form>
    </Card>
  );
};
