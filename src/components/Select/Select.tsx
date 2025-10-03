import React from 'react';
import { UnitOption } from '../../features/unit-converter/types';
import styles from './Select.module.css';

interface SelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: UnitOption[];
  className?: string;
}

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  options,
  className = ''
}) => {
  const selectClass = `${styles.select} ${className}`.trim();

  return (
    <select value={value} onChange={onChange} className={selectClass}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};