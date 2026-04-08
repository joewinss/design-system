import type React from \'react\';
import { type HTMLAttributes } from \'react\';
import './Card.css';

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

export const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
  return (
    <div className={`brand-card ${className}`} {...props}>
      {children}
    </div>
  );
};
