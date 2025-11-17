import React from 'react'
import { events } from '../../src/data/events'

export default function EventsPage(){
  return (
    <div className="max-w-[1000px] mx-auto py-20 px-6">
      <h1 className="text-3xl font-semibold mb-6">Events & Community</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {events.map(ev => (
          <div key={ev.id} className="rounded border p-4">
            <h3 className="font-semibold">{ev.title}</h3>
            <p className="text-sm">{ev.date} — {ev.location}</p>
            <p className="mt-2">{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
