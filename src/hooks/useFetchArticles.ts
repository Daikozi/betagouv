import type { UseQueryResult } from '@tanstack/react-query'
import { useQuery } from '@tanstack/react-query'

import { fetchArticles } from '@/services/firebaseQueries'

type UseFetchArticlesReturn = Pick<UseQueryResult<any>, 'data' | 'isLoading' | 'isError'>

export const useFetchArticles = (): UseFetchArticlesReturn => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['documents'],
    queryFn: () => fetchArticles('articles'),
  })

  return { data, isLoading, isError }
}
