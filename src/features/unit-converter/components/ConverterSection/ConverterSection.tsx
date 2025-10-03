import React from 'react';
import { Input } from '../../../../components/Input';
import { Select } from '../../../../components/Select';
import { UnitOption } from '../../types';
import styles from './ConverterSection.module.css';

interface ConverterSectionProps {
  inputValue: string;
  outputValue: string;
  fromUnit: string;
  toUnit: string;
  units: UnitOption[];
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFromUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onToUnitChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const ConverterSection: React.FC<ConverterSectionProps> = ({
  inputValue,
  outputValue,
  fromUnit,
  toUnit,
  units,
  onInputChange,
  onFromUnitChange,
  onToUnitChange
}) => {
  return (
    <div className={styles.converterSection}>
      <div className={styles.inputGroup}>
        <Input
          type="number"
          value={inputValue}
          onChange={onInputChange}
          placeholder="値を入力"
        />
        <Select
          value={fromUnit}
          onChange={onFromUnitChange}
          options={units}
        />
      </div>
      <div className={styles.arrow}>→</div>
      <div className={styles.inputGroup}>
        <Input
          type="number"
          value={outputValue}
          readOnly
        />
        <Select
          value={toUnit}
          onChange={onToUnitChange}
          options={units}
        />
      </div>
    </div>
  );
};