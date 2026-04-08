import type React from 'react';
import './Switch.css';

interface SwitchProps {
  id?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  description?: string;
}

export const Switch: React.FC<SwitchProps> = ({ id, label, checked, onChange, description }) => {
  const switchId = id || `switch-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="brand-switch-container">
      <div className="switch-text-wrapper">
        <label htmlFor={switchId} className="switch-label">{label}</label>
        {description && <p className="switch-description">{description}</p>}
      </div>
      <button
        id={switchId}
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`brand-switch ${checked ? 'switch-on' : 'switch-off'}`}
      >
        <span className="switch-thumb" />
      </button>
    </div>
  );
};
