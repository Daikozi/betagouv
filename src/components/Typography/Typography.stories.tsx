import type { Meta, StoryObj } from '@storybook/react'

import Typography from './Typography'

export default {
  component: Typography,
  tags: ['autodocs'],
} satisfies Meta<typeof Typography>

type Story = StoryObj<typeof Typography>

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

export const TitreAlternatifXl: Story = {
  args: {
    children: 'Titre alternatif XL',
    variant: 'displayXL',
  },
}

export const TitreAlternatifLg: Story = {
  args: {
    children: 'Titre alternatif LG',
    variant: 'displayLG',
  },
}

export const TitreAlternatifMd: Story = {
  args: {
    children: 'Titre alternatif MD',
    variant: 'displayMD',
  },
}

export const TitreAlternatifSm: Story = {
  args: {
    children: 'Titre alternatif SM',
    variant: 'displaySM',
  },
}

export const TitreAlternatifXs: Story = {
  args: {
    children: 'Titre alternatif XS',
    variant: 'displayXS',
  },
}

export const XlTexteChapô: Story = {
  args: {
    children: 'XL - Chapo',
    variant: 'lead',
  },
}

export const LgTextArticle: Story = {
  args: {
    children: 'LG - Texte article',
    variant: 'lg',
  },
}

export const MdTexteStandard: Story = {
  args: {
    children: 'MD - Texte standard',
    variant: 'md',
  },
}

export const SmTexteDétail: Story = {
  args: {
    children: 'SM - Texte détail',
    variant: 'sm',
  },
}

export const XsTexteMention: Story = {
  args: {
    children: 'XS - Texte mention',
    variant: 'xs',
  },
}
