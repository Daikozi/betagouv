import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import type { Article } from '@/models'
import { fetchArticles } from '@/services/firebaseQueries'

type UseFetchArticlesReturn = Pick<UseQueryResult<Article[]>, 'data' | 'isLoading' | 'isError'>

export const useFetchArticles = (): UseFetchArticlesReturn => {
  const { data, isLoading, isError } = useQuery<Article[]>({
    queryKey: ['articles'],
    queryFn: fetchArticles,
  })

  return { data, isLoading, isError }
}
