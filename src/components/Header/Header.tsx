import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import logo from '../../app/img/logo.jpg'
import Admin from '../Admin/Admin'
import Logout from '../Logout/Logout'
import SignUp from '../SignUp/SignUp'
import Typography from '../Typography/Typography'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header role="banner" className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image className={styles.logo} src={logo} width={110} height={55} alt="beta.gouv.fr" />
        </Link>
        <Typography variant="lead">Le Blog de l&apos;État</Typography>
      </div>
      <div className={styles.buttonContainer}>
        {/* <SignIn /> */}
        <SignUp />
        <Logout />
        <Admin />
      </div>
    </header>
  )
}

export default Header
