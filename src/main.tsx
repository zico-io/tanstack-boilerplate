import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'

import { RouterProvider } from '@tanstack/react-router'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { localStoragePersister, queryClient } from '@/lib/query'
import { router } from '@/lib/router'

const rootElement = document.getElementById('app') as HTMLDivElement
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{ persister: localStoragePersister }}
      >
        <RouterProvider router={router} />
      </PersistQueryClientProvider>
    </StrictMode>,
  )
}
