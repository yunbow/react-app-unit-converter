import React from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'number';
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
}

export const Input: React.FC<InputProps> = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  readOnly = false,
  className = ''
}) => {
  const inputClass = `${styles.input} ${className}`.trim();

  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
      className={inputClass}
    />
  );
};