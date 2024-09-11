import type { Meta, StoryObj } from '@storybook/react'

import Button from './Button'

export default {
  component: Button,
} satisfies Meta<typeof Button>

type Story = StoryObj<typeof Button>

export const Example: Story = {}
