import React from 'react';
import styles from './Text.module.css';

interface TextProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'p' | 'formula' | 'footer';
  className?: string;
}

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'p',
  className = ''
}) => {
  const getVariantClass = () => {
    switch (variant) {
      case 'h1':
        return styles.h1;
      case 'h2':
        return styles.h2;
      case 'h3':
        return styles.h3;
      case 'formula':
        return styles.formula;
      case 'footer':
        return styles.footer;
      default:
        return '';
    }
  };

  const textClass = `${styles.text} ${getVariantClass()} ${className}`.trim();

  const Component = variant === 'h1' || variant === 'h2' || variant === 'h3' ? variant : 'div';

  return <Component className={textClass}>{children}</Component>;
};