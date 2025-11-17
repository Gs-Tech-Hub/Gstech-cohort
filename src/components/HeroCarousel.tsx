// src/components/HeroCarousel.tsx
'use client'
import React from 'react'
import HeroSlide from './HeroSlide'
import { programs } from '../data/programs'

export default function HeroCarousel() {
  const slides = programs
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="relative h-screen-75 overflow-hidden">
      {slides.map((s, i) => (
        <HeroSlide key={s.slug} active={i === index} {...s} />
      ))}

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  )
}
