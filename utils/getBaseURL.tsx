import { HOST } from 'lib/urls'
import { isProd } from 'utils/isProd'

export const getBaseURL = () => {
  return isProd() ? HOST : `http://localhost:${process.env.PORT ?? 3000}`
}
