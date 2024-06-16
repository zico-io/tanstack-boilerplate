import { routeTree } from '@/routeTree.gen'
import { createRouter } from '@tanstack/react-router'
import { queryClient } from '@/lib/query'

export const router = createRouter({
  routeTree,
  context: {
    queryClient,

    /* eslint-disable */
    auth: undefined!,
    // Defined on initialization in main.tsx
    // TODO: Find a way to make this typesafe
    /* eslint-enable */
  },
  defaultPreload: 'intent',
})

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
