import type React from \'react\';
import { useState } from \'react\';
import { Card } from './Card';
import { Input } from './Input';
import { Button } from './Button';
import { Alert } from './Alert';
import './AuthForm.css';

interface SignInProps {
  onToggleView: () => void;
}

export const SignIn: React.FC<SignInProps> = ({ onToggleView }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setIsLoading(true);
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
      // Success simulation or error
      if (email === 'error@test.com') {
        setError('Invalid email or password');
      } else {
        alert('Signed in successfully!');
      }
    }, 1000);
  };

  return (
    <Card className="auth-card animate-in">
      <div className="auth-header">
        <h2>Welcome back</h2>
        <p>Please enter your details to sign in.</p>
      </div>

      {error && <Alert type="error" message={error} />}

      <form onSubmit={handleSubmit} className="auth-form">
        <Input
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-field">
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
        </div>

        <Button type="submit" variant="primary" fullWidth disabled={isLoading} className="mt-4">
          {isLoading ? 'Signing in...' : 'Sign In'}
        </Button>
      </form>

      <div className="auth-footer">
        <p>
          Don't have an account?{' '}
          <button type="button" className="btn-link" onClick={onToggleView}>
            Sign up
          </button>
        </p>
      </div>
    </Card>
  );
};
