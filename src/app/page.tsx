import Image from 'next/image'

import Card from '@/components/Card/Card'

import styles from './page.module.css'
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { fetchArticles } from '@/services/firebaseQueries'
import Articles from '@/components/Articles/Articles'

const Home = async () => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  })

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Articles />
        </HydrationBoundary>
      </main>
    </div>
  )
}

export default Home
