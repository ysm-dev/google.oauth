import { HOST } from 'lib/urls'
import { isProd } from 'utils/isProd'

export const getBaseURL = () => {
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`

  return isProd() ? HOST : `http://localhost:${process.env.PORT ?? 3000}`
}
