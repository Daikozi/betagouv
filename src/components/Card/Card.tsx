import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import React from 'react'

import media from '../../app/img/media.png'
import arrow from '../../app/svg/arrow.svg'
import Typography from '../Typography/Typography'
import styles from './Card.module.css'
import type { CardProps } from './Card.types'

const Card: FC<CardProps> = ({ description, image, link, title, isHorizontal = false }) => {
  return (
    <div className={isHorizontal ? styles.horizontal : styles.container}>
      <div className={`${styles.imageContainer}`}>
        <Image
          className={styles.image}
          src={image ?? media}
          width="282"
          height="159"
          alt="[À MODIFIER - vide ou texte alternatif de l’image]"
        />
      </div>
      <div className={`${styles.textContainer}`}>
        <Typography variant="h3">
          <Link href={link}>{title}</Link>
        </Typography>
        <Typography variant="md">{description}</Typography>
        <div className={styles.arrowContainer}>
          <Link href={link}>
            <Image src={arrow} width={32} height={32} alt="arrow" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
