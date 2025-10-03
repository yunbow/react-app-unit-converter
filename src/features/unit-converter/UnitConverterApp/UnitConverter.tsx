import React, { useState } from 'react';
import { Text } from '../../../components/Text';
import { Button } from '../../../components/Button';
import { TabButtons } from '../components/TabButtons';
import { ConverterSection } from '../components/ConverterSection';
import { HistorySection } from '../components/HistorySection';
import { ConversionType } from '../types';
import { useHistory } from '../useHistory';
import { convertLength, convertWeight, convertTemperature, generateFormula, getUnitFullName } from '../conversion';
import { LENGTH_UNITS, WEIGHT_UNITS, TEMPERATURE_UNITS } from '../../../Config';
import styles from './UnitConverter.module.css';

export const UnitConverter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ConversionType>('length');
  const [lengthInput, setLengthInput] = useState('');
  const [lengthOutput, setLengthOutput] = useState('');
  const [lengthFrom, setLengthFrom] = useState('m');
  const [lengthTo, setLengthTo] = useState('cm');
  const [lengthFormula, setLengthFormula] = useState('');

  const [weightInput, setWeightInput] = useState('');
  const [weightOutput, setWeightOutput] = useState('');
  const [weightFrom, setWeightFrom] = useState('kg');
  const [weightTo, setWeightTo] = useState('g');
  const [weightFormula, setWeightFormula] = useState('');

  const [temperatureInput, setTemperatureInput] = useState('');
  const [temperatureOutput, setTemperatureOutput] = useState('');
  const [temperatureFrom, setTemperatureFrom] = useState('celsius');
  const [temperatureTo, setTemperatureTo] = useState('fahrenheit');
  const [temperatureFormula, setTemperatureFormula] = useState('');

  const { history, addToHistory, clearHistory } = useHistory();

  const handleLengthConvert = () => {
    const inputValue = parseFloat(lengthInput);

    if (isNaN(inputValue)) {
      alert('有効な数値を入力してください');
      return;
    }

    const result = convertLength(inputValue, lengthFrom, lengthTo);
    setLengthOutput(result.toFixed(6));

    const formula = generateFormula(inputValue, lengthFrom, lengthTo, result, 'length');
    setLengthFormula(formula);

    addToHistory(`${inputValue} ${getUnitFullName(lengthFrom, 'length')} = ${result.toFixed(6)} ${getUnitFullName(lengthTo, 'length')}`);
  };

  const handleWeightConvert = () => {
    const inputValue = parseFloat(weightInput);

    if (isNaN(inputValue)) {
      alert('有効な数値を入力してください');
      return;
    }

    const result = convertWeight(inputValue, weightFrom, weightTo);
    setWeightOutput(result.toFixed(6));

    const formula = generateFormula(inputValue, weightFrom, weightTo, result, 'weight');
    setWeightFormula(formula);

    addToHistory(`${inputValue} ${getUnitFullName(weightFrom, 'weight')} = ${result.toFixed(6)} ${getUnitFullName(weightTo, 'weight')}`);
  };

  const handleTemperatureConvert = () => {
    const inputValue = parseFloat(temperatureInput);

    if (isNaN(inputValue)) {
      alert('有効な数値を入力してください');
      return;
    }

    const result = convertTemperature(inputValue, temperatureFrom, temperatureTo);
    setTemperatureOutput(result.toFixed(2));

    const formula = generateFormula(inputValue, temperatureFrom, temperatureTo, result, 'temperature');
    setTemperatureFormula(formula);

    addToHistory(`${inputValue} ${getUnitFullName(temperatureFrom, 'temperature')} = ${result.toFixed(2)} ${getUnitFullName(temperatureTo, 'temperature')}`);
  };

  return (
    <div className={styles.container}>
      <Text variant="h1">単位変換ツール</Text>

      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />

      <div className={`${styles.tabContent} ${activeTab === 'length' ? styles.active : ''}`}>
        <Text variant="h2">長さの単位変換</Text>
        <ConverterSection
          inputValue={lengthInput}
          outputValue={lengthOutput}
          fromUnit={lengthFrom}
          toUnit={lengthTo}
          units={LENGTH_UNITS}
          onInputChange={(e) => setLengthInput(e.target.value)}
          onFromUnitChange={(e) => setLengthFrom(e.target.value)}
          onToUnitChange={(e) => setLengthTo(e.target.value)}
        />
        <Button onClick={handleLengthConvert}>変換</Button>
        <Text variant="formula">{lengthFormula}</Text>
      </div>

      <div className={`${styles.tabContent} ${activeTab === 'weight' ? styles.active : ''}`}>
        <Text variant="h2">重さの単位変換</Text>
        <ConverterSection
          inputValue={weightInput}
          outputValue={weightOutput}
          fromUnit={weightFrom}
          toUnit={weightTo}
          units={WEIGHT_UNITS}
          onInputChange={(e) => setWeightInput(e.target.value)}
          onFromUnitChange={(e) => setWeightFrom(e.target.value)}
          onToUnitChange={(e) => setWeightTo(e.target.value)}
        />
        <Button onClick={handleWeightConvert}>変換</Button>
        <Text variant="formula">{weightFormula}</Text>
      </div>

      <div className={`${styles.tabContent} ${activeTab === 'temperature' ? styles.active : ''}`}>
        <Text variant="h2">温度の単位変換</Text>
        <ConverterSection
          inputValue={temperatureInput}
          outputValue={temperatureOutput}
          fromUnit={temperatureFrom}
          toUnit={temperatureTo}
          units={TEMPERATURE_UNITS}
          onInputChange={(e) => setTemperatureInput(e.target.value)}
          onFromUnitChange={(e) => setTemperatureFrom(e.target.value)}
          onToUnitChange={(e) => setTemperatureTo(e.target.value)}
        />
        <Button onClick={handleTemperatureConvert}>変換</Button>
        <Text variant="formula">{temperatureFormula}</Text>
      </div>

      <HistorySection history={history} onClearHistory={clearHistory} />

    </div>
  );
};