import type React from 'react';
import { type ReactNode } from 'react';
import './RadioCard.css';

interface RadioCardProps {
  id: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
  icon?: ReactNode;
  title: string;
  description: string;
}

export const RadioCard: React.FC<RadioCardProps> = ({
  id,
  name,
  value,
  checked,
  onChange,
  icon,
  title,
  description,
}) => {
  return (
    <label htmlFor={id} className={`radio-card ${checked ? 'selected' : ''}`}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={() => onChange(value)}
        className="radio-card-input"
      />
      <div className="radio-card-content">
        {icon && <div className="radio-card-icon">{icon}</div>}
        <div className="radio-card-text">
          <span className="radio-card-title">{title}</span>
          <span className="radio-card-description">{description}</span>
        </div>
      </div>
      <div className="radio-card-indicator">
        <div className="indicator-inner" />
      </div>
    </label>
  );
};
