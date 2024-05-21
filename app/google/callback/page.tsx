'use client'

import { isServer } from 'utils/isServer'

if (!isServer()) {
  !(async () => {
    const hash = location.hash.slice(1)
    const searchParams = new URLSearchParams(hash)

    const access_token = searchParams.get('access_token')

    const res = await fetch(
      'https://www.googleapis.com/oauth2/v1/userinfo?alt=json',
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    )

    const result: R = await res.json()
    const { email, name = '', picture = '' } = result

    console.log(result)

    // set cookie and login redirect

    // location.href = ``
  })()
}

export default function Page() {
  return <></>
}

type R = {
  email: string
  family_name: string
  given_name: string
  id: string
  locale: string
  name: string
  picture: string
  verified_email: boolean
}
