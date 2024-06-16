import { routeTree } from '@/routeTree.gen'
import { createRouter } from '@tanstack/react-router'
import { queryClient } from '@/lib/query'
import { localStoragePersister } from '@/lib/query'

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    persister: localStoragePersister,
  },
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
