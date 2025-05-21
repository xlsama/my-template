import { up } from 'up-fetch'
import { toast } from 'vue-sonner'

export const request = up(fetch, () => ({
  baseUrl: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
  parseResponse: async (res) => {
    const data = await res.json()

    if ([400, 401, 403, 500, 502, 503, 504].includes(res.status)) {
      toast.error(res.statusText)

      if (res.status === 401) {
        console.error('401')
      }

      return Promise.reject(res.statusText)
    }

    return data
  },
  reject: () => false,
}))
