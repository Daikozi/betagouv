import type { UseMutationResult } from '@tanstack/react-query'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { updateArticle } from '@/services/firebaseQueries'

type MutationVariables = {
  docId: string
  updatedData: any
}

type UseUpdateArticleReturn = Pick<UseMutationResult<any, void, MutationVariables>, 'mutate'>

export const useUpdateArticles = (): UseUpdateArticleReturn => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation<any, void, MutationVariables>({
    mutationFn: ({ docId, updatedData }: MutationVariables) => updateArticle('articles', docId, updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['articles'] })
    },
  })

  return { mutate }
}
