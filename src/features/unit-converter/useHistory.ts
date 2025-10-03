import { useLocalStorage } from '../../hooks/useLocalStorage';
import { HistoryItem } from './types';

const HISTORY_KEY = 'unitConverterHistory';

export function useHistory() {
  const [history, setHistory] = useLocalStorage<HistoryItem[]>(HISTORY_KEY, []);

  const addToHistory = (text: string) => {
    const now = new Date();
    const timestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}`;

    const newItem: HistoryItem = {
      id: Date.now().toString(),
      timestamp: `[${timestamp}]`,
      text
    };

    setHistory(prev => [newItem, ...prev]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return {
    history,
    addToHistory,
    clearHistory
  };
}