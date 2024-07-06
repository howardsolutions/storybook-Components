import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  args: {
    children: 'My Button',
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
};
