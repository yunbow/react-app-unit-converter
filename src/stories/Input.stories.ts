import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'number'],
    },
    readOnly: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: '',
    placeholder: '値を入力',
    type: 'number',
  },
};

export const WithValue: Story = {
  args: {
    value: '100',
    type: 'number',
  },
};

export const ReadOnly: Story = {
  args: {
    value: '100.000000',
    type: 'number',
    readOnly: true,
  },
};