import { isAxiosError } from 'axios'

export const throwError = (e?: unknown) => {
  if (!e) throw new Error('An unknown error has occurred')
  if (isAxiosError(e)) {
    if (e.response) {
      // Request was made and server responded with a status code
      console.error(e.message)
      const status = e.response.status

      // Unauthorized
      if (status === 401) return null

      // Too Many Requests
      if (status === 429) return null
    }
  }
}
