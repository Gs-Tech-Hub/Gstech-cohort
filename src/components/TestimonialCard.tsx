import React from 'react'

export default function TestimonialCard({ name, role, quote, avatar }: { name: string, role: string, quote: string, avatar?: string }) {
  return (
    <div className="p-6 bg-white dark:bg-[#0b1220] rounded shadow">
      <div className="flex items-center gap-4">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
        </div>
      </div>
      <p className="mt-4">"{quote}"</p>
    </div>
  )
}
