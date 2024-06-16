import {
  createRootRouteWithContext,
  ErrorComponent,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/react-query'

interface IRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: () => (
    <main>
      <div className="flex flex-col h-screen">
        <Outlet />
      </div>
      <ReactQueryDevtools />
      <TanStackRouterDevtools />
    </main>
  ),
  errorComponent: (err) => <ErrorComponent error={err} />,
})
