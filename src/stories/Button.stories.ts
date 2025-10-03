import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'danger', 'tab'],
    },
    active: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: '変換',
    variant: 'primary',
  },
};

export const Danger: Story = {
  args: {
    children: '履歴をクリア',
    variant: 'danger',
  },
};

export const Tab: Story = {
  args: {
    children: '長さ',
    variant: 'tab',
    active: false,
  },
};

export const TabActive: Story = {
  args: {
    children: '長さ',
    variant: 'tab',
    active: true,
  },
};