import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('API /apply payload', data)
    // Validate and send to DB / email here in production
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e) {
    return NextResponse.json({ error: 'bad' }, { status: 500 })
  }
}
