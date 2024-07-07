import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta = {
  title: 'Button',
  component: Button,
  // Set the Default Arguments for each Button Story here!
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    variant: {
      control: 'select',
    },
    size: {
      control: 'radio',
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    disabled: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
