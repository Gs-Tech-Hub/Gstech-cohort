// src/components/ProgramCard.tsx
import React from 'react'
import { Program } from '../data/programs'

export default function ProgramCard({ title, subtitle, image, duration }: Program) {
  return (
    <article className="
      rounded-2xl overflow-hidden
      shadow-md hover:shadow-xl
      transition-all duration-300
      bg-[var(--bg-secondary)] dark:bg-[#0b1220]
      flex flex-col
    ">
      {/* IMAGE with subtle overlay */}
      <div className="relative h-52">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-2xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-t-2xl"></div>
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">{title}</h3>
        {subtitle && <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{subtitle}</p>}

        <div className="mt-auto flex items-center justify-between pt-4">
          {duration && <span className="text-sm text-[var(--text-secondary)]">{duration}</span>}

          {/* Apply Button */}
          <a
            href={`/apply?program=${title?.toLowerCase().split(' ').join('-')}`}
            className="
              px-4 py-2 rounded-md
              bg-[var(--primary)] text-white
              hover:bg-[var(--primary)]/90
              transition-colors duration-300 font-medium text-sm
            "
          >
            Apply
          </a>
        </div>
      </div>
    </article>
  )
}
