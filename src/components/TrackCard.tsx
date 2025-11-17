// src/components/TrackCard.tsx
import React from 'react'

export default function TrackCard({ id, title, desc }: { id: string; title: string; desc: string }) {
  return (
    <div className="
      p-6
      bg-white/10 dark:bg-[#0b1220]/20
      rounded-xl
      border border-[var(--primary)]/30 dark:border-[var(--primary)]/25
      shadow-sm hover:shadow-md
      transition-all duration-300
      hover:-translate-y-1
      flex flex-col
      justify-between
      h-full
    ">
      {/* Track Title with underline accent */}
      <div className="text-lg font-semibold text-[var(--text-primary)] relative mb-3">
        {title}
        <span className="absolute left-0 bottom-0 w-16 h-1 bg-[var(--primary)] rounded-full"></span>
      </div>

      {/* Description */}
      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">{desc}</p>
    </div>
  )
}
