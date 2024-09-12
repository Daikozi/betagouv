import type { ElementType, FC, HTMLAttributes } from 'react'
import React from 'react'

import styles from './Typography.module.css'
import type { TypographyProps } from './Typography.types'

const Typography: FC<TypographyProps & HTMLAttributes<HTMLParagraphElement>> = ({
  variant = 'md',
  className = '',
  children,
}) => {
  const variantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    displayXL: 'p',
    displayLG: 'p',
    displayMD: 'p',
    displaySM: 'p',
    displayXS: 'p',
    lead: 'p',
    lg: 'p',
    md: 'p',
    sm: 'p',
    xs: 'p',
  } satisfies Record<string, ElementType>

  const Element = variantMapping[variant]
  const baseClass = `${styles[variant]} ${className}`

  return <Element className={baseClass}>{children}</Element>
}

export default Typography
