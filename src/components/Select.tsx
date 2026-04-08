import React, { type SelectHTMLAttributes, forwardRef } from 'react';
import './Input.css'; // Reusing input styles for consistency
import './Select.css'; // Additional Select specific styles

interface Option {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  error?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, options, error, id, className = '', ...props }, ref) => {
    const defaultId = id || `select-${label.replace(/\s+/g, '-').toLowerCase()}`;
    const errorClass = error ? 'input-error' : '';

    return (
      <div className={`input-fluid ${className}`}>
        <label htmlFor={defaultId} className="input-label">
          {label}
        </label>
        <div className="select-wrapper">
          <select
            ref={ref}
            id={defaultId}
            className={`brand-input brand-select ${errorClass}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="select-icon">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        {error && <span className="input-error-msg">{error}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';
