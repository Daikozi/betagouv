'use client'

import type { FC } from 'react'

import { useFetchArticles } from '@/hooks/useFetchArticles'

import Card from '../Card/Card'
import styles from './Articles.module.css'

const Articles: FC = () => {
  const { data } = useFetchArticles()

  if (!data || !data.length) {
    return
  }

  const [firstArticle] = data

  return (
    <>
      <div className={styles.topArticle}>
        <Card
          title={firstArticle.title}
          description={firstArticle.description}
          link={`/article/${firstArticle.id}/`}
          isHorizontal
        />
      </div>
      <div className={styles.cardContainer}>
        {data.map(({ title, description, id }, index) => {
          if (!index) {
            return
          }
          return <Card title={title} description={description} link={`/article/${id}/`} key={id} />
        })}
      </div>
    </>
  )
}

export default Articles
