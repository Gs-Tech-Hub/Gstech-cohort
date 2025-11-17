// src/components/PillarCard.tsx
import React from 'react'

export default function PillarCard({ title, description, icon }: { title: string; description: string; icon?: string }) {
  return (
    <div className="
      p-6
      bg-white/10 dark:bg-[#0b1220]/20
      rounded-xl
      border border-[var(--primary)]/40 dark:border-[var(--primary)]/25
      shadow-sm hover:shadow-md
      transition-all duration-300
      flex gap-4 items-start
    ">
      {/* Icon Circle */}
      <div className="
        w-12 h-12
        rounded-full
        bg-[var(--primary)]/90
        text-white
        flex items-center justify-center
        flex-shrink-0
        shadow
      ">
        {icon ? (
          <img src={icon} alt={`${title} icon`} className="w-6 h-6" />
        ) : (
          <span className="text-sm font-bold">{title.charAt(0)}</span>
        )}
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <div className="font-semibold text-[var(--text-primary)]">{title}</div>
        <div className="text-sm text-[var(--text-secondary)] mt-1 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  )
}
