import { QueryClient, QueryKey } from '@tanstack/react-query'
import { useAxios } from '../axios'

/* eslint-disable */
const defaultQueryFn = async ({ queryKey }: { queryKey: QueryKey }) => {
  const response = await useAxios.get(queryKey[0].toString(), {
    withCredentials: true,
  })

  return response
}
/* eslint-enable */

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
      staleTime: 1000 * 60 * 60 * 24,
      retry: false,
    },
  },
})
