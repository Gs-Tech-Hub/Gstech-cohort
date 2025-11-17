import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('API /contact', data)
    return NextResponse.json({ ok: true })
  } catch (e) {
    return NextResponse.json({ error: 'bad' }, { status: 500 })
  }
}
