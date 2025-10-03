import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'danger' | 'tab';
  active?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  active = false,
  className = ''
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'danger':
        return styles.danger;
      case 'tab':
        return `${styles.tab} ${active ? styles.active : ''}`;
      default:
        return styles.primary;
    }
  };

  const buttonClass = `${styles.button} ${getVariantClass()} ${className}`.trim();

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};