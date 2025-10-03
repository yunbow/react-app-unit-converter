import { LengthUnit, WeightUnit, TemperatureUnit, UnitOption } from './features/unit-converter/types';

export const LENGTH_FACTORS: Record<LengthUnit, number> = {
  mm: 0.001,
  cm: 0.01,
  m: 1,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34
};

export const WEIGHT_FACTORS: Record<WeightUnit, number> = {
  mg: 0.000001,
  g: 0.001,
  kg: 1,
  t: 1000,
  oz: 0.0283495,
  lb: 0.453592
};

export const LENGTH_UNITS: UnitOption[] = [
  { value: 'mm', label: 'ミリメートル (mm)' },
  { value: 'cm', label: 'センチメートル (cm)' },
  { value: 'm', label: 'メートル (m)' },
  { value: 'km', label: 'キロメートル (km)' },
  { value: 'in', label: 'インチ (in)' },
  { value: 'ft', label: 'フィート (ft)' },
  { value: 'yd', label: 'ヤード (yd)' },
  { value: 'mi', label: 'マイル (mi)' }
];

export const WEIGHT_UNITS: UnitOption[] = [
  { value: 'mg', label: 'ミリグラム (mg)' },
  { value: 'g', label: 'グラム (g)' },
  { value: 'kg', label: 'キログラム (kg)' },
  { value: 't', label: 'トン (t)' },
  { value: 'oz', label: 'オンス (oz)' },
  { value: 'lb', label: 'ポンド (lb)' }
];

export const TEMPERATURE_UNITS: UnitOption[] = [
  { value: 'celsius', label: '摂氏 (°C)' },
  { value: 'fahrenheit', label: '華氏 (°F)' },
  { value: 'kelvin', label: 'ケルビン (K)' }
];

export const UNIT_NAMES = {
  length: {
    mm: 'ミリメートル (mm)',
    cm: 'センチメートル (cm)',
    m: 'メートル (m)',
    km: 'キロメートル (km)',
    in: 'インチ (in)',
    ft: 'フィート (ft)',
    yd: 'ヤード (yd)',
    mi: 'マイル (mi)'
  },
  weight: {
    mg: 'ミリグラム (mg)',
    g: 'グラム (g)',
    kg: 'キログラム (kg)',
    t: 'トン (t)',
    oz: 'オンス (oz)',
    lb: 'ポンド (lb)'
  },
  temperature: {
    celsius: '摂氏 (°C)',
    fahrenheit: '華氏 (°F)',
    kelvin: 'ケルビン (K)'
  }
};