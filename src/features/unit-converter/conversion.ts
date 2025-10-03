import { LENGTH_FACTORS, WEIGHT_FACTORS, UNIT_NAMES } from '../../Config';
import { ConversionType } from './types';

export function convertLength(value: number, fromUnit: string, toUnit: string): number {
  const valueInMeters = value * LENGTH_FACTORS[fromUnit as keyof typeof LENGTH_FACTORS];
  return valueInMeters / LENGTH_FACTORS[toUnit as keyof typeof LENGTH_FACTORS];
}

export function convertWeight(value: number, fromUnit: string, toUnit: string): number {
  const valueInKg = value * WEIGHT_FACTORS[fromUnit as keyof typeof WEIGHT_FACTORS];
  return valueInKg / WEIGHT_FACTORS[toUnit as keyof typeof WEIGHT_FACTORS];
}

export function convertTemperature(value: number, fromUnit: string, toUnit: string): number {
  let celsius: number;

  switch(fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  switch(toUnit) {
    case 'celsius':
      return celsius;
    case 'fahrenheit':
      return celsius * 9/5 + 32;
    case 'kelvin':
      return celsius + 273.15;
    default:
      return celsius;
  }
}

export function getUnitFullName(unit: string, type: ConversionType): string {
  return UNIT_NAMES[type][unit as keyof typeof UNIT_NAMES[typeof type]] || unit;
}

export function generateFormula(
  value: number,
  fromUnit: string,
  toUnit: string,
  result: number,
  type: ConversionType
): string {
  if (fromUnit === toUnit) {
    return `${value} ${getUnitFullName(fromUnit, type)} = ${value} ${getUnitFullName(toUnit, type)}`;
  }

  switch (type) {
    case 'length':
      return generateLengthFormula(value, fromUnit, toUnit, result);
    case 'weight':
      return generateWeightFormula(value, fromUnit, toUnit, result);
    case 'temperature':
      return generateTemperatureFormula(value, fromUnit, toUnit, result);
    default:
      return '';
  }
}

function generateLengthFormula(value: number, fromUnit: string, toUnit: string, result: number): string {
  const valueInBase = value * LENGTH_FACTORS[fromUnit as keyof typeof LENGTH_FACTORS];
  return `計算式: ${value} ${getUnitFullName(fromUnit, 'length')} × ${LENGTH_FACTORS[fromUnit as keyof typeof LENGTH_FACTORS]} = ${valueInBase} m, ${valueInBase} m ÷ ${LENGTH_FACTORS[toUnit as keyof typeof LENGTH_FACTORS]} = ${result.toFixed(6)} ${getUnitFullName(toUnit, 'length')}`;
}

function generateWeightFormula(value: number, fromUnit: string, toUnit: string, result: number): string {
  const valueInBase = value * WEIGHT_FACTORS[fromUnit as keyof typeof WEIGHT_FACTORS];
  return `計算式: ${value} ${getUnitFullName(fromUnit, 'weight')} × ${WEIGHT_FACTORS[fromUnit as keyof typeof WEIGHT_FACTORS]} = ${valueInBase} kg, ${valueInBase} kg ÷ ${WEIGHT_FACTORS[toUnit as keyof typeof WEIGHT_FACTORS]} = ${result.toFixed(6)} ${getUnitFullName(toUnit, 'weight')}`;
}

function generateTemperatureFormula(value: number, fromUnit: string, toUnit: string, result: number): string {
  let formula = '計算式: ';
  let celsius: number;

  switch(fromUnit) {
    case 'celsius':
      celsius = value;
      break;
    case 'fahrenheit':
      formula += `(${value}°F - 32) × 5/9 = ${((value - 32) * 5/9).toFixed(2)}°C`;
      celsius = (value - 32) * 5/9;
      break;
    case 'kelvin':
      formula += `${value}K - 273.15 = ${(value - 273.15).toFixed(2)}°C`;
      celsius = value - 273.15;
      break;
    default:
      celsius = value;
  }

  switch(toUnit) {
    case 'celsius':
      break;
    case 'fahrenheit':
      if (fromUnit !== 'celsius') formula += ', ';
      formula += `${celsius.toFixed(2)}°C × 9/5 + 32 = ${result.toFixed(2)}°F`;
      break;
    case 'kelvin':
      if (fromUnit !== 'celsius') formula += ', ';
      formula += `${celsius.toFixed(2)}°C + 273.15 = ${result.toFixed(2)}K`;
      break;
  }

  return formula;
}