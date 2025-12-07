import { NextResponse } from 'next/server'
import { prisma } from '../../../src/lib/prisma'

export async function POST(req: Request) {
  try {
    const data = await req.json()
    console.log('API /apply payload', data)

    const {
      name,
      email,
      phone,
      program,
      role,
      startupName,
      stage,
      website,
      message,
      pitchFileName,
    } = data

    if (!name || !email || !role || !message) {
      return NextResponse.json({ error: 'missing_fields' }, { status: 400 })
    }

    const application = await prisma.application.create({
      data: {
        name: String(name),
        email: String(email),
        phone: phone ? String(phone) : null,
        program: program ? String(program) : null,
        role: String(role),
        startupName: startupName ? String(startupName) : null,
        stage: stage ? String(stage) : null,
        website: website ? String(website) : null,
        message: String(message),
        pitchFileName: pitchFileName ? String(pitchFileName) : null,
      },
    })

    return NextResponse.json({ ok: true, id: application.id }, { status: 200 })
  } catch (e) {
    console.error('Apply API error', e)
    return NextResponse.json({ error: 'server_error' }, { status: 500 })
  }
}
