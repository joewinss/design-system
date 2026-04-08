import type React from \'react\';
import './Alert.css';

interface AlertProps {
  type?: 'success' | 'warning' | 'error' | 'info';
  message: string;
}

export const Alert: React.FC<AlertProps> = ({ type = 'info', message }) => {
  return (
    <div className={`brand-alert alert-${type} animate-in`}>
      <span className="alert-message">{message}</span>
    </div>
  );
};
