export type LengthUnit = 'mm' | 'cm' | 'm' | 'km' | 'in' | 'ft' | 'yd' | 'mi';
export type WeightUnit = 'mg' | 'g' | 'kg' | 't' | 'oz' | 'lb';
export type TemperatureUnit = 'celsius' | 'fahrenheit' | 'kelvin';

export type ConversionType = 'length' | 'weight' | 'temperature';

export interface ConversionResult {
  value: number;
  formula: string;
}

export interface HistoryItem {
  id: string;
  timestamp: string;
  text: string;
}

export interface UnitOption {
  value: string;
  label: string;
}

export interface ConversionConfig {
  inputValue: number;
  fromUnit: string;
  toUnit: string;
  type: ConversionType;
}