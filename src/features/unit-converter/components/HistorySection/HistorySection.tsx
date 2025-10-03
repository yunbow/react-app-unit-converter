import React from 'react';
import { Text } from '../../../../components/Text';
import { Button } from '../../../../components/Button';
import { HistoryItem } from '../../types';
import styles from './HistorySection.module.css';

interface HistorySectionProps {
  history: HistoryItem[];
  onClearHistory: () => void;
}

export const HistorySection: React.FC<HistorySectionProps> = ({
  history,
  onClearHistory
}) => {
  return (
    <div className={styles.historySection}>
      <Text variant="h3">変換履歴</Text>
      <ul className={styles.historyList}>
        {history.map((item) => (
          <li key={item.id} className={styles.historyItem}>
            {item.timestamp} {item.text}
          </li>
        ))}
      </ul>
      <Button variant="danger" onClick={onClearHistory} className={styles.clearButton}>
        履歴をクリア
      </Button>
    </div>
  );
};