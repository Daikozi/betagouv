import type { ReactNode } from 'react'

export type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'tertiary'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
  noOutline?: boolean
} & (
  | {
      iconLeft?: ReactNode
      iconRight?: never
    }
  | {
      iconLeft?: never
      iconRight?: ReactNode
    }
)
