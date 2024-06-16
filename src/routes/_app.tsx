import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  beforeLoad: ({ context: { queryClient } }) => {
    const session = queryClient.getQueryData(['account/sessions/current'])
    if (!session) redirect({ to: '/login' })
  },
  component: () => {
    return <div>Hello /_app!</div>
  },
})
