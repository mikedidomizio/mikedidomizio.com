import { NextRequest, NextResponse } from 'next/server'

const handler = async (req: NextRequest, res: NextResponse) => {
  const json = await req.json()
  const API_KEY = process.env.EMAILOCTOPUS_API_KEY
  const LIST_ID = process.env.EMAILOCTOPUS_LIST_ID
  const API_URL = 'https://emailoctopus.com/api/1.6/'

  const data = {
    email_address: json.email,
    fields: {
      FirstName: json.firstName ?? null,
      LastName: json.lastName ?? null,
    },
    api_key: API_KEY,
  }

  const API_ROUTE = `${API_URL}lists/${LIST_ID}/contacts`

  try {
    const response = await fetch(API_ROUTE, {
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })

    if (response.status >= 400) {
      return NextResponse.json(
        { error: `There was an error subscribing to the list` },
        { status: response.status }
      )
    }
    return NextResponse.json(
      { message: 'Successfully subscribed to the newsletter' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json({ error: error.message || error.toString() }, { status: 500 })
  }
}

export { handler as POST }
