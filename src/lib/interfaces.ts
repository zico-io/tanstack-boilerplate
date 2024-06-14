import { QueryClient } from '@tanstack/react-query'

export interface IRouterContext {
  queryClient: QueryClient
  auth?: object
}

export interface IAuthContext {
  isAuthenticated: boolean
}
