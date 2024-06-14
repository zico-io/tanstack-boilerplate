import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import '@/index.css'

import { RouterProvider } from '@tanstack/react-router'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/query'
import { router } from '@/lib/router'
import { ConfigProvider } from 'antd'

const themeConfig = {
  colorPrimary: '#00b96b',
  borderRadius: 2,
}

const rootElement = document.getElementById('app') as HTMLDivElement
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider theme={{ token: themeConfig }}>
          <RouterProvider router={router} />
        </ConfigProvider>
      </QueryClientProvider>
    </StrictMode>,
  )
}
