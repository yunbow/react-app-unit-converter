import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../components/Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'p', 'formula', 'footer'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    children: '単位変換ツール',
    variant: 'h1',
  },
};

export const Heading2: Story = {
  args: {
    children: '長さの単位変換',
    variant: 'h2',
  },
};

export const Formula: Story = {
  args: {
    children: '計算式: 1 メートル (m) × 1 = 1 m, 1 m ÷ 0.01 = 100.000000 センチメートル (cm)',
    variant: 'formula',
  },
};

export const Footer: Story = {
  args: {
    children: '',
    variant: 'footer',
  },
};