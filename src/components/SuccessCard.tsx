// src/components/SuccessCard.tsx
import React from 'react'

export default function SuccessCard({ title, image, description, link }: { title: string; image?: string; description?: string; link?: string }) {
  return (
    <a className="block rounded-lg overflow-hidden shadow hover:shadow-lg bg-white dark:bg-[#0b1220]" href={link || '#'}>
      <div style={{ backgroundImage: `url(${image})` }} className="h-40 bg-cover bg-center" />
      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{description}</p>
      </div>
    </a>
  )
}
