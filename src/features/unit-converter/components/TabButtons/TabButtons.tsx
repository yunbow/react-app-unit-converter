import React from 'react';
import { Button } from '../../../../components/Button';
import { ConversionType } from '../../types';
import styles from './TabButtons.module.css';

interface TabButtonsProps {
  activeTab: ConversionType;
  onTabChange: (tab: ConversionType) => void;
}

export const TabButtons: React.FC<TabButtonsProps> = ({
  activeTab,
  onTabChange
}) => {
  const tabs: { key: ConversionType; label: string }[] = [
    { key: 'length', label: '長さ' },
    { key: 'weight', label: '重さ' },
    { key: 'temperature', label: '温度' }
  ];

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <Button
          key={tab.key}
          variant="tab"
          active={activeTab === tab.key}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};