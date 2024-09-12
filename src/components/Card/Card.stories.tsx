import type { Meta, StoryObj } from '@storybook/react'

import Card from './Card'

export default {
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    title: "Qu'est-ce que le Pass Culture et comment l’obtenir ?",
    description:
      "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    link: 'http://www.google.fr/',
  },
}

export const Horizontal: Story = {
  args: {
    title: "Qu'est-ce que le Pass Culture et comment l’obtenir ?",
    description:
      "La carte donne des aperçus cliquables d’une page de contenu à l’utilisateur. Elle fait généralement partie d'une collection ou liste d’aperçus de contenu similaires. La carte n’est jamais présentée de manière isolée.",
    link: 'http://www.google.fr/',
    isHorizontal: true,
  },
}
