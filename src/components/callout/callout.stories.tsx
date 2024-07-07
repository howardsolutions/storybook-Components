import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';
import { variationsOptions } from './callout-variants';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    children: 'Lorem is Lorem ipsum dolor sit amet, consectetur',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: variationsOptions,
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof Callout>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    title: 'Primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
    title: 'Information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    title: 'Success',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    title: 'Danger',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
  },
};
