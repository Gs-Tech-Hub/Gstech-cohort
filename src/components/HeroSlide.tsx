// src/components/HeroSlide.tsx
import React from 'react'

type Props = {
  slug?: string
  title?: string
  subtitle?: string
  image?: string
  active?: boolean
}

export default function HeroSlide({ title, subtitle, image, active }: Props) {
  return (
    <div
      className={`absolute inset-0 transition-opacity duration-700 ${active ? 'opacity-100' : 'opacity-0'} bg-cover bg-center`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 bg-black/70" />
      <div className="relative max-w-[1200px] mx-auto px-6 py-40 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="mt-4 text-lg md:text-2xl max-w-2xl">{subtitle}</p>
        <div className="mt-6 flex gap-4">
          <a href={`/programs/${title?.toLowerCase().split(' ').join('-')}`} className="btn-primary">Learn More</a>
          <a href="/apply" className="px-4 py-2 rounded-md border">Apply</a>
        </div>
      </div>
    </div>
  )
}
