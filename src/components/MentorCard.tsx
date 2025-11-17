// src/components/MentorCard.tsx
import React from 'react'

export default function MentorCard({ name, role, expertise, avatar }: { name: string; role?: string; expertise?: string; avatar?: string }) {
  return (
    <div className="bg-white dark:bg-[#0b1220] rounded-lg p-6 text-center shadow">
      <img src={avatar} alt={name} className="w-24 h-24 rounded-full mx-auto object-cover" />
      <div className="mt-4 font-semibold">{name}</div>
      <div className="text-sm text-gray-500 dark:text-gray-400">{role}</div>
      <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">{expertise}</div>
    </div>
  )
}
