import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
  // loader: async ({ context: { auth, queryClient } }) => {
  //   await queryClient.prefetchQuery({ queryKey: ['session'] })
  //   console.log(auth.session)
  // },
  component: () => {
    const session = useQuery({ queryKey: ['account/sessions/current'] })

    if (session.isError) {
      throw new Error('No session found')
    }

    return <div>Hello /_app!</div>
  },
})
