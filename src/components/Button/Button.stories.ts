import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

export default {
  component: Button,
  args: {
    children: 'Label bouton',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Primary: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
}

export const TertiaryNoOutline: Story = {
  args: {
    variant: 'tertiary',
    noOutline: true,
  },
}

export const DisabledPrimary: Story = {
  args: {
    disabled: true,
  },
}

export const DisabledSecondary: Story = {
  args: {
    disabled: true,
    variant: 'secondary',
  },
}

export const DisabledTernary: Story = {
  args: {
    disabled: true,
    variant: 'tertiary',
  },
}

export const DisabledTernaryNoOutline: Story = {
  args: {
    disabled: true,
    variant: 'tertiary',
    noOutline: true,
  },
}

export const WithIcon: Story = {
  args: {
    iconLeft: 'Test',
  },
}
