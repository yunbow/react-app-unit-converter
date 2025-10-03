import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';
import { LENGTH_UNITS } from '../Config';

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const LengthUnits: Story = {
  args: {
    value: 'm',
    options: LENGTH_UNITS,
  },
};