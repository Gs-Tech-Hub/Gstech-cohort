import React from 'react'

export default function MetricsCounters() {
  const items = [
    { label: 'Startups supported', value: 120 },
    { label: 'Youth trained', value: 2400 },
    { label: 'Mentors onboard', value: 80 },
    { label: 'Scholarships', value: 45 }
  ]

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {items.map(it => (
        <div key={it.label} className="p-6 bg-white dark:bg-[#0b1220] rounded text-center">
          <div className="text-4xl font-bold">{it.value}</div>
          <div className="mt-2 text-sm">{it.label}</div>
        </div>
      ))}
    </div>
  )
}
