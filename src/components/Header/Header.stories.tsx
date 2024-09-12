import type { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

export default {
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>

type Story = StoryObj<typeof Header>

export const H1: Story = {
  args: {
    children: 'Titre h1',
    variant: 'h1',
  },
}
export const H2: Story = {
  args: {
    children: 'Titre h2',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    children: 'Titre h3',
    variant: 'h3',
  },
}
export const H4: Story = {
  args: {
    children: 'Titre h4',
    variant: 'h4',
  },
}
export const H5: Story = {
  args: {
    children: 'Titre h5',
    variant: 'h5',
  },
}
export const H6: Story = {
  args: {
    children: 'Titre h6',
    variant: 'h6',
  },
}
