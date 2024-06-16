import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context: { queryClient } }) => {
    await queryClient.getQueryData(['session'])
  },
  component: () => {
    return (
      <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
        <div className="flex my-auto h-screen items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6 xl:ml-auto xl:mr-12 flex-grow-0">
            <Outlet />
          </div>
        </div>
      </div>
    )
  },
})
