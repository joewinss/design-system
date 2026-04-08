import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  error?: string;
  rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, rightElement, id, className = '', ...props }, ref) => {
    // Generate an ID if label is a string
    const defaultId = id || (typeof label === 'string' ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : `input-${Math.random().toString(36).substring(7)}`);
    const errorClass = error ? 'input-error' : '';

    return (
      <div className={`input-fluid ${className}`}>
        {label && (
          <label htmlFor={defaultId} className="input-label">
            {label}
          </label>
        )}
        <div className="input-field-wrapper">
          <input
            ref={ref}
            id={defaultId}
            className={`brand-input ${errorClass} ${rightElement ? 'has-right-element' : ''}`}
            {...props}
          />
          {rightElement && <div className="input-right-element">{rightElement}</div>}
        </div>
        {error && <span className="input-error-msg">{error}</span>}
      </div>
    );
  }
);

Input.displayName = 'Input';
