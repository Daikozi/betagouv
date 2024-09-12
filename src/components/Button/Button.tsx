import type { ButtonHTMLAttributes, FC } from 'react'

import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'

const Button: FC<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  children,
  disabled = false,
  noOutline = false,
  ...rest
}) => {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${variant === 'tertiary' && noOutline ? styles.noOutline : undefined} ${styles[size]} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      type="button"
      {...rest}
    >
      {iconLeft && <span className={styles['icon-left']}>{iconLeft}</span>}
      {children}
      {iconRight && <span className={styles['icon-right']}>{iconRight}</span>}
    </button>
  )
}

export default Button
