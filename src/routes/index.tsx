import { Button } from '@/components/ui/button'
import { Link, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => {
    return (
      <>
        <div className="hidden flex-col md:flex">
          <div className="border-b relative">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-3xl font-bold tracking-tight">Page Title</h2>
              <div className="flex items-center space-x-2">
                <Button>
                  <Link to="/login">Action</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div id="centered" className="flex flex-col flex-grow justify-center">
          <div id="content" className="flex flex-col items-center mx-auto">
            <h1>Bingus</h1>
            <Button>Press Me</Button>
          </div>
        </div>
      </>
    )
  },
})
