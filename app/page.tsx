import { Button } from 'components/ui/button'
import { getBaseURL } from 'utils/getBaseURL'

export default function Page() {
  const href = `https://accounts.google.com/o/oauth2/v2/auth?${new URLSearchParams(
    {
      client_id:
        '263399478152-op7a8md9u8ejhnnjtr35pkq75n6k10mf.apps.googleusercontent.com',
      redirect_uri: `${getBaseURL()}/google/callback`,
      scope: [
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',
      ].join(' '),
      response_type: 'token',
      prompt: 'consent',
    },
  )}`

  return (
    <div className="flex h-dvh items-center justify-center">
      <Button asChild>
        <a href={href} target="_blank" rel="noopener noreferrer">
          Continue with Google
        </a>
      </Button>
    </div>
  )
}
