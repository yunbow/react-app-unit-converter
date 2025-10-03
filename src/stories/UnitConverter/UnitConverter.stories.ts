import type { Meta, StoryObj } from '@storybook/react';
import { UnitConverter } from '../../features/unit-converter/UnitConverterApp';

const meta: Meta<typeof UnitConverter> = {
  title: 'Features/UnitConverter',
  component: UnitConverter,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};