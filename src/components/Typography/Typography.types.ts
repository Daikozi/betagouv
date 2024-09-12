import type { ReactNode } from 'react'

export type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'displayXL'
  | 'displayLG'
  | 'displayMD'
  | 'displaySM'
  | 'displayXS'
  | 'lead'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'

export type TypographyProps = {
  variant: Variant
  className?: string
  children: ReactNode
}
