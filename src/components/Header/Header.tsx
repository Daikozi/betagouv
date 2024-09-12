import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../app/img/logo.jpg'
import Button from '../Button/Button'
import Typography from '../Typography/Typography'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="http://www.localhost:3000/">
          <Image className={styles.logo} src={logo} width={110} height={55} alt="beta.gouv.fr" />
        </Link>
        <Typography variant="lead">Le Blog de l&apos;État</Typography>
      </div>
      <div className={styles.buttonContainer}>
        <Button>Sign In</Button>
        <Button>Login</Button>
      </div>
    </header>
  )
}

export default Header
